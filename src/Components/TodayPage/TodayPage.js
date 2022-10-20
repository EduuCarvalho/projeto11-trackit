import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styled from "styled-components";
import checkImg from "../../Assets/img/Vector.png"


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

const TodayBody = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#E5E5E5;
    width:100vw;
    height:100vh;
    padding: 98px 0px 101px 0px;

`
const Top = styled.div`
    display:flex;
    flex-direction:column;
    width:90vw;
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
    margin: 10px 0px 28px 0px;
`
const ToDoList = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 90vw;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    color: #666666;
        div {
            display:flex;
            flex-direction:column;
            justify-content:center;
            padding-left:20px;
            h1{
       
            font-size: 19.976px;
            margin-bottom:12px;
        }
            p{
            font-size: 12.976px;
            max-width:150px;
            line-height: 20px;
            }
        }
        button{
            display:flex;
            align-items:center;
            justify-content:center;
            width:69px;
            height:69px;
            margin-right:12.5px;
            background: #EBEBEB;
            border: 1px solid #E7E7E7;
            border-radius: 5px;
        }
`