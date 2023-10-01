import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Router from './Router/Router'
import { useState } from 'react'
import LanguageContext from "./context/LangaugeContext";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [ theme , setTheme ] = useState('light')
  const [ lang , setLang ] = useState('en')
  return (  
    <BrowserRouter>
    
      <div
        className={`${lang === "ar" ? "text-right" : "text-left"} ${theme === "dark" ? " dark" : ""}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
      <LanguageContext.Provider value={{lang , setLang}}>
          <ThemeContext.Provider value={{theme , setTheme}}>
            <Header/>
            <div className="container my-5">
              <Router />
            </div>
          </ThemeContext.Provider>
      </LanguageContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
