import { Header } from "./components/Header";
import { Button } from "./components/Button";

import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <form className={styles.todoForm}>
        <textarea
          placeholder="Adicione uma nova tarefa"
        >
        </textarea>
        <Button
          type="submit"
          content="Criar"
        />
      </form>
    </div>
  )
}

