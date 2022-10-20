import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { HistoricBody, HistoricTittle, HistoricMsg } from "./historicStyle"

export default function HistoricPage(){

        return(
            <>
                <Header/>
                <HistoricBody>
                    <HistoricTittle>
                        <h1>Histórico</h1>
                    </HistoricTittle>
                    <HistoricMsg>
                        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                    </HistoricMsg>
                </HistoricBody>
                <Footer/>
            </>
        )


}