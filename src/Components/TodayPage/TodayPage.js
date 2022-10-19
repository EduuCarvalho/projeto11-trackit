import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";


export default function TodayPage () {
    return (
        <>
        <Header/>
        <TodayBody>
            <Date>Segunda, 17/05</Date>
            <CompletedHabits>Nenhum hábito concluído ainda</CompletedHabits>
            <ToDoList>
                <div>
                    <h1>Ler 1 Capitulo por dia</h1>
                    <p>Sequencia atual 3 dias Seu recoder 5 dias</p>
                </div>
            </ToDoList>

        </TodayBody>
        <Footer/>
        </>
    )
}

const TodayBody = styled.div `
    display:flex;
    flex-direction:column;
    background-color:#E5E5E5;
    width:100vw;
    height:100vh;
    padding: 98px 18px 101px 18px;
   

`
const Date = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;   
`
const CompletedHabits = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #BABABA;
    margin: 10px 0px 28px 0px
`
const ToDoList = styled.div`
    display:flex;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #666666;


        div {
            display:flex;
            justify-content:center;
            align-items:center;
            
            h1{
       
            font-size: 19.976px;
     
        }
            p{
            font-size: 12.976px;
            }

        }
    
   
`