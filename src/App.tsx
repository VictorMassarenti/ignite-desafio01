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

      <Task />
      <Task />
      <Task />
      <Task />
      
    </div>
  )
}

