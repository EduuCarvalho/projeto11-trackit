import TrackImg from "../../Assets/img/TrackIt.png"
import styled from "styled-components"
import { Input, Logo, ButtonJoinRegister, TextJoinRegister } from "../Styled"



export default function LoginPage () {

    return (
        <>
        <Logo><img src={TrackImg} alt="Logo-TrackIt"/></Logo>
        <Input>
            <input typle="text" placeholder="email"></input>
            <input typle="text" placeholder="senha"></input>
        </Input>
        <ButtonJoinRegister>Entrar</ButtonJoinRegister>
        <TextJoinRegister>Não tem uma conta? Cadastre-se!</TextJoinRegister>
        </>
    )
} 

