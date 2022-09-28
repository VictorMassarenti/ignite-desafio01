import { TextareaHTMLAttributes } from 'react';
import { Button } from './Button'
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
            <Button
                type="submit"
                content="Criar"
            />
        </form>
    )
}