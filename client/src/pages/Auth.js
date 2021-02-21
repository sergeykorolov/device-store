import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className="form">
            <form className="form-body" action="#">
                <h2 className="form-title">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <input type="text" placeholder="Введите email..."/>
                <input type="text" placeholder="Введите пароль..."/>
                <div className="form-footer">
                    {isLogin
                        ? <div className="register">
                            Нет аккаунта?
                            <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                        </div>
                        : <div className="register">
                            Есть аккаунт?
                            <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                    }
                    <button>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
                </div>
            </form>
        </div>
    );
};

export default Auth;