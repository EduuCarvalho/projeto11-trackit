import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitPage from "../HabitsPage/Habits";
import HistoricPage from "../HistoricPage/HistoricPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import GlobalStyle from "../Style/GlobalStyle";
import TodayPage from "../TodayPage/TodayPage";





export default function App() {

    return (
        <BrowserRouter>
            <GlobalStyle />

            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/habitos" element={<HabitPage/>}/>
                <Route path="/historico" element={<HistoricPage/>}/>
            </Routes>


        </BrowserRouter>
    );
}
