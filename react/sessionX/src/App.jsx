import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CSSdemo from "./components/CSSdemo";
import DynamicStyle from "./components/DynamicStyle";
import Header from "./components/Header";
import SampleEvent from "./components/SampleEvent";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CSSdemo />
      <DynamicStyle />
      <Header />
      <SampleEvent />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
