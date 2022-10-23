import { useState } from "react";

import "./global.module.css";
import style from "./App.module.css";
import plus from "./assets/img/plus.png";
import { Header } from "./components/Header";
import { NoTask } from "./components/NoTask";
import { ToDo } from "./components/ToDo";

type ToDoType = {
  id: number;
  isDone: boolean;
  content: string;
};

function App() {
  const [toDoList, setToDoList] = useState<ToDoType[]>([]);
  const [newTaskContent, setNewTaskContent] = useState("");
  const [taskCount, setTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const deleteTask = function (id: number) {
    const updatedToDoList = toDoList.filter((todo: ToDoType) => todo.id !== id);
    setToDoList(updatedToDoList);
    setTaskCount(toDoList.length - 1);
  };

  const updateCompletedtTasksCount = function () {
    const completedTasks = toDoList.filter(
      (todo) => todo.isDone === true
    ).length;
    setCompletedTaskCount(completedTasks);
  };

  const taskStatusToggle = function (id: number) {
    const updatedToDoList = toDoList.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
        updateCompletedtTasksCount();
        return todo;
      }
      updateCompletedtTasksCount();
      return todo;
    });
    setToDoList(updatedToDoList);
  };

  const addTask = function () {
    event?.preventDefault();
    const id = newTaskContent.length * Math.random() + Math.random();
    const newTask = {
      id,
      content: newTaskContent,
      isDone: false,
    };

    setToDoList([...toDoList, newTask]);
    setTaskCount(toDoList.length + 1);
    setNewTaskContent("");
  };

  const handleNewTaskChange = function () {
    const element = event?.target as HTMLInputElement;
    setNewTaskContent(element.value);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.body}>
        <form onSubmit={addTask} className={style.form}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            value={newTaskContent}
          />
          <button type="submit">
            <span>Criar </span> <img src={plus} />
          </button>
        </form>

        <div className={style.tasks}>
          <header>
            <div className={style.todo}>
              <strong>Tarefas criadas</strong> <span>{taskCount}</span>
            </div>
            <div className={style.done}>
              <strong>Concluídas</strong> <span>{completedTaskCount}</span>
            </div>
          </header>
          <div className={style.taskList}>
            {toDoList.length === 0 ? (
              <NoTask />
            ) : (
              toDoList.map((todo) => (
                <ToDo
                  handleDeleteTask={deleteTask}
                  key={todo.id}
                  content={todo.content}
                  isDone={todo.isDone}
                  id={todo.id}
                  handleTaskStatusToggle={taskStatusToggle}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
