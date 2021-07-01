import styles from './Tag.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tag(props: any) {

    return (
        <div className={styles.root}>
            <FontAwesomeIcon icon={[props.style, props.icon]} />
            <p>{props.name}</p>
        </div>
    );
}