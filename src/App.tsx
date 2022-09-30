import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import styles from './App.module.css'
import { ChangeEvent, useState } from "react";



export function App() {

  const [tasks, setTasks] = useState(['New task!', 'Mais uma new task!'])
  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTaskTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
    console.log(newTaskText)
  }

  return (
    <div>
      <Header />
      <Input
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskTextChange}
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

