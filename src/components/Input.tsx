import { PlusCircle } from 'phosphor-react';
import { TextareaHTMLAttributes, useState } from 'react';
import styles from './Input.module.css'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string;
}

export function Input({ placeholder, ...props }: InputProps) {
    return (
        <form className={styles.todoForm}>
            <textarea
                placeholder={placeholder}
                {...props}
                >
            </textarea>

            <button type="submit" className={styles.button}>
                Criar
                <PlusCircle size={24} />
            </button>
        </form>
    )
}