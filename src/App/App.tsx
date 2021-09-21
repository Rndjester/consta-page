import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
    Theme,
    presetGpnDefault
} from "@consta/uikit/Theme";
import MainPage from "../pages/MainPage/MainPage";
import "./App.scss";

function App(): JSX.Element {
    return (
        /*
        Theme и App разделены, так как для появления кастомного скролла в App требуется, чтоб
        компонент темы был снаружи. Грубо говоря <Theme className="App" ... не сработает
        */
        <BrowserRouter>
            <Theme preset={presetGpnDefault}>
                <div className="App">
                    <MainPage />
                </div>
            </Theme>
        </BrowserRouter>

    );
}

export default App;
