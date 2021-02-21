import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const Header = observer(() => {

    const {user} = useContext(Context);

    return (
        <header className="header">
            <div className="header-content container">
                <NavLink to={SHOP_ROUTE} className="header-logo">Device Store</NavLink>
                {user.isAuth
                    ? <nav className="header-auth">
                        <button>Админ панель</button>
                        <button>Войти</button>
                    </nav>
                    : <nav className="header-auth">
                        <button onClick={() => user.setIsAuth(true)}>Авторизация</button>
                    </nav>
                }
            </div>
        </header>
    );
});

export default Header;