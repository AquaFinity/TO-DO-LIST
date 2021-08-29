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
module.exports.home = function(req,res){
    return res.render('home',{
        title: "TO-DO APP",
        todo_list:  todoList
    });
}