import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import checkImg from "../../Assets/img/Vector.png"
import {TodayBody , Top, Date, CompletedHabits, ToDoList, CheckButton} from "./todayStyle"
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br"
import axios from "axios";
import { useAuth } from "../../Context/authToken";
import {  useEffect, useState } from "react";
import { useProgress} from "../../Context/circularProvider";

export default function TodayPage () {

    const {progress, setProgress} = useProgress();
    const [listHabit,setListHabit] = useState([]);
    const { userToken } = useAuth();

    
    useEffect (()=>{
        getHabits()
    },[])

    function getHabits(){
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,userToken)
             .then((res)=>{setListHabit(res.data)
                            calcDonePercent(res.data)})
             .catch()
    }
    
    function checkHabit (id,done) {
        if(done===false){
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{},userToken)
             .then(()=>getHabits())
             .catch((res)=>res.response.data)   
             
    }else{
        uncheckHabit(id)
    }
    }
    function uncheckHabit (id){
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{},userToken)
        .then(()=>getHabits())
        .catch((res)=>res.response.data)   
    }
    function calcDonePercent(habits){
        let numberDoneHabits=(habits.filter((h)=>h.done===true));
        let percentage = numberDoneHabits.length/habits.length*100;
        setProgress(percentage)
    }
    
 
    return (
        <>
        <Header/>
        <TodayBody>
            <Top>
            <Date>{dayjs().locale(ptBr).format("dddd,DD/MM")}</Date>
            <CompletedHabits>Nenhum hábito concluído ainda</CompletedHabits>
            </Top>
            {listHabit.length !== 0 ? <>{listHabit.map((i,index)=> 
            <ToDoList key={index} isDone={i.done} compareCurrentHighest={i.currentSequence===i.highestSequence} >
                 <div>
                     <h1>{i.name}</h1>
                     <p>Sequencia atual: <b>{i.currentSequence} dias</b> </p>
                     <p> Seu recorde: <b>{i.highestSequence} dias</b></p>
                 </div>
                 <CheckButton isDone={i.done} onClick={()=>checkHabit(i.id,i.done)} > <img src={checkImg} alt="check-button"/></CheckButton>
             </ToDoList>)}</>
               
               :""}
       

        </TodayBody>
        <Footer/>
        </>
    )
}

