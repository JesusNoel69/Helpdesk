import "./App.css";
import Principal from "./components/principal/Principal";
import NavBar from "./components/navbar/NavBar";
import ButtonLogin from "./components/button-login/ButtonLogin";

function App() {
  return (
    <>
      <NavBar>
        <ButtonLogin>Login</ButtonLogin>
      </NavBar>
      <Principal></Principal>
    </>
  );
}

export default App;
