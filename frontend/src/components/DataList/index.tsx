import { DataItem } from '../DataItem';
import styles from './styles.module.scss'

export type CnabComTipo = {
    tipo: string;
    descricao: string;
    natureza: string;
    data: string;
    valor: string;
    hora: string;
    donoLoja: string;
    nomeLoja: string;
}

export type Cnabs = {
    dono: string;
    lojas: CnabComTipo[],
    saldoTotal: number;
}

type Props = {
    data: Cnabs
}

export function DataList({ data }: Props) {
    return (
        <div className={styles.dataList}>
            <div className={styles.listTitle}>
                <h1>{data.dono}</h1>
                <span>Saldo Total: R$ {data.saldoTotal.toFixed(2)}</span>
            </div>

            {
                data.lojas.map((item: CnabComTipo, index: number) => (
                    <DataItem key={index} data={item} />
                ))
            }
        </div>
    );
}