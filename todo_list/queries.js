const user = require("./models").user
const todoItem = require("./models").todoItem
const todoList = require("./models").todoList

async function getUser() {
    const User = await user.findByPk(2,{
      include: [
        { model: todoList,
          attributes: ["name"], 
          include : { 
            model: todoItem,
            attributes: ["name"]
          }
        }
        ]
    }
    

    );
    return User.get({plain:true})
  }
  
  getUser().then(users => console.log(users.todoLists[0].todoItems));

async function getImportantTodoItems() {
    const todoItems = await todoItem.findAll({
        where: {
            important: true
        },
        include: [{model: todoList, attributes: ["name"]}]
        
    })

    return todoItems.map(i=>i.get({plain:true}))
}

// getImportantTodoItems().then(item => console.log(item))