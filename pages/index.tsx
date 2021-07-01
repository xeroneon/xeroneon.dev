import styles from '../styles/Home.module.scss'
import InfoPanel from '../components/InfoPanel/InfoPanel';
import { useState } from 'react';
import ProjectCard from 'components/ProjectCard/ProjectCard';

const query = `
{
  projectCollection(order: [sys_publishedAt_ASC]) {
    items {
      title
      image {
        url
      }
      url
      tags
    }
  }
}
`

export default function Home(props: any) {
  const [ projects, setProjects ] = useState(props.data.data.projectCollection.items);
  return (
    <>
      <InfoPanel />
      <div className='overlay'>&nbsp;</div>
      <div className={styles.projectContainer}>
        {projects.map((project: any) => <ProjectCard title={project.title} url={project.url} image={project.image.url} tags={project.tags} key={project.title}/>)}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({query})
  })
  const data = await res.json()
  console.log(data);

  // Pass data to the page via props
  return { props: { data } }
}

