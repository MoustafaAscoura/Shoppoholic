import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Router from './Router/Router'

function App() {
 
  return (
    <BrowserRouter>
      <Header/>
      <div className="container my-5">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
