import Image from 'next/image'
import styles from '../styles/home.module.css'

export default function List({val,call}){
  return(
    <div className={styles.searchlist} onClick={()=>call(val.id)}>
    <Image 
    src={`/${val.musicimg}`}
    width={70} height={70} 
    style={{marginLeft:10,borderRadius:30}}
    />
    <p style={{marginRight:20}}>{val.title}</p>
    </div>
    )
}