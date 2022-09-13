import React from 'react'
import './main.scss'

function Main() {
    return (
        <div className='main__wrapper'>
            <div className='main'>
                <div className="main__description">
                    <div className="main__description--title">
                        <p className="main__description--title__top">
                            Путешествие
                        </p>
                        <p className="main__description--title__bottom">
                            на красную планету
                        </p>
                    </div>
                    <button className="main__description--button">
                        <p className="main__description--button__title">Начать путешествие</p>
                        <div className="main__description--line"/>
                    </button>
    
                </div>
                <div className="main__cards">
                    <div className="main__cards--card">
                        <p className="main__cards--card__small">мы</p>
                        <p className="main__cards--card__big">1</p>
                        <p className="main__cards--card__small">на рынке</p>
                    </div>
                    <div className="main__cards--card">
                        <p className="main__cards--card__small">гарантируем</p>
                        <p className="main__cards--card__big">50%</p>
                        <p className="main__cards--card__small">безопасность</p>
                    </div>
                    <div className="main__cards--card">
                        <p className="main__cards--card__small">календарик за</p>
                        <p className="main__cards--card__big">2001<span>г.</span></p>
                        <p className="main__cards--card__small">в подарок</p>
                    </div>
                    <div className="main__cards--card">
                        <p className="main__cards--card__small">путешествие</p>
                        <p className="main__cards--card__big">597</p>
                        <p className="main__cards--card__small">дней</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main