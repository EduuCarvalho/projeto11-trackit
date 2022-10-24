import styled from "styled-components"

import { useImg } from "../../Context/imgProvider";


export default function Header () {

    
    const {userImg} = useImg();


    return (
        <HeaderContainer>
            <p>TrackIt</p>
            <div><img src={userImg} alt="userPhoto"/></div>
            
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
    z-index:2;
    
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
        margin-right:18px;
        border-radius: 98.5px;

        img{
        width:51px;
        height:51px;
        margin-right:18px;
        border-radius: 98.5px;
        }
    }



`