import styled from "styled-components"

export default function Header () {

    return (
        <HeaderContainer>
            <p>TrackIt</p>
            <div>FOTO</div>
            
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display:flex;
    width:100%;
    height:70px;
    background-color:#126BA5;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    top:0;
    
    p{
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    color: #FFFFFF;
    margin-left:18px;
    }
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:51px;
        height:51px;
        background-color:red;
        margin-right:18px;
        border-radius: 98.5px;
    }



`