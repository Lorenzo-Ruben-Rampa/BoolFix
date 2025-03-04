import { useContext, useState } from 'react';
import Navbar from "./Navbar.jsx";
import GlobalContext from '../contexts/GlobalContext';

export default function Header(props) {

    //destrutturo useContext
    const { setQuery, fetchMoviesAndSeries } = useContext(GlobalContext);

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home', url: '/', current: true },
        { id: 2, text: 'Chi Siamo', url: '/ChiSiamo', current: false },
        { id: 3, text: 'Contatti', url: '/Contatti', current: false }
    ];

    const [inputValue, setInputValue] = useState("");

    // funzione di gestione dell'invio dell'intero form (tutte le info dei vari campi)
    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        setQuery(inputValue);
        fetchMoviesAndSeries();
        setInputValue("");
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    };

    return (
        <header>
            <div className="header-line">
                <Navbar linksProp={links} />
                <div className="image-container">
                    <img className="logo" src="/imgs/BoolFix-logo.png" alt="logo-BoolFix" />
                    <form id='formpost' action="#" onSubmit={handleSubmit}>
                        <input
                            className="header-input"
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Cerca film o serie TV..."
                        />
                        <button type="submit">Cerca</button>
                    </form>
                </div>
                <div className='image-container center'>
                    <button>Login</button>
                    <div className='container'>
                        <div className='container'>
                            <input className="email-input" placeholder='Inserisci la tua email' type="email" pattern=".+@example\.com" required />
                            <button>Iscriviti</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="motto-container">
                <h1>{props.mottoPhrase}</h1>
                <h3>A soli 9,99 € al mese</h3>
            </div>
        </header>
    );
}


// // passo le props della card
// const MoviesCard = props;
