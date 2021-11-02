import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss'

type Props = InputHTMLAttributes<HTMLInputElement> & {

}

export function Input({ ...rest }: Props) {
    return (
        <input className={styles.inputControl} {...rest} />
    );
}