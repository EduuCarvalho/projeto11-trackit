import styled from "styled-components"

export default function Footer() {

    return (
        <FooterContainer>
            <p>Hábitos</p>
            <div>Hoje</div>
            <p>Histórico</p>
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
display:flex;
justify-content:center;
align-items:center;
width:91px;
height:91px;
background-color:#52B6FF;
border-radius: 98.5px;
margin-bottom:40px;
color:#FFFFFF;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
}
`