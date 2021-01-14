import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./pages/login-page/LoginPage";
import AbsenPage from './pages/absen-page/AbsenPage';
import Detailabsen from './pages/detail-absen-page/Detailabsen';
import Profileinfo from './pages/profile-info-page/Profileinfo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route path="/absen">
                    <AbsenPage/>
                </Route>
                <Route path="/detaila">
                    <Detailabsen/>
                </Route>
                <Route path="/profilei">
                    <Profileinfo/>
                </Route>
            </Switch>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
