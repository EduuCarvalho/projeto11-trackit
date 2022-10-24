import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {buildStyles} from 'react-circular-progressbar'
import { useProgress} from "../../Context/circularProvider";

export default function Footer() {

    const {progress} = useProgress();



    return (
        <FooterContainer>
            <Link to={"/habitos"}><p>Hábitos</p></Link>
            <Link to={"/hoje"}><div> <CircularProgressbar  value={progress} text="Hoje" styles={buildStyles({textColor: "#fff",pathColor: "#fff",trailColor: "transparent"})}/></div></Link>
            <Link to={"/historico"} ><p>Histórico</p></Link>
        </FooterContainer>
    )
}


const FooterContainer = styled.div`
display:flex;
width:100%;
height:70px;
background-color:#FFFFFF;
justify-content:space-around;
align-items:center;
position:fixed;
bottom:0;

p {
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #52B6FF;

}

div {
    padding:6px;
    bottom: 10px;
    left: 50%;
    right: 50%;
    transform: translate(-50%,0%);
    position:absolute;
    width: 91px;
    height: 91px;
    background: #52B6FF;
    border-radius: 98.5px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Lexend Deca',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #FFFFFF;
    }
`
