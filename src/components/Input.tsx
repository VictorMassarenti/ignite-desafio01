import { PlusCircle } from 'phosphor-react';
import { TextareaHTMLAttributes, useState } from 'react';
import styles from './Input.module.css'

interface textarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string;
}

export function Input({ placeholder }: textarea) {
    return (
        <form className={styles.todoForm}>
            <textarea
                placeholder={placeholder}>
            </textarea>

            <button className={styles.button}>
                Criar
                <PlusCircle size={24} />
            </button>
        </form>
    )
}