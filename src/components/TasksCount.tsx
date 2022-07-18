import styles from "./TasksCount.module.css";

interface TasksCount {
    countCreated: number;
    countCompleted: number;
}

export function TasksCount({ countCreated, countCompleted }: TasksCount) {
    return (
        <div className={styles.tasksCount}>
            <div className={styles.countCreated}>
                <span>
                    Tarefas Criadas
                </span>
                <span className={styles.count}>
                    {countCreated}
                </span>
            </div>
            <div className={styles.countCompleted}>
                <span>
                    Concluídas
                </span>
                <span className={styles.count}>
                    {countCompleted} de {countCreated}
                </span>
            </div>
        </div>
    )
}