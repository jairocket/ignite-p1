import styles from "./NoTask.module.css";
import Clipboard from "../assets/img/Clipboard.png";

export function NoTask() {
  return (
    <div className={styles.empty}>
      <img src={Clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie Tarefas e organize seus itens a fazer</p>
    </div>
  );
}
