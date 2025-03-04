// importiamo il componente segnaposto della libreria di router
import { Outlet } from "react-router-dom";

// importiamo i componenti che formano il layout
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function DefaultLayout() {
    const motto = "La piattaforma ideale per guardare i tuoi film e serie preferiti in compagnia con un solo account. Perché la felicità è reale solo quand'è condivisa.";

    return (
        <>
            <Header const mottoPhrase={motto} />
            <Outlet />
            <Footer />
        </>
    );
}