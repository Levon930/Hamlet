import {useContext, useState} from "react";
import { Context } from "../../context";
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from "react-router-dom";
import localizeFilter from '../../locale/localize.filter';

const BurgerMenu = (props) => {
    const { lang } = useContext(Context);
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

    const setStateOfMenu = ({isOpen}) => {
        setIsOpenBurgerMenu(isOpen)
    }

    return (
        <Menu {...props} isOpen={isOpenBurgerMenu} onStateChange={setStateOfMenu} >
            <div className="burgerLinks">
                <NavLink to="/" onClick={() => setIsOpenBurgerMenu(false)}>{localizeFilter(lang, 'global forum') || "Global forum"}</NavLink>
            </div>
            <div className="burgerLinks">
                <NavLink to="/community" onClick={() => setIsOpenBurgerMenu(false)}>{localizeFilter(lang, 'community') || "Community"}</NavLink>
            </div>
            <div className="burgerLinks">
                <NavLink to="/conference" onClick={() => setIsOpenBurgerMenu(false)}>{localizeFilter(lang, 'conference') || "Conference"}</NavLink>
            </div>

        </Menu>
    )
}

export default BurgerMenu;