import { Routes, Route } from "react-router-dom";
import HomePage from '../../pages/homepage/index.jsx';
import Layout from '../layout/Layout';
import ErrorPage from '../../pages/homepage/error';
import GenrePage from '../../pages/homepage/genrepages';
import GamePage from '../../pages/homepage/gamepage';
import RegisterPage from '../../pages/homepage/register';
import LoginPage from '../../pages/homepage/login';
import Account from '../../pages/homepage/account';

export function Routing() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/:genre" element={<GenrePage />} />
        <Route path="/games/:slug/:id" element={<GamePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
