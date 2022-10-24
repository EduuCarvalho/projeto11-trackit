import axios from "axios";
import { useState } from "react";
import { AddHabitContainer, WeekDaysContainer, ButtonCancelSaveContainer,Daybutton} from "./habitsStyle"
import { useAuth } from "../../Context/authToken";



export default function HabitContainer(props) {

   

    const { userToken } = useAuth();

    const [habitObj, setHabitObj] = useState({
       
    })

    const [dayClicked, setDayClicked] = useState([]);
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];


    const [habts, setHabts] = useState("");
    console.log(habts)


    function selectButton(index) {

        dayClicked.includes(index)?
        setDayClicked(dayClicked.filter((i)=>i!==index))
        setHabitObj({
            name:habts,
            days:dayClicked.filter((i)=>i!==index)
        }
        )
           :
        setDayClicked([...dayClicked, index])
        setHabitObj({
            name:habts,
            days:[...dayClicked, index]
        }
        )

    }
    console.log(dayClicked)

    function postHabit() {
        
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, habitObj, userToken)
            .then(() => {

                props.setShowHabitsContainer(false);
                props.getHabits ()
            })
            .catch()

    }

 



    return (
        <AddHabitContainer>
            <input placeholder="nome do hábito" type="text" onChange={(e) => setHabts(e.target.value)} required></input>
            <WeekDaysContainer >
                {weekDays.map((d, index) => <Daybutton index={index}  key={index} dayClicked={dayClicked} onClick={() => selectButton(index)}>{d}</Daybutton>)}
            </WeekDaysContainer>
            <ButtonCancelSaveContainer>
                <h1 onClick={() => props.setShowHabitsContainer(false)}>Cancelar</h1>
                <button onClick={() => postHabit()}>Salvar</button>
            </ButtonCancelSaveContainer>
        </AddHabitContainer>
    )
}