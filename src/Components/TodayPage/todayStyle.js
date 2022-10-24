import styled from "styled-components";

 export const TodayBody = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#E5E5E5;
    width:100vw;
    height:100vh;
    padding: 98px 0px 101px 0px;

`
export const Top = styled.div`
    display:flex;
    flex-direction:column;
    width:90vw;
`
export const Date = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;   
`
export const CompletedHabits = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #BABABA;
    margin: 10px 0px 28px 0px;
`
export const ToDoList = styled.div`
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
    margin-top:10px;
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
            width:150px;
            line-height: 20px;
           
            }
            b{
                color:${props=>props.isDone?"#8FC549":"#666666"}
                //;
            }
            p:last-child b{
                color:${props=>props.compareCurrentHighest && props.isDone?"#8FC549":"#666666"}
            }
           
           
        }
        
`
export const CheckButton = styled.button`
            display:flex;
            align-items:center;
            justify-content:center;
            width:69px;
            height:69px;
            margin-right:12.5px;
            background: ${props=>props.isDone === false? "#EBEBEB": "#8FC549"};
            border: 1px solid #E7E7E7;
            border-radius: 5px;

`;



