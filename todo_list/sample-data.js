const TodoItem = require("./models").todoitem;

async function createSampleTodoItems() {
  try {
    const todo1 = await TodoItem.create({
      name: "Clean bedroom",
      important: false,
    });
    const todo2 = await TodoItem.create({
      name: "Learn to code",
      important: true,
    });
    const todo3 = await TodoItem.create({
      name: "Have fun",
      important: true,
    });

    return [todo1, todo2, todo3].map(item => item.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

createSampleTodoItems().then(todos => console.log(todos));