import TrackImg from "../../Assets/img/TrackIt.png"
import {Form, Logo, ButtonJoinRegister,TextJoinRegister,PageLogin } from "../Style/styled"



export default function RegisterPage() {

    return (

        <PageLogin>
            <Logo><img src={TrackImg} alt="Logo-TrackIt" /></Logo>
            <Form>
            <input typle="text" placeholder="email"></input>
            <input typle="text" placeholder="senha"></input>
            <input typle="text" placeholder="nome"></input>
            <input typle="text" placeholder="foto"></input>
            <ButtonJoinRegister>Cadastrar</ButtonJoinRegister>
            <TextJoinRegister>Já tem uma conta? Faça login!</TextJoinRegister>
        </Form>

        </PageLogin>
    )

}

