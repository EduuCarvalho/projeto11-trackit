import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import checkImg from "../../Assets/img/Vector.png"
import {TodayBody , Top, Date, CompletedHabits, ToDoList, CheckButton} from "./todayStyle"
import dayjs from "dayjs";
import axios from "axios";
import { useAuth } from "../../Context/authToken";
import {  useEffect, useState } from "react";


export default function TodayPage () {

 

    const [listHabit,setListHabit] = useState([]);
    const { userToken } = useAuth();

    
    useEffect (()=>{
        getHabits()
    },[])

    function getHabits(){
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,userToken)
             .then((res)=>setListHabit(res.data))
             .catch()
    }
    
    function checkHabit (index) {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${index}/check`,{},userToken)
             .then()
             .catch()   
    }

 
    return (
        <>
        <Header/>
        <TodayBody>
            <Top>
            <Date>{dayjs().locale("pt-BR").format()}</Date>
            <CompletedHabits>Nenhum hábito concluído ainda</CompletedHabits>
            </Top>
            {listHabit.length !== 0 ? <>{listHabit.map((i,index)=> 
            <ToDoList key={index}>
                 <div>
                     <h1>{i.name}</h1>
                     <p>Sequencia atual {i.currentSequence} dias Seu recorde: {i.highestSequence} dias</p>
                 </div>
                 <CheckButton isDone={i.done}  > <img src={checkImg} alt="check-button"/></CheckButton>
             </ToDoList>)}</>
               
               :""}
       

        </TodayBody>
        <Footer/>
        </>
    )
}

