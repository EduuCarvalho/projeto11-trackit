import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import addImg from "../../Assets/img/+.png"
import { HabitsBody, MyHabits, NoHabitsAdd, AddHabitContainer,WeekDaysContainer, ButtonCancelSaveContainer } from "./habitsStyle"



export default function HabitPage (){

    const weekDays = ["D","S","T","Q","Q","S","S"];

    return (
        <>
        <Header/>
        <HabitsBody>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button><img src= {addImg} alt="Add-habit"/></button>
            </MyHabits>
            <AddHabitContainer>
                <input placeholder="nome do hábito"></input>
                <WeekDaysContainer>
                    {weekDays.map((d,index)=><button key={index}>{d}</button>)}
                </WeekDaysContainer>
                <ButtonCancelSaveContainer>
                    <h1>Cancelar</h1>
                    <button>Salvar</button>
                </ButtonCancelSaveContainer>
            </AddHabitContainer>
            <NoHabitsAdd>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </NoHabitsAdd>
        </HabitsBody>
        <Footer/>
        </>
    )
}


