export default function ChiSiamo() {
    return (
        <>
            <section id="about-us">
                <div>
                    <h1>Chi Siamo</h1>
                    <div className="row">
                        <div className="col">
                            <p>
                                Benvenuti nel nostro blog! Siamo un gruppo di appassionati di cucina che ama esplorare il mondo delle pietanze a base di pane e dolci. Il nostro obiettivo è condividere ricette tradizionali e innovative che celebrano l'arte della panificazione e della pasticceria.
                            </p>
                            <p>
                                In questo spazio troverai tutto ciò che riguarda il pane, dalle baguette croccanti alle focacce fragranti, e una vasta gamma di dolci, dai biscotti alle torte più elaborate. Ogni ricetta è pensata per chi ama cucinare, ma anche per chi è alle prime armi e vuole scoprire il piacere di preparare questi deliziosi piatti a casa propria.
                            </p>
                        </div>
                        <div className="col mini centered">
                            <img src="../public/imgs/posts/pane_fritto_dolce.jpeg" className="background" alt="Pane e Dolci" />
                        </div>
                    </div>
                    <h2>Le Nostre Passioni</h2>
                    <div className="row">
                        <div className="col">
                            <h3>Pane</h3>
                            <p>
                                Ogni pezzo di pane che prepariamo racconta una storia. Amiamo lavorare con farine di alta qualità e sperimentare con lievitazioni naturali, per ottenere un pane che sia fragrante, soffice e ricco di sapore.
                            </p>
                        </div>
                        <div className="col">
                            <h3>Dolci</h3>
                            <p>
                                La nostra passione per i dolci non conosce limiti. Dai dolci semplici come biscotti e croissant a quelli più complessi come torte e pasticcini, ogni dolce che prepariamo è un'esplosione di sapori e creatività.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}