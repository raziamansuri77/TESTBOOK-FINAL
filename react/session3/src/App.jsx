import { useState } from "react";
import "./App.css";
import MyImage from "./components/propsdemos/MyImage";
import Test from "./components/propsdemos/Test";
import Parent from "./components/propsdemos/Parent";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const array = [
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnVp3abpKHU6VI-9TV3Rova8rKtVHp-b0Sg&s",
    "https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=",
  ];
  return (
    <div className="container my-2" style={{ border: "2px solid green" }}>
      <h3>App Comp: {count}</h3>
      <Parent />
      {/* Passing function as props */}
      <Test increment={increment} />
      {array.map((url) => (
        <MyImage url={url} />
      ))}
    </div>
  );
}

export default App;
