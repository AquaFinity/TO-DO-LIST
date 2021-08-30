const Todo = require("../models/todo");


var todoList = [
    {
        description: "Let's Make a TO-DO List",
        category: "Personal",
        date: "29/8/2021"
    },
    {
        description: "Bring Vegetables from Market",
        category: "School",
        date: "29/8/2021"
    },
    {
        description: "Finish my Assignment",
        category: "Work",
        date: "29/8/2021"
    },
    {
        description: "Finish my Assignment",
        category: "Cleaning",
        date: "29/8/2021"
    },
    {
        description: "Finish my Assignment",
        category: "Other",
        date: "29/8/2021"
    }
]
module.exports.create = function(req,res){
    //console.log(req.body);
    /*
    todoList.push(
        {
            description: req.body.description,
            category: req.body.category,
            date: req.body.date
        }
    )
    */
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err,newTodo){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log(newTodo);
        return res.redirect('back');
    })
}
module.exports.home = function(req,res){
    Todo.find({},function(err,todos){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
        return res.render('home',{
            title: "TO-DO APP",
            todo_list:  todos
        });
    })
}
