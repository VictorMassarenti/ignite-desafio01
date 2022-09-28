import { PlusCircle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    content: string;
}

export function Button({ content, ...props }:ButtonProps) {
    return (
        <button className={styles.button}
            {...props}>
            {content}
            <PlusCircle size={24}  />
        </button>
    )
}