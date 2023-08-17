/* eslint-disable no-self-assign */
import styles from './Header.module.css'

const Header = () => {

    function recargar(){
        window.location.reload(true)
    }

    return (
    <div className={styles.header}>
        <img src="/logo.png"/> 
        <h3> EXAMEN PARCIAL FRONTEND III  </h3>
        <button onClick={recargar}>RESET</button>
    </div>    
    )
 
}

export default Header 