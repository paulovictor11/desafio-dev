import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router';
import { Button } from '../../components/Button';
import { Cnabs, DataList } from '../../components/DataList';
import { Upload } from '../../components/Upload';
import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function Home() {
    const history = useHistory();

    const { signOut } = useContext(AuthContext);

    const [documents, setDocuments] = useState<Cnabs[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        listDocuments();
    }, []);

    function handleSignOut() {
        signOut();
        history.replace('');
    }

    function handleSelect(event: ChangeEvent<HTMLInputElement>) {
        const file = event.currentTarget.files![0] as File;
        setFile(file);
    }

    async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (file == null) {
            toast.error('Por favor selecione um arquivo');
            return;
        }

        try {
            setLoading(true);

            const data = new FormData();
            data.append('file', file);

            await api.post('/cnabs', data);

            toast.success(`Arquivo ${file.name} enviado com sucesso`);

            await listDocuments();

            setFile(null);
            setLoading(false);
        } catch (err: any) {
            toast.error(
                'Não foi possível enviar o arquivo, por favor tente mais tarde'
            );
            setLoading(false);
        }
    }

    async function listDocuments() {
        try {
            setLoading(true);

            const access_token = localStorage.getItem('@frontend:token');

            api.defaults.headers.common.authorization = `Bearer ${access_token}`;

            const response = await api.get<Cnabs[]>('/cnab/operacao');
            setDocuments(response.data);

            setLoading(false);
        } catch (err: any) {
            toast.error(
                'Não foi possível listar os CNABs no momento, por favor tente mais tarde'
            );
            setLoading(false);
        }
    }

    return (
        <div className={styles.pageHome}>
            <Toaster position="top-center" reverseOrder={false} />

            <header>
                <div className={styles.content}>
                    <h2>Desafio Dev</h2>
                    <Button isOutlined onClick={handleSignOut}>
                        Sair
                    </Button>
                </div>
            </header>

            <main>
                <form onSubmit={handleFormSubmit}>
                    <Upload onSelectFile={handleSelect} label={file?.name} />
                    <Button type="submit">Enviar</Button>
                </form>

                <div className={styles.dataList}>
                    {loading && (
                        <span className={styles.emptyList}>
                            <i>Carregando...</i>
                        </span>
                    )}

                    {documents.length == 0 && !loading ? (
                        <span className={styles.emptyList}>
                            <i>Não há CNABs cadastrados no sistema</i>
                        </span>
                    ) : (
                        documents.map((item: Cnabs, index: number) => (
                            <DataList key={index} data={item} />
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
