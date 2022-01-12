import {ReactComponent as GithubIcon} from 'assets/img/pessoal.svg';
import './styles.css';

function Navbar(){

    return (
    <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>Classificação de Filmes</h1>
            <a href="https://oraculocs.github.io/#home" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">Carlos Augusto</p>
                </div>
            </a>
        </div>
    </nav>
    </header>
    );
}

export default Navbar;