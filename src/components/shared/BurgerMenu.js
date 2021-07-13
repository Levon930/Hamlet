import { useContext } from "react";
import { Context } from "../../context";
import { slide as Menu } from 'react-burger-menu'
import localizeFilter from '../../locale/localize.filter';

const BurgerMenu = (props) => {
    const { lang } = useContext(Context);

    return (
        <Menu {...props}>
            <div className="burgerLinks">
                <a href="/">{localizeFilter(lang, 'community') || "Community"}</a>
            </div>
            <div className="burgerLinks">
                <a href="/globalForum">{localizeFilter(lang, 'global forum') || "Global forum"}</a>
            </div>
            <div className="burgerLinks">
                <a href="/conference">{localizeFilter(lang, 'conference') || "Conference"}</a>
            </div>

        </Menu>
    )
}

export default BurgerMenu;