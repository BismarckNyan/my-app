import { Link } from 'react-router-dom'
import style from './header.module.css'

const Header =(props)=>{
    return(
        <header>
        <Link to={'/'}>
            <h1 className={style.logo}> LIVE-TYR</h1>
        </Link>
        <nav>
            <Link to={'/favorites'}>
             <h6 className={style.nav_item} href="">Избранное</h6>
            </Link>
               
                <h2 className={style.nav_item} onClick={props.openOverlay}
                href="#">Заявки:
                    <span>
                       &nbsp;
                        {props.overlayItems.length }
                    </span>
                </h2>
        </nav>
    </header>
    )
}
export default Header