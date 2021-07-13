import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import BurgerMenu from "./components/shared/BurgerMenu";
import Header from "./components/shared/Header/Header";
import { Context } from './context';

import Footer from "./components/shared/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

    const ContextApp = () => {
        const [lang, setLang] = useState('ru-RU');

        return (
            <Context.Provider value={{
                lang,
                setLang
            }
            }>
                <div className="content">
                    <BurgerMenu pageWrapId={"app"} right />
                    <Router>
                        <Header />
                        <main>
                            <App />
                        </main>
                    </Router>

                    <Footer />
                </div>
            </Context.Provider>
        )
    }

ReactDOM.render( <ContextApp />, document.getElementById("root"));
