import styles from './styles.module.scss'

import { BsEyeFill, BsPencilSquare, BsTrashFill } from 'react-icons/bs'

export type CNAB = {
    id: string;
    tipo: string;
    data: string;
    valor: string;
    cpf: string;
    cartao: string;
    hora: string;
    donoLoja: string;
    nomeLoja: string;
}

type Props = {
    data: CNAB;
}

export function DataItem({ data }: Props) {

    function handleView(item: CNAB) {
        alert(JSON.stringify(item));
    }

    function handleEdit(item: CNAB) {

    }

    function handleDelete(item: CNAB) {
        if (confirm('Tem certeza que deseja deletar?')) {
            alert('CNAB delete com sucesso!');
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardItem}>
                <span>Dono da Loja</span>
                <p>{data.donoLoja}</p>
            </div>

            <div className={styles.cardItem}>
                <span>Loja</span>
                <p>{data.nomeLoja}</p>
            </div>

            <div className={styles.cardItem}>
                <span>Beneficiário</span>
                <p>{data.cpf}</p>
            </div>

            <div className={styles.cardItem}>
                <span>Valor</span>
                <p>R$ {data.valor}</p>
            </div>

            <div className={styles.cardItem}>
                <span>Data</span>
                <p>{data.data}</p>
            </div>

            <div className={styles.cardActions}>
                <span>Ações</span>
                <div className={styles.actions}>
                    <BsEyeFill onClick={() => handleView(data)} />
                    <BsPencilSquare onClick={() => handleEdit(data)} />
                    <BsTrashFill onClick={() => handleDelete(data)} />
                </div>
            </div>
        </div>
    );
}