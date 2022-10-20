import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import checkImg from "../../Assets/img/Vector.png"
import {TodayBody , Top, Date, CompletedHabits, ToDoList} from "./todayStyle"


export default function TodayPage () {
    return (
        <>
        <Header/>
        <TodayBody>
            <Top>
            <Date>Segunda, 17/05</Date>
            <CompletedHabits>Nenhum hábito concluído ainda</CompletedHabits>
            </Top>
            <ToDoList>
                <div>
                    <h1>Ler 1 Capitulo por dia</h1>
                    <p>Sequencia atual 3 dias Seu recorde: 5 dias</p>
                </div>
                <button> <img src={checkImg} alt="check-button"/></button>
            </ToDoList>

        </TodayBody>
        <Footer/>
        </>
    )
}

