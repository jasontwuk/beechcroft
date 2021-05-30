import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

// *** components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Chat from "./components/Chat";
import MobileContact from "./components/MobileContact";

const App = () => {
  return (
    <Router>
      <Nav />
      <MobileContact />
      <Hero />
      <Chat />
    </Router>
  );
};

export default App;
