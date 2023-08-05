import styles from '../styles/home.module.css'
import '../styles/globals.css'
import Navbar from '../Component/Navbar.js'
import Footer from '../Component/Footer.js'
import { getLayout } from './[onClickdata]';
import Sidebar from '../Component/Sidebar.js'
import {Provider} from 'react-redux'
import store from '../Component/Redux/Store.js'
import {app} from   '../Component/Firebase.js'

export default function App({ Component, pageProps }) {

    
  
  

  if(Component.getLayout){
    return(
      Component.getLayout(<Provider store={store}><Component{...pageProps}/></Provider>)
    )
  }
  
  
  return (
    <Provider store={store}>
    <div className={styles.app}>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <div className={styles.maxWidth}>
    <div className={styles.appMaxwidth}>
    <Component {...pageProps} />
    </div>
    <div className={styles.footerMaxwidth}>
    <Sidebar/>
    <Footer/>
    </div>
    </div>
    </div>
    </Provider>
    
    );
}
