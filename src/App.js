import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./pages/MainLayout";
import UserTable from "./pages/UserTable";

function App() {

    const content =
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path='/' element={<MainLayout/>}>
                            <Route index element={<UserTable/>}/>
                            <Route path='*' element={<HomePage/>}/>
                        </Route>
                    </Routes>
                </Router>
            </Provider>
        </div>

    return content;
}

export default App;
