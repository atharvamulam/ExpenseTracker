const { Router } = require("express");


const multer = require('multer');
// import { path } from "path";
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Points , Income , Expense ,Todo } = require("../db/db");
const { default: mongoose } = require("mongoose");


const storage = multer.memoryStorage();


// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // console.log("hi")

    const u = await  User.findOne({
        username : username  
        
     , password : password}) ;

    //  console.log(u) ;

     if(u )
        {
            // console.log("username already taken")
            
            res.send("username already taken");
        }

        else {
            User.create({
                
                username, 
                password
            })
        res.json({
            message: "User created successfully"
        })
        }

        

});

router.post('/login',async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const ans =  await User.findOne({
        username : username  
        
     , password : password})


     if(ans)
        {

            res.json({
                message: "User  is Present"
            })
        }

        else {
            res.send("First signup");
        }
});

router.post('/add', async (req, res) => {
    // Implement user signup logic
    const v  = req.body.val ;
    const username = req.body.username;
    const month  = req.body.month ;
    console.log(month) ;
    const date  = req.body.date ;
    const year  = req.body.year ;
    
    const category = req.body.category ;
    const amount = req.body.amount ;
    const description = req.body.description ;


    const ans =  await User.findOne({
        username : username  
        
     })


     if(ans)
        {
            const incomee = "income" 
            if(v == "2")
                {
                    Expense.create({
        
                        username ,
                        month , 
                        date , 
                        year ,
                        category, 
                        amount, 
                        description,
                        v
                    });
                }

    else
        {
            const exp = "expense"
            Expense.create({

                username , 
                month ,
                date , 
                year ,
                category, 
                amount,
                description ,
                 v
            });

        }
        res.json({
            message: "Amount added successfully in " + (v == "1" ? "Income"  : "Expense")
        })
        
        }

    
        else
        {

            res.send("First sign up ");


        }

    
});

router.post('/display/:userName' ,async (req, res) => {

    // Implement listing all courses logic
     // Implement fetching all courses logic
     const username  =  req.params.userName ; 
     let month  =  req.body.month ; 
 
     const ans =  await User.findOne({
        username : username  
        
     })

     if(ans)
        {
        
            
            let mont = month.toString();
     const response = await Expense.find({username : username , month : mont}).sort({ $natural: -1 }).limit(5);

    //  if (response.length === 0) {
    //     // Handle empty response
    //     res.json({
    //         allExpenses: "null"
    //     });

    //     }

        
        {
            res.json({
                allExpenses: response
            })

        }
      
    
    }

    else
    {
        res.send("first sign up ");

    }

     
});

router.get('/display',async (req, res) => {
    // Implement listing all courses logic
     // Implement fetching all courses logic

     const username  =  req.body.username ; 
     const ans =  await User.findOne({
        username : username  
        
     })

     if(ans)
        {
            const response = await Expense.find({username : username}).limit(5);

            res.json({
                fiveExpenses: response
            })
        }

        else {
            res.json({
                msg : "first sign up "
            })
        }

});

router.post('/visualize',async(req, res)=>{

const big_array = [] ;
let ex = 0 ;
let inc = 0 ;
    for(let i = 0 ;i < 12 ;i++)
        {
            ex = 0;
            inc = 0 ;
            const small_array = [];
            const records  =  await Expense.find({
                username : "param",
                month : i
               
             }) ;

             records.map((record) =>{
                if(record.month == i  && record.amount > 0 )
                    {
                        inc += record.amount;
                    }
                    if(record.month == i  && record.amount < 0 )
                        {
                            ex += record.amount;
                        }
             })

              ex = ex * -1;
            
             small_array.push(ex);
             small_array.push(inc);

             big_array.push(small_array);

        }

        console.log(big_array);









    res.send(big_array) ; 

})

router.post('/seeall',async (req, res)=>{

const username  =  req.body.username ; 
     

    const ans =  await User.findOne({
       username : username  
       
    })

    if(ans)
       {
       
           
           
    const response = await Expense.find({username : username })

   //  if (response.length === 0) {
   //     // Handle empty response
   //     res.json({
   //         allExpenses: "null"
   //     });

   //     }

       
       {
           res.json({
               allExpenses: response
           })

       }
     
   
   }

   else
   {
       res.send("first sign up ");

   }
     

})




router.post('/data',async (req, res)=>{

    const username  =  req.body.username ; 
         
    
        const ans =  await User.findOne({
           username : username  
           
        })
    
        if(ans)
           {
           
               
               
        const response = await Expense.find({username : username })
    
       //  if (response.length === 0) {
       //     // Handle empty response
       //     res.json({
       //         allExpenses: "null"
       //     });
    
       //     }
    
           
           {
               res.json({
                   allExpenses: response
               })
    
           }
         
       
       }
    
       else
       {
           res.send("first sign up ");
    
       }
         
    
    })
    


router.post('/calculate',async (req, res)=>{

    try{

    const username  = req.body.username ;
    const month = req.body.month ;
    let ex = 0 ;
    let inc = 0 ;

    const records  =  await Expense.find({
        username : username ,
        month : month
        
     }) ; 

     

     records.map((record) =>{
        if(record.month == month  && record.amount > 0 )
            {
                inc += record.amount;
            }
            if(record.month == month  && record.amount < 0 )
                {
                    ex += record.amount;
                }
     })


     res.json({
        "income" : inc ,
        "expense" : ex
     });

    }

    catch(e)
    {
        res.json(e)
    }
    
     

})


