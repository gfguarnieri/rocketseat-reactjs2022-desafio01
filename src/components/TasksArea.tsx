import { Task } from "./Task";
import styles from "./TasksArea.module.css";
import { TasksCount } from "./TasksCount";

interface Task {
    createdAt: Date;
    complete?: false | boolean;
    content: string;
}

interface TasksAreaProps {
    listTasks: Task[];
    removeTask(createdAt: Date): void;
    toggleStatusTask(createdAt: Date): void;
}

export function TasksArea({ listTasks, removeTask, toggleStatusTask }: TasksAreaProps) {
    const sortedList = [...listTasks];
    sortedList.sort((task) => task.complete ? 1 : -1);
    const countCreated = listTasks.length;
    const countCompleted = listTasks.filter((task) => task.complete).length;
    return (
        <div className={styles.tasksArea}>
            <TasksCount countCompleted={countCompleted} countCreated={countCreated} />
            <section className={styles.tasksList}>
                {
                    sortedList.map((task) => {
                        return <Task {...task}
                            removeTask={removeTask}
                            toggleStatusTask={toggleStatusTask}
                            key={String(task.createdAt.getTime()) + task.content} />
                    })
                }
            </section>
        </div>
    )
}