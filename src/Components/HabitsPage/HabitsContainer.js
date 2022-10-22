import { useState } from "react";
import { AddHabitContainer,WeekDaysContainer, ButtonCancelSaveContainer  } from "./habitsStyle"


export default function HabitContainer (props){

    const [dayClicked, setDayClicked] = useState([]);
    const weekDays = ["D","S","T","Q","Q","S","S"];
 

    const [habts,setHabts] = useState("");
    console.log(habts)
    

    return(
        <AddHabitContainer>
                <input placeholder="nome do hábito" type="text" onChange={(e)=>setHabts(e.target.value)} required></input>
                <WeekDaysContainer  >
                    {weekDays.map((d,index)=><button key={index}>{d}</button>)}
                </WeekDaysContainer>
                <ButtonCancelSaveContainer>
                    <h1 onClick={()=>props.setShowHabitsContainer(false)}>Cancelar</h1>
                    <button>Salvar</button>
                </ButtonCancelSaveContainer>
            </AddHabitContainer>
    )
}