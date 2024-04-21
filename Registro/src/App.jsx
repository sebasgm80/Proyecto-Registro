import { Outlet } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./components";


function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
