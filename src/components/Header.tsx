import styles from "./Header.module.css";
import logoApp from "../assets/logo.svg";

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logoApp}/>
        </header>
    )
}