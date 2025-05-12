import { createRoot } from "react-dom/client";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocialIcons from "./socialIcons/SocialIcons";



const App = () => {


  return (
    <BrowserRouter>
      <main className="App">
        <h1>Get started on your site</h1>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          {plateRoutes()}
          <Route path="/locations" element={<Locations />} />
        </Routes> */}
        {/* <SocialIcons /> */}
      </main>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
