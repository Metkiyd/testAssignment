export function Nav() {
    return (
        <nav className="header__nav">
            <ul className="nav__items" >
                <li className="nav__item">
                    <a className="nav__link" href="#">Главная</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Технология</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">График полётов</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Гарантии</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">О компании</a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#">Контакты</a>
                </li>
            </ul>
        </nav>
    )
}