import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Views from './views';
import {Col, Menu, Row, Tabs} from "antd";
import MainPage from "./MainPage";

function App() {
    const content =
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path='/' component={MainPage} />
                        <Route path='/v' component={Views} />
                    </Routes>
                </Router>
            </Provider>
        </div>

}

export default App;
