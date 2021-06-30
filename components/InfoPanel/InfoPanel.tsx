import styles from './InfoPanel.module.scss';
import Image from 'next/image';
import IconButton from 'components/IconButton/IconButton';

export default function InfoPanel() {

    return (
        <div className={styles.root}>
            <div className={styles.name}>
                <img src="/assets/images/me.jpg" className={styles.avatar} />
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p style={{fontSize: '36px', margin: '0'}}>@Xeroneon</p>
                    <p style={{fontSize: '18px', margin: '0'}}>Andrew Vasquez</p>
                </div>
            </div>
            <div className={styles.links}>
                <IconButton icon='github' iconType='fab' link=''/>
                <IconButton icon='linkedin' iconType='fab'/>
            </div>
        </div>
    );
}