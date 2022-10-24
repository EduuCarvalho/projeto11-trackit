import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import addImg from "../../Assets/img/+.png"
import { HabitsBody, MyHabits, NoHabitsAdd} from "./habitsStyle"
import { useState, useEffect } from "react";
import HabitContainer from "./HabitsContainer";
import ShowHabits from "./ShowHabits";
import axios from "axios";
import { useAuth } from "../../Context/authToken";




export default function HabitPage (){

   

   const [showHabitsContainer,setShowHabitsContainer] = useState(false);
    const { userToken} = useAuth();
   const [habitList,setHabitlits] = useState([])

    useEffect (()=>{
        getHabits() 
    },[])

    function getHabits () {
    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,userToken)
    .then((res)=> setHabitlits(res.data))
    .catch()
    }

  
 
    return (
        <>
        <Header/>
        <HabitsBody>
            <MyHabits>
                <h1>Meus hábitos</h1>
                <button onClick={()=>setShowHabitsContainer(true)}><img src= {addImg} alt="Add-habit"/></button>
            </MyHabits>
            {showHabitsContainer?<HabitContainer setShowHabitsContainer={setShowHabitsContainer} getHabits={getHabits}/>:<></>}
            {habitList.length===0?<NoHabitsAdd>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </NoHabitsAdd>
            : 
            <ShowHabits habitList={habitList} getHabits={getHabits}/>}
        </HabitsBody >
        <Footer/>
        </>
    )
}


