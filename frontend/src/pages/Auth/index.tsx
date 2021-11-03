import { FormEvent, useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { AuthContext, UserForm } from '../../contexts/auth';
import styles from './styles.module.scss';

export function Auth() {
    const history = useHistory();

    const { signIn } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            await signIn({ email, password } as UserForm);

            toast.success('Usuário conectou com sucesso');

            history.replace('/home');
        } catch (err: any) {
            toast.error('Não foi possível se conectar, por favor tente novamente mais tarde');
        }
    }

    return (
        <div className={styles.pageAuth}>
            <Toaster position="top-center" reverseOrder={false} />

            <aside>
                <strong>Entrar</strong>
                <p>Faça o login para permanecer conectado!</p>
            </aside>
            <main>
                <div className={styles.mainContent}>
                    <h2>Desafio Dev</h2>

                    <form onSubmit={handleLogin}>
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

                        <Button type="submit" disabled={isLoading}>
                            { isLoading ? 'Carregando...' : 'Conectar' }
                        </Button>
                    </form>

                    <p className={styles.link}>
                        Ainda não possui uma conta? <Link to="/register">Clique aqui para se cadastrar.</Link>
                    </p>

                </div>
            </main>
        </div>
    );
}
