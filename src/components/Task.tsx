import { Trash } from "phosphor-react"
import { useState } from "react";
import styles from "./Task.module.css"

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {
  const [hasCheck, setHasCheck] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleCheck() {
    hasCheck ? setHasCheck(false) : setHasCheck(true)
  }

  return (
    <div className={styles.task}>
      <label className={hasCheck ? styles.containerChecked : styles.container}>
        <input type="checkbox" />
        <span className={styles.checkmark} onClick={handleCheck}></span>

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