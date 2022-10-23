import styles from "./ToDo.module.css";
import Layer from "../assets/img/Layer.png";
import Checked from "../assets/img/check.png";
import NotChecked from "../assets/img/notcheck.png";

interface ToDoInterface {
  id: number;
  isDone: boolean;
  content: string;
  handleDeleteTask: (id: number) => void;
  handleTaskStatusToggle: (id: number) => void;
}

export function ToDo({
  id,
  isDone,
  content,
  handleDeleteTask,
  handleTaskStatusToggle,
}: ToDoInterface) {
  return (
    <div className={styles.todo}>
      <button type="button" onClick={() => handleTaskStatusToggle(id)}>
        <img src={isDone ? Checked : NotChecked} alt="check comment" />
      </button>
      <p className={isDone ? styles.isDone : ""}>{content}</p>
      <button type="button" onClick={() => handleDeleteTask(id)}>
        <img src={Layer} alt="delete comment" />
      </button>
    </div>
  );
}
