import styles from './IconButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconButton(props: any) {

    return (
        <>
        <a href={props.link} target='_blank'>
            <div className={styles.root}>
                {props?.icon && <FontAwesomeIcon icon={[props.iconType, props.icon]} size='2x'/> }
            </div>
        </a>
        </>
    );
}

IconButton.defaultProps  = {
    iconType: 'fas'
}