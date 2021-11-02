import { ChangeEvent, useRef } from 'react';
import { FiUpload } from 'react-icons/fi'
import styles from './styles.module.scss'

type Props = {
    label?: string;
    onSelectFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Upload({ label = 'Selecione uma arquivo', onSelectFile }: Props) {
    const inputFile = useRef<HTMLInputElement>(null);

    function handleSelectFile() {
        inputFile.current?.click();
    }

    return (
        <div className={styles.upload} onClick={handleSelectFile}>
            <label className={styles.inputLabel}>{label}</label>
            <FiUpload />

            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={onSelectFile}/>
        </div>
    );
}