import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import styles from './App.module.css'
import { useState } from "react";



export function App() {

  const [tasks, setTasks] = useState(['New task!', 'Mais uma new task!'])

  return (
    <div>
      <Header />
      <Input
        placeholder="Adicione uma nova tarefa"
      />

      <div className={styles.titleTaskBox}>
        <span className={styles.createdTask}>
          Tarefas criadas
          <p>5</p>
        </span>
        <span className={styles.completedTask}>
          Concluídas
          <p>2 de 5</p>
        </span>
      </div>

      <div>
        {tasks.map(task => {
          return (
            <Task
              key={task}
              content={task}
            />
          )
        })}
      </div>

    </div>
  )
}

