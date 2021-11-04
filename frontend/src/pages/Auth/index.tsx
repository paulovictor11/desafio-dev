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

        if (email == '' || password == '') {
            toast.error('Por favor preencha os campos');
            return;
        }

        try {
            setIsLoading(true);
            await signIn({ email, password } as UserForm);

            history.replace('/home');
            setIsLoading(false);
        } catch (err: any) {
            toast.error(
                'Não foi possível se conectar, por favor tente novamente mais tarde'
            );
            setIsLoading(false);
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

                        <Button
                            type="submit"
                            style={{
                                opacity: isLoading ? 0.6 : 1,
                                cursor: isLoading ? 'not-allowed' : '',
                            }}>
                            {isLoading ? 'Carregando...' : 'Conectar'}
                        </Button>
                    </form>

                    <p className={styles.link}>
                        Ainda não possui uma conta?{' '}
                        <Link to="/register">
                            Clique aqui para se cadastrar.
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
