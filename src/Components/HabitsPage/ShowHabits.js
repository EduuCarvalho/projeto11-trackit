import axios from "axios";
import styled from "styled-components";
import tresh from "../../Assets/img/lixeira.png"
import { useAuth } from "../../Context/authToken";


export default function ShowHabits ({habitList , getHabits}) {
console.log(habitList)
 
    const {userToken} = useAuth();
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

    function deleteHabit (id) {

        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,userToken)
             .then(getHabits())   
    }


    return (
        <>
        {habitList.map((h,index)=> < ShowHabitsContainer key={index}>    
            <h1>{h.name}</h1> <img onClick={()=>deleteHabit(h.id)} src={tresh} alt={"delete"}/>
            <WeekDaysContainer >
            {weekDays.map((d, index) => <Day key={index} habitListDays={h.days} index={index} >{d}</Day>)}
            </WeekDaysContainer>
        </ShowHabitsContainer>)}
        </>
    );

}
/* {props.habitList.map((h)=>   <ShowHabitsContainer>   
    <h1>Aqui vem a escrita</h1>
    <WeekDaysContainer>
    {weekDays.map((d, index) => <div key={index} >{d}</div>)}
    </WeekDaysContainer>
</ShowHabitsContainer>)} */

const ShowHabitsContainer = styled.div`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        width:90vw;
        height:91px;
        background-color:#FFFFFF;
        border-radius: 5px;
        padding:15px;
        margin-top:10px;
        position:relative;

    h1{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        font-style: normal;
    }

    img{
        
        position:absolute;
        top:15px;
        right:15px;
    }
`

export const WeekDaysContainer = styled.div`
    display:flex;
    width:83vw;
    margin-top:10px;
       
            
`
const Day = styled.div`

display:flex;
                align-items:center;
                justify-content:center;
                width:30px;
                height:30px;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                background: ${props=>props.habitListDays.includes(props.index)? "#DBDBDB":"#FFFFFF"};
                margin-right:4px;
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: ${props=>props.habitListDays.includes(props.index)? "#FFFFFF":"#DBDBDB"};
                font-family: 'Lexend Deca';
`