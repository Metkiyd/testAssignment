import React from 'react'
import logo from '../../assets/image/logo.png'
import './header.scss'

function Header() {
    return (
        <div className='header'>
            <div className="header-menu">
                <div className="header-menu__logo">
                    <img className="header-menu__logo--image" src={logo} alt="logo"/>
                </div> 
                <div className="header-menu__navigation">
                    <div className="header-menu__navigation--name">Главная</div>
                    <div className="header-menu__navigation--name">Технология</div>
                    <div className="header-menu__navigation--name">График полётов</div>
                    <div className="header-menu__navigation--name">Гарантии</div>
                    <div className="header-menu__navigation--name">О компании</div>
                    <div className="header-menu__navigation--name">Контакты</div>
                </div>
            </div>
        </div>

    )
}
export default Header