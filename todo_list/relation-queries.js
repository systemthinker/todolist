const { User } = require("./models").user;
const { TodoList } = require("./models").todolist;
const { TodoItem } = require("./models").todoitem;

async function listsWithUsers() {
  const lists = await TodoList.findAll({
    include: [User],
  });

  return lists.map(list => list.get({ plain: true }));
}

listsWithUsers().then(lists => console.log(lists));