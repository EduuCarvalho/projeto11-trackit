import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TrackImg from "../../Assets/img/TrackIt.png"
import {Form, Logo, ButtonJoinRegister,TextJoinRegister,PageLogin } from "../Style/styled"
import { Link } from "react-router-dom"


export default function RegisterPage() {
    let navigate= useNavigate();

    const [registerObj,setRegisterObj] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    })

    function handleRegister (e) {
        const {name,value} = e.target;
        setRegisterObj({...registerObj,[name]:value})
    }

    function registerPost (e){

        e.preventDefault()
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",registerObj)
             .then(()=>navigate("/"))
             .catch((err)=>console.log(err.response.data))
    }

    return (

        <PageLogin>
            <Logo><img src={TrackImg} alt="Logo-TrackIt" /></Logo>
            <Form onSubmit={registerPost}>
            <input typle="email" placeholder="email" name="email" value={registerObj.email} onChange={handleRegister} required></input>
            <input typle="password" placeholder="senha" name="password" value={registerObj.password} onChange={handleRegister} required></input>
            <input typle="text" placeholder="nome" name="name" value={registerObj.name} onChange={handleRegister} required></input>
            <input typle="url" placeholder="foto" name="image" value={registerObj.image} onChange={handleRegister} required></input>
            <ButtonJoinRegister>Cadastrar</ButtonJoinRegister>
            <Link to={"/"}><TextJoinRegister>Já tem uma conta? Faça login!</TextJoinRegister></Link>
        </Form>
        </PageLogin>
    )

}