router.post('/alltransac',async (req, res)=>{

    try{

    const username  = req.body.username ;
    
    let ex = 0 ;
    let inc = 0 ;

    const records  =  await Expense.find({
        username : username 
    
        
     }) ; 

     

     records.map((record) =>{
        if(record.amount > 0 )
            {
                inc += record.amount;
            }
            if( record.amount < 0 )
                {
                    ex += record.amount;
                }
     })


     res.json({
        "income" : inc ,
        "expense" : ex
     });

    }

    catch(e)
    {
        res.json(e)
    }
    
     

})

router.put('/update',async(req,res)=>{

    try{
        const username  = req.body.username ;
        const id  = req.body.id ;
console.log(username);
console.log(id);
        const ans =  await User.findOne({
            username : username  
            
         })

         console.log(ans);

         if(ans.length !=0)
            {

                
        const record =  await Expense.find({
            username : username ,
            _id : id
            
         }) ; 

         console.log(record);

         if(record.length !=0)
            {

                res.json(record)
            }
            else{
                res.json({
                    message :"something is wrong "
                })
            }

            }


            else {

                res.json({
                    message :"First sigup or wrong id"
                })
            }

        

    }

    catch(e)
    {
        res.json(e);
    }


})

router.put('/update1',async(req,res)=>{

    try{
        const username  = req.body.username ;
        const month  = req.body.month ;
    console.log(month) ;
    const date  = req.body.date ;
    const year  = req.body.year ;
    const id  = req.body.id ;
    const category = req.body.cat ;
    const amount = req.body.amount ;
    const description = req.body.desc ;

    

        
console.log(username);
console.log(id);
        const ans =  await User.findOne({
            username : username  

            
         })

         console.log(ans);

         if(ans.length !=0)
            {

                
        const record =  await Expense.updateOne({
            username : username ,
            _id : id
            
         },{$set:{"amount" :amount ,"month" : month ,"date" :date ,"year" : year ,"category":category ,"description" :description}}) ; 

         console.log(record);

         if(record.length !=0)
            {

                res.json(record)
            }
            else{
                res.json({
                    message :"something is wrong "
                })
            }

            }


            else {

                res.json({
                    message :"First sigup or wrong id"
                })
            }

        

    }

    catch(e)
    {
        res.json(e);
    }


})
// router.post('/courses/:courseId', userMiddleware, async(req, res) => {
//     // Implement course purchase logic
//     const courseId = req.params.courseId;
//     const username = req.headers.username;

//     await User.updateOne({
//         username: username
//     }, {
//         "$push": {
//             purchasedCourses: courseId
//         }
//     })
//     res.json({
//         message: "Purchase complete!"
//     })
// });

// router.get('/purchasedCourses', userMiddleware, async (req, res) => {
//     // Implement fetching purchased courses logic
//     const user = await User.findOne({
//         username: req.headers.username
//     });

//     console.log(user.purchasedCourses);
//     const courses = await Course.find({
//         _id: {
//             "$in": user.purchasedCourses
//         }
//     });

//     res.json({
//         courses: courses
//     })
// });



//todo backend


router.post('/todo', async (req, res) => {
    // Implement user signup logic
    
    const username = req.body.username;
   

    const date  = req.body.date ;

    const time  = req.body.time ;
    const deletetime  = req.body.deletetime ;
    const month  = req.body.month ;
    const todo = req.body.todo ;
    const veri = req.body.veri;
    
    

    const ans =  await User.findOne({
        username : username  
        
     })


     if(ans)
        {
            
                    Todo.create({
        
                        username ,
                   
                        date , 

                      month,
                        time, 
                        deletetime, 
                        todo,
                    veri
                    });

                    res.json({
                        message: "todo added successfully "
                    })
                }

    
     
        
        

    
        else
        {

            res.send("First sign up ");


        }

    
});

router.post('/todos' ,async (req, res) => {

    // Implement listing all courses logic
     // Implement fetching all courses logic
     const username  =  req.body.username ; 
     const month  =  req.body.month ; 
 
     const ans =  await User.findOne({
        username : username  
        
     })

     if(ans)
        {
        
            
            
     const response = await Todo.find({username : username , month : month}).sort({ $natural: -1 }).limit(5);

    //  if (response.length === 0) {
    //     // Handle empty response
    //     res.json({
    //         allExpenses: "null"
    //     });

    //     }

        
        {
            res.json({
                monthlyTodos: response
            })

        }
      
    
    }

    else
    {
        res.send("first sign up ");

    }

     
});


const upload = multer({ storage: multer.memoryStorage() });

router.put("/addimage", upload.single('image'), (req, res) => {
    const id = req.body.id;
    const obj = {
        img: {
            img_data: req.file.buffer,
            img_contentType: req.file.mimetype
        }
    };
    
    Todo.updateOne({_id: id}, {$set: obj})
        .then(() => {
            res.status(200).json({ message: "Image inserted successfully" });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Failed to insert image" });
        });
});


router.delete("/deletetodo",async (req,res)=>{

    try{
        const id  = req.body.id ;
        console.log(id);
        console.log("Helllo");

        Todo.deleteOne({_id :id}).then(() => {
            res.status(200).json({ message: "document deleted" });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Failed to delete document" });
        });

        



 
    }
    catch(e)
    {
        console.log(e);
    }

} )



router.post("/alltodos",  async(req,res)=>{

    try{

        const username  = req.body.username ;

        const ans  = User.findOne({username : username});
        
        if(ans)
            {
                const response =  await Todo.find({});

                res.json({
                    allTodos: response 
                })

            }

            else{
                res.send("First sign up")
            }

    }
    catch(e)
    {
        console.log(e);
    }

})
module.exports = router