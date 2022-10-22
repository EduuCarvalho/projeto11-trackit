import styled from "styled-components";


export const HabitsBody = styled.div `
display:flex;
flex-direction:column;
align-items:center;
background-color:#E5E5E5;
width:100vw;
height:100vh;
padding: 98px 0px 101px 0px;

`

export const MyHabits = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:90vw;
margin-bottom:20px;

    h1{
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-style: normal;
        font-size: 22.976px;
        color: #126BA5;
    }
    button{
        width:40px;
        height:35px;
        background-color:#52B6FF;
        border-radius: 4.63636px;
        border:none;
    }
`

export const NoHabitsAdd = styled.div`
        display:flex;
        width:90vw;
        margin-top:28px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        font-style: normal;
`
export const AddHabitContainer = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        width:90vw;
        height:180px;
        background-color:#FFFFFF;
        border-radius: 5px;
        

            input{
                width:80vw;
                height:45px;
                background: #FFFFFF;
                border-radius: 5px;
                border: 1px solid #D5D5D5;
                margin-top:16px;             
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #DBDBDB;
                font-family: 'Lexend Deca';
                padding-left:11px;
            }
         
`
export const WeekDaysContainer = styled.div`
    display:flex;
    width:83vw;
    margin-top:10px;
       
            button {
                width:30px;
                height:30px;
                border: 1px solid #D5D5D5;
                border-radius: 5px;
                background: #FFFFFF;
                margin-right:4px;
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #DBDBDB;
                font-family: 'Lexend Deca';
            }
`

export const ButtonCancelSaveContainer = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:flex-end;
    width:83vw;
    margin-top:29px;
  
            h1{
                font-style: normal;
                font-weight: 400;
                font-size: 15.976px;
                text-align: center;
                color: #52B6FF;
                font-family: 'Lexend Deca';
            }
            button{
                width:84px;
                height:35px;
                border-radius: 4.63636px;
                border:none;
                background: #52B6FF;
                font-style: normal;
                font-weight: 400;
                font-size: 15.976px;
                line-height: 20px;
                text-align: center;
                color: #FFFFFF;
                font-family: 'Lexend Deca';
                margin-left:23px;
            }

`
