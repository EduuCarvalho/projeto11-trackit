import TrackImg from "../../Assets/img/TrackIt.png"
import { Form, Logo, ButtonJoinRegister, TextJoinRegister,PageLogin } from "../Style/styled"
import {useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import gifLogin from "../../Assets/img/login.gif"
import { useAuth } from "../../Context/authToken";

export default function LoginPage () {

    const {userToken, setUserToken} = useAuth();
    const {userImg, setUserImg} = useAuth();

    const [logInObj, setLogInObj] = useState ({
        email: "",
	    password: ""
    })
    let navigate = useNavigate();

    const [loading, setLoading] = useState("Entrar");

    function loginButton (){

        setLoading(<img src={gifLogin} alt="loading"/>)
    }


   

    function handleLogIn (e){
        const {name,value} = e.target;
        setLogInObj({...logInObj,[name]:value})
    }
    
    function logIn(e) {
        loginButton()
        e.preventDefault()
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,logInObj)
             .then((res)=> {
                navigate("/hoje") 
                setUserToken(
                {headers: {
                        "Authorization": `Bearer ${res.data.token}`
                    }
                })
                setUserImg(
                   
                )
             })
             .catch()
            console.log("Token",userToken)
            console.log("URL foto",userImg)
    }

    

    return (
        <PageLogin>
        <Logo><img src={TrackImg} alt="Logo-TrackIt"/></Logo>
        <Form onSubmit={logIn}>
            <input type="email" placeholder="email" name="email" value={logInObj.email} onChange={handleLogIn} required></input>
            <input type="password" placeholder="senha" name="password" value={logInObj.password} onChange={handleLogIn} required></input>
            <ButtonJoinRegister type="submit">{loading}</ButtonJoinRegister>
        </Form>
        <Link to="/cadastro"><TextJoinRegister >Não tem uma conta? Cadastre-se!</TextJoinRegister></Link>
        </PageLogin>
    )
} 


                                                      