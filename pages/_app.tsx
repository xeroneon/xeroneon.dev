import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faExternalLinkAlt)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
