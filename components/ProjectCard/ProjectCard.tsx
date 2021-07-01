
import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tag from 'components/Tag/Tag';

export default function ProjectCard(props: any) {

    return (
        <div className={styles.root}>
            <div style={{padding: '10px'}}>
                <p style={{fontSize: '22px', fontWeight: "bold"}}>{props.title}</p>
                <a href={props.url} target='_blank' rel="noreferrer">
                    <p style={{fontSize: '16px'}}>{props.url} <FontAwesomeIcon icon='external-link-alt' size='xs'/></p>
                </a>
                <div className={styles.tagContainer}>
                    {props.tags.map((tag: any, i: any) => <Tag style={tag.style} icon={tag.icon} name={tag.name} key={i}/>)}
                </div>

            </div>
            <div style={{height: '185px', position: 'relative'}}>
                <Image src={props.image} alt='Project Image' layout='fill' objectFit='cover'/>
            </div>
        </div>
    );
}