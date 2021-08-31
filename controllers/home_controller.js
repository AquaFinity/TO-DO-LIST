const Todo = require("../models/todo");

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
module.exports.delete = function(req,res){
    var items = [];
    for(var key in  req.body){
        items = req.body[key];
    }
    Todo.remove({_id:{$in:items}},function(err,data){
        if(err){
            console.log("Error occured in deleting data from database")
            return;
        }
        res.redirect('back');
    });
}

