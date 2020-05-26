const { Op } = require("sequelize");

const TodoItem = require("./models").todoItem;
const User = require("./models").user;


async function searchTodoItems(){
    try{
        const search1 = await TodoItem.findAll().map(item => item.get({plain:true}));
        
        const search2 = await User.findByPk(1)

      

       

        return search1
        

    } catch(e){
        console.log('error:',e);
    }
}

searchTodoItems().then(results => console.log(results))