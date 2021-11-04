import { FormEvent, useContext, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { AuthContext, UserForm } from '../../contexts/auth';
import styles from './styles.module.scss';

export function Register() {
    const history = useHistory();

    const { register } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);

    async function handleRegister(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');

        if (email == '' || email == '' || password == '') {
            toast.error('Por favor preencha os campos');
            return;
        }

        try {
            setIsLoading(true);
            await register({
                name,
                email,
                password,
                password_confirmation: password,
            } as UserForm);

            history.replace('/home');
            setIsLoading(false);
        } catch (err: any) {
            toast.error(
                'Não foi possível cadastrar o usuário, por favor tente novamente mais tarde'
            );
            setIsLoading(false);
        }
    }

    return (
        <div className={styles.pageAuth}>
            <Toaster position="top-center" reverseOrder={false} />

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

                        <Button
                            type="submit"
                            style={{
                                opacity: isLoading ? 0.6 : 1,
                                cursor: isLoading ? 'not-allowed' : '',
                            }}>
                            {isLoading ? 'Enviando...' : 'Enviar'}
                        </Button>
                    </form>

                    <p className={styles.link}>
                        Já possui uma conta?. <Link to="/">Conectar.</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
