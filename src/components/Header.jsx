import Navbar from "./Navbar.jsx";
import Flag from 'react-world-flags'

export default function Header(props) {

    // dati ricavati per la gestione dei link della Navbar
    const links = [
        { id: 1, text: 'Home', url: '/', current: true },
        { id: 2, text: 'Chi Siamo', url: '/ChiSiamo', current: true },
        { id: 3, text: 'Contatti', url: '/Contatti', current: true }
    ];

    // funzione di gestione dell'invio dell'intero form (tutte le info dei vari campi)
    function handleSubmit(e) {
        e.preventDefault();
    }

    const motto = "La piattaforma ideale per guardare i tuoi film e serie preferiti in compagnia con un solo account. Perché la felicità è reale solo quand'è condivisa.";

    return (
        <header>
            <Navbar linksProp={links} />
            <div className="image-container">
                <img src="/img/BoolFix-logo.png" alt="logo-BoolFix" />
            </div>
            <p>select lingua, Accedi, Motto con sotto prezzo, Inserisci email + button inizia</p>
            <Flag code="IT" />
            <h3>
                {filmCardProp.original_language === "en" ? <Flag code="GB" /> :
                    filmCardProp.original_language === "it" ? <Flag code="IT" /> :
                        "altro"}
            </h3>
            <div>
                <form id='formpost' action="#" onSubmit={handleSubmit}>
                    {/* valore nome post */}
                    <input
                        type="text"
                        name="name"
                        value={movieRequest.name}
                        placeholder='Titolo: '
                    />
                    {/* valore nome post */}
                    <input
                        type="text"
                        name="name"
                        value={movieRequest.name}
                        placeholder='Titolo Originale: '
                    />
                    {/* valore nome post */}
                    <input
                        type="text"
                        name="name"
                        value={movieRequest.name}
                        placeholder='Lingua: '
                    />
                    {/* valore nome post */}
                    <input
                        type="text"
                        name="name"
                        value={movieRequest.name}
                        placeholder='Voto: '
                    />
                </form>
            </div>
        </header>
    );
}