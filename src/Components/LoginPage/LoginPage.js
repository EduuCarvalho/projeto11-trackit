import TrackImg from "../../Assets/img/TrackIt.png"
import { Form, Logo, ButtonJoinRegister, TextJoinRegister,PageLogin } from "../Style/styled"
import {useState} from "react"
import axios from "axios"



export default function LoginPage () {

   

    const [logInObj, setLogInObj] = useState ({
        email: "",
	    password: ""
    })

    function handleLogIn (e){
        const {name,value} = e.target;
        setLogInObj({...logInObj,[name]:value})
    }
    
    function logIn(e) {
        e.preventDefault()
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,logInObj)
             .then(console.log("postou corretamento"))
             .catch(console.log("deu merda"))   
             
    }

    return (
        <PageLogin>
        <Logo><img src={TrackImg} alt="Logo-TrackIt"/></Logo>
        <Form onSubmit={logIn}>
            <input type="email" placeholder="email" name="email" value={logInObj.email} onChange={handleLogIn} required></input>
            <input type="password" placeholder="senha" name="password" value={logInObj.password} onChange={handleLogIn} required></input>
            <ButtonJoinRegister type="submit">Entrar</ButtonJoinRegister>
        </Form>
        <TextJoinRegister>Não tem uma conta? Cadastre-se!</TextJoinRegister>
        </PageLogin>
    )
} 


                                                      