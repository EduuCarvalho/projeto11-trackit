import TrackImg from "../../Assets/img/TrackIt.png"

import { Input, Logo, ButtonJoinRegister, TextJoinRegister,PageLogin } from "../Style/styled"



export default function LoginPage () {

    return (
        <PageLogin>
        <Logo><img src={TrackImg} alt="Logo-TrackIt"/></Logo>
        <Input>
            <input typle="text" placeholder="email"></input>
            <input typle="text" placeholder="senha"></input>
        </Input>
        <ButtonJoinRegister>Entrar</ButtonJoinRegister>
        <TextJoinRegister>Não tem uma conta? Cadastre-se!</TextJoinRegister>
        </PageLogin>
    )
} 


