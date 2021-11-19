import { FormEvent, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
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
    const { register: formRegister, handleSubmit } = useForm<UserForm>();

    const [isLoading, setIsLoading] = useState(false);

    async function handleRegister(form: UserForm) {
        if (form.name == '' || form.email == '' || form.password == '') {
            toast.error('Por favor preencha os campos');
            return;
        }

        try {
            setIsLoading(true);
            await register({
                ...form,
                password_confirmation: form.password,
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

                    <form onSubmit={handleSubmit(handleRegister)}>
                        <Input
                            placeholder="Nome"
                            label="name"
                            register={formRegister}
                        />
                        <Input
                            placeholder="Email"
                            type="email"
                            label="email"
                            register={formRegister}
                        />
                        <Input
                            placeholder="Senha"
                            type="password"
                            label="password"
                            register={formRegister}
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
