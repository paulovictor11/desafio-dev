import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...rest }: Props) {
    return (
        <button
            className={isOutlined ? styles.buttonOutlined : styles.button}
            {...rest}
        />
    );
}
