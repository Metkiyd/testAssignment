import React from 'react'
import './cards.scss'

function Cards() {
    return (
        <div className="cards">
            <div className="card__1"></div>
                <p className="card__small-font">мы</p>
                <p className="card__big-font">1</p>
                <p className="card__small-font">на рынке</p>
            <div className="card__2"></div>
                <p className="card__small-font">гарантируем</p>
                <p className="card__big-font">50%</p>
                <p className="card__small-font">безопасность</p>
            <div className="card__3"></div>
                <p className="card__small-font">календарик за</p>
                <p className="card__big-font">2001г.</p>
                <p className="card__small-font">в подарок</p>
            <div className="card__4"></div>
                <p className="card__small-font">путешествие</p>
                <p className="card__big-font">597</p>
                <p className="card__small-font">дней</p>
        </div>
    )
}

export default Cards