import { Trash } from "phosphor-react"
import styles from "./Task.module.css"

export function Task() {
  return (
    <div className={styles.task}>
      <label className={styles.container}>
        <input type="checkbox" />
        <span className={styles.checkmark}></span>

        <p className={styles.taskParagraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </label>



      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}