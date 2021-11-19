import { InputHTMLAttributes } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { UserForm } from '../../contexts/auth';
import styles from './styles.module.scss'

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    register: UseFormRegister<any>;
}

export function Input({ label, register, ...rest }: Props) {
    return (
        <input className={styles.inputControl} {...register(label)} {...rest} />
    );
}