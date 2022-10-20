import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import styled from "styled-components"


export default function HabitPage (){

    return (
        <>
        <Header/>
        <HabitsBody>

        </HabitsBody>
        <Footer/>
        </>
    )
}


const HabitsBody = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#E5E5E5;
    width:100vw;
    height:100vh;
    padding: 98px 0px 101px 0px;

`