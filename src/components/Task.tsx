import { Trash } from "phosphor-react"
import styles from "./Task.module.css"

interface TaskProps {
  content: string;
}

export function Task({ content }: TaskProps) {
  return (
    <div className={styles.task}>
      <label className={styles.container}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>

        <p className={styles.taskParagraph}>
          {content}
        </p>
      </label>



      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}