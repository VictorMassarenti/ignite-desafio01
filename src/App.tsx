import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import styles from './App.module.css'



export function App() {
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

      <Task />
      <Task />
      <Task />
      <Task />

    </div>
  )
}

