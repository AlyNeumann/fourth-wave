import { Link, Tooltip } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Nav(){

   return(
    <div>
    <span className={styles.nav}>
    <Tooltip label="Home" aria-label='A tooltip'>
    <Link href="/">
      <Image src="/images/fourthwave_Nav.png" alt="Vercel Logo" width={220} height={100} />
    </Link>
    </Tooltip>
  </span>
  </div>
   ) 
}