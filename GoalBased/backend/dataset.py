# import pandas as pd
# import numpy as np

# # Define parameters
# num_records = 5000
# income_range = (30000, 200000)
# percentage_invest_range = (5, 50)
# goal_types = ['short-term', 'medium-term', 'long-term']
# risk_appetites = ['low', 'medium', 'high']

# # Generate random data
# np.random.seed(42)  # For reproducibility

# incomes = np.random.randint(income_range[0], income_range[1], num_records)
# percentages_invest = np.random.randint(percentage_invest_range[0], percentage_invest_range[1], num_records)
# goals = np.random.choice(goal_types, num_records)
# risk_appetites = np.random.choice(risk_appetites, num_records)

# # Calculate expected rate of return based on risk appetite
# expected_returns = []
# for risk in risk_appetites:
#     if risk == 'low':
#         expected_returns.append(np.random.uniform(2, 5))
#     elif risk == 'medium':
#         expected_returns.append(np.random.uniform(5, 10))
#     else:
#         expected_returns.append(np.random.uniform(10, 15))

# # Calculate goal feasibility and duration
# goal_feasibility = []
# goal_durations = []

# for income, percentage, goal, exp_return in zip(incomes, percentages_invest, goals, expected_returns):
#     invest_amount = (income * percentage) / 100
#     projected_return = invest_amount * (1 + exp_return / 100)
    
#     if goal == 'short-term':
#         duration = np.random.randint(1, 3)  # 1-2 years
#         feasibility = 'Feasible' if projected_return >= 5000 else 'Not Feasible'
#     elif goal == 'medium-term':
#         duration = np.random.randint(3, 7)  # 3-6 years
#         feasibility = 'Feasible' if projected_return >= 20000 else 'Not Feasible'
#     else:
#         duration = np.random.randint(7, 15)  # 7-14 years
#         feasibility = 'Feasible' if projected_return >= 50000 else 'Not Feasible'
    
#     goal_feasibility.append(feasibility)
#     goal_durations.append(duration)

# # Create DataFrame
# data = {
#     'Income': incomes,
#     'Percentage_of_Income_to_Invest': percentages_invest,
#     'Goal': goals,
#     'Risk_Appetite': risk_appetites,
#     'Expected_Rate_of_Return': expected_returns,
#     'Goal_Feasibility': goal_feasibility,
#     'Duration_to_Achieve_Goal': goal_durations
# }

# df = pd.DataFrame(data)

# # Save to CSV
# df.to_csv('investment_data.csv', index=False)

# print("Dataset generated and saved to 'investment_data.csv'.")

import pandas as pd
import numpy as np

# Define parameters
num_records = 30000
income_range = (10000, 1000000)  
percentage_invest_range = (5, 50)
goal_types = ['short', 'medium', 'long']
risk_appetites = ['low', 'medium', 'high']

# Define specific goals for each goal type
specific_goals = {
    'short': ['Buy a laptop', 'Go on a vacation', 'Pay off a small loan','Purchase a smartphone','Upgrade clothing','Buy fancy shoes'],
    'medium': ['Buy a motorcycle', 'Save for higher education', 'Build an emergency fund','Take a professional certification course','Buy home appliances','Travel abroad for holiday'],
    'long': ['Buy a car', 'Save for a house down payment', 'Start a business',"Save for children's education",'Build a retirement fund','Invest in a property']
}

# Generate random data
np.random.seed(42)  # For reproducibility

incomes = np.random.randint(income_range[0], income_range[1], num_records)
percentages_invest = np.random.randint(percentage_invest_range[0], percentage_invest_range[1], num_records)
goals = np.random.choice(goal_types, num_records)
risk_appetites = np.random.choice(risk_appetites, num_records)

# Assign specific goals based on the type of goal
type_of_goals = [np.random.choice(specific_goals[goal]) for goal in goals]

# Calculate expected rate of return based on risk appetite
expected_returns = []
for risk in risk_appetites:
    if risk == 'low':
        expected_returns.append(np.random.uniform(2, 5))
    elif risk == 'medium':
        expected_returns.append(np.random.uniform(5, 10))
    else:
        expected_returns.append(np.random.uniform(10, 15))

# Calculate goal feasibility and duration
goal_feasibility = []
goal_durations = []

for income, percentage, goal, exp_return in zip(incomes, percentages_invest, goals, expected_returns):
    invest_amount = (income * percentage) / 100
    projected_return = invest_amount * (1 + exp_return / 100)
    
    if goal == 'short-term':
        duration = np.random.randint(1, 3)  # 1-2 years
        feasibility = 'Feasible' if projected_return >= 50000 else 'Not Feasible'
    elif goal == 'medium-term':
        duration = np.random.randint(3, 7)  # 3-6 years
        feasibility = 'Feasible' if projected_return >= 200000 else 'Not Feasible'
    else:
        duration = np.random.randint(7, 15)  # 7-14 years
        feasibility = 'Feasible' if projected_return >= 500000 else 'Not Feasible'
    
    goal_feasibility.append(feasibility)
    goal_durations.append(duration)

# Create DataFrame
data = {
    'Income': incomes,
    'Percentage_of_Income_to_Invest': percentages_invest,
    'Goal': goals,
    'Risk_Appetite': risk_appetites,
    'Expected_Rate_of_Return': expected_returns,
    'Goal_Feasibility': goal_feasibility,
    'Duration_to_Achieve_Goal': goal_durations,
    'Type_of_Goal': type_of_goals
}

df = pd.DataFrame(data)

# Save to CSV
df.to_csv('investment_data.csv', index=False)

print("Dataset generated and saved to 'investment_data.csv'.")
