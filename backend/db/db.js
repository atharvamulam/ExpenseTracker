const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://2021paramkeswani:KSfkpF7P47SdrQxQ@cluster0.uakzys5.mongodb.net/' ,{
    
});

// Define schemas
// const AdminSchema = new mongoose.Schema({
    
//     username: String,
//     password: String,
//     // Schema definition here
// });

const UserSchema = new mongoose.Schema({
    id: Number,
    username: String,
    password: String

    // Schema definition here
});

const PointsSchema = new mongoose.Schema({
    id: Number,
    username: String,
    points: Number,
    
    // Schema definition here
});

const ExpenseSchema = new mongoose.Schema({
    
    username: String,
    month : String ,
    date : String,
    year : String, 
    category : String ,
    amount : Number ,
    description :String,
    ie : Number

    
    
    // Schema definition here
});

const IncomeSchema = new mongoose.Schema({
    
    username: String,
    month : String ,
    date : String,
    year : String, 
    category : String ,
    amount : Number ,
    description :String
    
    
    // Schema definition here
});

const TodoSchema = new mongoose.Schema({
    
    username: String,
    
    date : String,
    month :String ,
    approved :{ type: Boolean, default: false },

    img :{
        img_data: Buffer,
        img_contentType: String

    }
    ,
 
    time:String,
    completion :Boolean ,
    deletetime:String, 
    todo : String ,
    Veri: String ,
  
    
    
    // Schema definition here
});

const Points = mongoose.model('Points', PointsSchema);
const User = mongoose.model('User', UserSchema);
const Expense = mongoose.model('Expense', ExpenseSchema);
const Income = mongoose.model('Income', IncomeSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    Points,
    User,
    Expense ,
    Income,Todo
}