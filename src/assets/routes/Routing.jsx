import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from '../pages/HomePage';
import Layout from '../layout/Layout';
import ErrorPage from '../pages/error';
import GenrePage from '../pages/GenrePage';
import GamePage from '../pages/GamePage';
import RegisterPage from './pages/register';
import Loginpage from './pages/login';
import Account from './pages/account';

export function Routing () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    {/* Rotta dinamica per il dettaglio del genere */}
                    <Route path="/games/:genre" element={<GenrePage />} />
                    {/* Rotta dinamica per il dettaglio di un gioco */}
                    <Route path="/games/:slug/:id" element={<GamePage />} />
                    {/* Rotta per pagina di errore */}
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}