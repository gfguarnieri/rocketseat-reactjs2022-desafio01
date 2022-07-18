import { FormAddTask } from './components/FormAddTask';
import { Header } from './components/Header';
import styles from "./App.module.css";
import './global.css';
import { TasksArea } from './components/TasksArea';
import { useState } from 'react';

interface Task {
  createdAt: Date;
  complete?: false | boolean;
  content: string;
}

export function App() {

  const [listTasks, setListTasks] = useState(Array<Task>);

  function toggleStatusTask(createdAt: Date){
    const listWithToggledStatusTask = listTasks.map((task) => {
      if(task.createdAt === createdAt){
        task.complete = !task.complete;
      }
      return task;
    }); 
    setListTasks(listWithToggledStatusTask);
  }

  function createNewTask(content: string) {
    setListTasks([...listTasks, { complete: false, content, createdAt: new Date() }])
  }

  function removeTask(createdAt: Date){
    const listTasksWithoutOneRemoved = listTasks.filter((task)=>task.createdAt!==createdAt);
    setListTasks(listTasksWithoutOneRemoved);
  }

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <FormAddTask createNewTask={createNewTask} />
        <TasksArea listTasks={listTasks} removeTask={removeTask} toggleStatusTask={toggleStatusTask}/>
      </main>
    </div>
  )
}
