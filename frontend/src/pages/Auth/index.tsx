import { useHistory } from 'react-router';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.scss'

export function Auth() {
    const history = useHistory();

    function handleLogin() {
        history.replace('/home');
    }

    return (
        <div className={styles.pageAuth}>
            <aside>
                <strong>Entrar</strong>
                <p>Faça o login para permanecer conectado!</p>
            </aside>
            <main>
                <div className={styles.mainContent}>
                    <h2>Desafio Dev</h2>

                    <form>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Senha" />

                        <Button type="submit" onClick={handleLogin}>Conectar</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}