import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import styled from "styled-components";
import RegisterPage from "../RegisterPage/RegisterPage";




export default function App() {

    return (
        <BrowserRouter>
            <Pages>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element = {<RegisterPage/>}/>
            </Routes>

            </Pages>
        </BrowserRouter>
    );
}

const Pages = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-top:68px;
`