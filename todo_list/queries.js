const { Op } = require("sequelize");

const TodoItem = require("./models").todoitem;
const User = require("./models").user;


async function searchTodoItems(){
    try{
        const search1 = await TodoItem.findAll().map(item => item.get({plain:true}));
        
        const search2 = await User.findByPk(1)

        // const search3 = await User.create({
        //     name: "Robbert",
        //     email: "robbert@robbert.com",
        //     phone: 1234 
        // })

        const search4 = await TodoItem.findAll({
            where: {
                important: true
            }
        }).map(item => item.get({plain:true}));

        return search4
        

    } catch(e){
        console.log('error:',e);
    }
}

searchTodoItems().then(results => console.log(results))