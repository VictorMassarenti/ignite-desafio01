import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from './App.module.css'
import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";



export function App() {

  const [taskList, setTaskList] = useState(['New task!', 'Mais uma new task!'])
  const [newTask, setNewTask] = useState('');
  const taskCreatedCount = taskList.length

  function handleTextTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTaskList([...taskList, newTask]);
    setNewTask('');
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = taskList.filter(task =>{
      return task !== taskToDelete;
    })
    setTaskList(taskWithoutDeletedOne);
  }

  return (
    <div>
      <Header />

      <form onSubmit={handleCreateNewTask} className={styles.todoForm}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleTextTaskChange}
          required
        >
        </textarea>

        <button type="submit" className={styles.button}>
          Criar
          <PlusCircle size={24} />
        </button>
      </form>

      <div className={styles.titleTaskBox}>
        <span className={styles.createdTask}>
          Tarefas criadas
          <p>{taskCreatedCount}</p>
        </span>
        <span className={styles.completedTask}>
          Concluídas
          <p>2 de {taskCreatedCount}</p>
        </span>
      </div>

      <div>
        {taskList.map(task => {
          return (
            <Task
              key={task}
              content={task}
              onDeleteTask={deleteTask}
            />
          )
        })}
      </div>

    </div>
  )
}

