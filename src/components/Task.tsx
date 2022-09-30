import { Trash } from "phosphor-react"
import styles from "./Task.module.css"

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.task}>
      <label className={styles.container}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>

        <p className={styles.taskParagraph}>
          {content}
        </p>
      </label>



      <button
      onClick={handleDeleteTask}
      title="Deletar comentário"
      >
        <Trash size={24} />
      </button>
    </div>
  )
}