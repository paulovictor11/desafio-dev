import toast, { Toaster } from 'react-hot-toast';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { AuthContext, UserForm } from '../../contexts/auth';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';

export function Auth() {
    const history = useHistory();

    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit } = useForm<UserForm>();

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(form: UserForm) {
        if (form.email == '' || form.password == '') {
            toast.error('Por favor, preencha os campos');
            return;
        }

        try {
            setIsLoading(true);
            await signIn(form);

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

                    <form onSubmit={handleSubmit(handleLogin)}>
                        <Input
                            placeholder="Email"
                            type="email"
                            label="email"
                            register={register}
                        />
                        <Input
                            placeholder="Senha"
                            type="password"
                            label="password"
                            register={register}
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
