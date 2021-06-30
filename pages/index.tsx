import styles from '../styles/Home.module.scss'
import InfoPanel from '../components/InfoPanel/InfoPanel';

export default function Home() {
  return (
    <>
      <InfoPanel />
      <div className='overlay'>&nbsp;</div>
    </>
  )
}
