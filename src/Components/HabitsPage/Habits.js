import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import addImg from "../../Assets/img/+.png"
import { HabitsBody, MyHabits, NoHabitsAdd} from "./habitsStyle"
import { useState } from "react";
import HabitContainer from "./HabitsContainer";




export default function HabitPage (){
    const [showHabitsContainer,setShowHabitsContainer] = useState(false);
 
    return (
        <>
        <Header/>
        <HabitsBody>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button onClick={()=>setShowHabitsContainer(true)}><img src= {addImg} alt="Add-habit"/></button>
            </MyHabits>
            {showHabitsContainer?<HabitContainer setShowHabitsContainer={setShowHabitsContainer}/>:<></>}
            <NoHabitsAdd>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </NoHabitsAdd>
        </HabitsBody>
        <Footer/>
        </>
    )
}


