import "./App.css";
import Card from "./features/container/components/card/Card.jsx";
import NavBar from "./features/search/components/nav-bar/navBar.jsx";
import Search from "./features/search/components/search/Search.jsx";
// import TicketCard from "./features/tickets/list/TicketCard";

// import Principal from "./components/principal/Principal";
// import NavBar from "./components/navbar/NavBar";
// import ButtonLogin from "./components/button-login/ButtonLogin";

function App() {
  // const allWidth = { minWidth: "100%" };
  const section = {
    minWidth: "100%",
    height: "calc(100vh - 10rem)",
  };
  const marginBottom = {
    marginBottom: "1.5rem",
  };
  return (
    <>
      {/* <NavBar>
        <ButtonLogin>Login</ButtonLogin>
      </NavBar>
      <Principal></Principal> */}
      {/* <TicketCard></TicketCard> */}
      <nav>
        <NavBar></NavBar>
      </nav>
      <section style={marginBottom}>
        <Search></Search>
      </section>
      <section style={section}>
        <Card style={section}></Card>
      </section>
    </>
  );
}

export default App;
