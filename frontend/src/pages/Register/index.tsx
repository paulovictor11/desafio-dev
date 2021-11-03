import { FormEvent, useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { AuthContext, UserForm } from '../../contexts/auth';
import styles from './styles.module.scss';

export function Register() {
    const history = useHistory();
    const { register } = useContext(AuthContext);

    async function handleRegister(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        await register({
            name,
            email,
            password,
            password_confirmation: password,
        } as UserForm);

        history.replace('/home');
    }

    return (
        <div className={styles.pageAuth}>
            <aside>
                <strong>Cadastrar</strong>
                <p>Faça o cadastro para desfrutar do sistema!</p>
            </aside>
            <main>
                <div className={styles.mainContent}>
                    <h2>Desafio Dev</h2>

                    <form onSubmit={handleRegister}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nome"
                        />
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Senha"
                        />

                        <Button type="submit">Enviar</Button>
                    </form>

                    <p className={styles.link}>
                        Já possui uma conta?. <Link to="/">Conectar.</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
