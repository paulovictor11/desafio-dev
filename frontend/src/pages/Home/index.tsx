import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { Button } from '../../components/Button';
import { CNAB, DataItem } from '../../components/DataItem';
import { Input } from '../../components/Input';
import { Upload } from '../../components/Upload';
import styles from './styles.module.scss'

export function Home() {
    const history = useHistory();

    const [documents, setDocuments] = useState<CNAB[]>([]);
    const [file, setFile] = useState<File | null>(null);

    // const cnabs: CNAB[] = [
    //     {
    //         id: '1',
    //         tipo: '1',
    //         data: '02/11/2021',
    //         valor: '20,00',
    //         cpf: '111.222.333-44',
    //         cartao: '123456789987654',
    //         hora: '12:21',
    //         donoLoja: 'Fulano de tal',
    //         nomeLoja: 'Lojinha'
    //     },
    //     {
    //         id: '2',
    //         tipo: '1',
    //         data: '02/11/2021',
    //         valor: '20,00',
    //         cpf: '111.222.333-44',
    //         cartao: '123456789987654',
    //         hora: '12:21',
    //         donoLoja: 'Fulano de tal',
    //         nomeLoja: 'Lojinha'
    //     },
    //     {
    //         id: '3',
    //         tipo: '1',
    //         data: '02/11/2021',
    //         valor: '20,00',
    //         cpf: '111.222.333-44',
    //         cartao: '123456789987654',
    //         hora: '12:21',
    //         donoLoja: 'Fulano de tal',
    //         nomeLoja: 'Lojinha'
    //     }
    // ];

    function handleSignOut() {
        history.replace('');
    }

    function handleSelect(event: ChangeEvent<HTMLInputElement>) {
        const file = event.currentTarget.files![0] as File;
        setFile(file);
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (file == null) {
            alert('Por favor selecione um arquivo');
            return;
        }

        alert(`Arquivo ${file.name} enviado com sucesso`);
    }

    return (
        <div className={styles.pageHome}>
            <header>
                <div className={styles.content}>
                    <h2>Desafio Dev</h2>
                    <Button isOutlined onClick={handleSignOut}>Sair</Button>
                </div>
            </header>

            <main>
                <form onSubmit={handleFormSubmit}>
                    <Upload onSelectFile={handleSelect} label={file?.name} />
                    <Button type="submit">Enviar</Button>
                </form>

                <div className={styles.dataList}>
                    {
                        documents.length == 0
                        ? (
                            <div>
                                <span className={styles.emptyList}>
                                    <i>Não há CNABs cadastrados no sistema</i>
                                </span>
                            </div>
                        )
                        : (
                            documents.map((item: CNAB) => (
                                <DataItem key={item.id} data={item} />
                            ))
                        )
                    }
                </div>
            </main>
        </div>
    );
}