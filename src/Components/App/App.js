
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HabitPage from "../HabitsPage/Habits";
import HistoricPage from "../HistoricPage/HistoricPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import GlobalStyle from "../Style/GlobalStyle";
import TodayPage from "../TodayPage/TodayPage";
import React from "react";
import { useAuth } from "../../Context/authToken";
import { useImg } from "../../Context/imgProvider";





export default function App() {

const {userToken} = useAuth();
 console.log(userToken)
 const {userImg} = useImg();
 console.log(userImg)

    return (
        <BrowserRouter>
            <GlobalStyle />
            
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<RegisterPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/habitos" element={<HabitPage />} />
                    <Route path="/historico" element={<HistoricPage />} />
                </Routes>
            
        </BrowserRouter>
    );
}
