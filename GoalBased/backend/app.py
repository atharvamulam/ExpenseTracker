# from flask import Flask, request, jsonify
# from flask_pymongo import PyMongo
# from bson import json_util
# from flask_cors import CORS

# app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/investmentDB"
# mongo = PyMongo(app)
# CORS(app) 

# @app.route('/submit', methods=['POST'])
# def submit():
#     data = request.get_json()
#     mongo.db.investments.insert_one(data)
#     return jsonify({"message": "Data submitted successfully"}), 201

# @app.route('/recommend', methods=['POST'])
# def recommend():
#     recommendations = list(mongo.db.investments.find())
#     serialized_recommendations = json_util.dumps(recommendations)
#     return serialized_recommendations

# if __name__ == '__main__':
#     app.run(debug=True)

# ===========================

# from flask import Flask, request, jsonify
# from flask_pymongo import PyMongo
# from bson import json_util
# from flask_cors import CORS
# from sklearn.metrics.pairwise import cosine_similarity
# from sklearn.feature_extraction.text import TfidfVectorizer
# import numpy as np

# app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/investmentDB"
# mongo = PyMongo(app)
# CORS(app)

# @app.route('/submit', methods=['POST'])
# def submit():
#     data = request.get_json()
#     mongo.db.userInputs.insert_one(data)
#     return jsonify({"message": "Data submitted successfully"}), 201

# @app.route('/recommend', methods=['POST'])
# def recommend():
#     user_data = request.get_json()
#     user_profile = f"{user_data['age']} {user_data['income']} {user_data['goal']} {user_data['tenure']} {user_data['risk']}"
    
#     investment_options = list(mongo.db.investmentOptions.find())
#     if not investment_options:
#         return jsonify({"message": "No investment options available"}), 404

#     option_profiles = [
#         f"{opt['risk']} {opt['tenure']} {opt['return_rate']}" for opt in investment_options
#     ]

#     profiles = [user_profile] + option_profiles

#     vectorizer = TfidfVectorizer()
#     tfidf_matrix = vectorizer.fit_transform(profiles)
    
#     cosine_sim = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()
    
#     best_match_idx = np.argmax(cosine_sim)
#     best_match = investment_options[best_match_idx]
    
#     return json_util.dumps(best_match), 200

# if __name__ == '__main__':
#     app.run(debug=True)

# ===========================

from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import json_util
from flask_cors import CORS
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import numpy as np
import pandas as pd

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/investmentDB"
mongo = PyMongo(app)
CORS(app)

# Load investment options from CSV to MongoDB
def load_investment_options():
    df = pd.read_csv('data/investment_data.csv')
    mongo.db.investmentOptions.delete_many({})  # Clear existing data
    mongo.db.investmentOptions.insert_many(df.to_dict('records'))

load_investment_options()

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    mongo.db.userInputs.insert_one(data)
    return jsonify({"message": "Data submitted successfully"}), 201

@app.route('/recommend', methods=['POST'])
def recommend():
    user_data = request.get_json()
    user_profile = f"{user_data['income']} {user_data['goal']} {user_data['investment_percentage']} {user_data['risk']}"

    investment_options = list(mongo.db.investmentOptions.find())
    if not investment_options:
        return jsonify({"message": "No investment options available"}), 404

    option_profiles = [
        f"{opt['income']} {opt['goal']} {opt['investment_percentage']} {opt['risk']}" for opt in investment_options
    ]

    profiles = [user_profile] + option_profiles

    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(profiles)
    
    cosine_sim = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()
    
    best_match_idx = np.argmax(cosine_sim)
    best_match = investment_options[best_match_idx]

    # Additional calculations for expected duration and feasibility
    goal_amount = user_data['goal_amount']
    monthly_investment = float(user_data['income']) * (float(user_data['investment_percentage']) / 100)
    expected_return_rate = best_match['return_rate'] / 100

    expected_duration = np.log(goal_amount / (monthly_investment * expected_return_rate) + 1) / np.log(1 + expected_return_rate)
    feasibility = expected_duration <= user_data['goal_tenure']

    response = {
        "investment_option": best_match,
        "expected_duration_years": expected_duration,
        "expected_return_rate": best_match['return_rate'],
        "feasibility": feasibility
    }
    
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
