import styles from './styles.module.scss'

import { BsEyeFill, BsPencilSquare, BsTrashFill } from 'react-icons/bs'
import { CnabComTipo } from '../DataList';

type Props = {
    data: CnabComTipo;
}

export function DataItem({ data }: Props) {

    function handleView(item: CnabComTipo) {
        alert(JSON.stringify(item));
    }

    function handleEdit(item: CnabComTipo) {

    }

    function handleDelete(item: CnabComTipo) {
        if (confirm('Tem certeza que deseja deletar?')) {
            alert('CnabComTipo delete com sucesso!');
        }
    }

    function formartDate(date: string) {
        const year = date.substr(0, 4);
        const month = date.substr(4, 2);
        const day = date.substr(6, 2);

        return `${day}/${month}/${year}`;
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardItem}>
                <span>Loja</span>
                <p>{data.nomeLoja}</p>
            </div>

            <div className={styles.cardItem}>
                <span>Natureza</span>
                <p>{data.natureza}</p>
            </div>

            <div className={styles.cardItem}>
                <span>Descricao</span>
                <p>{data.descricao}</p>
            </div>

            <div className={styles.cardItem}>
                <span>Data</span>
                <p>{formartDate(data.data)}</p>
            </div>

            <div className={styles.cardItem}>
                <span>Valor</span>
                <p>R$ {Number(data.valor).toFixed(2)}</p>
            </div>

            {/* <div className={styles.cardActions}>
                <span>Ações</span>
                <div className={styles.actions}>
                    <BsEyeFill onClick={() => handleView(data)} />
                    <BsPencilSquare onClick={() => handleEdit(data)} />
                    <BsTrashFill onClick={() => handleDelete(data)} />
                </div>
            </div> */}
        </div>
    );
}