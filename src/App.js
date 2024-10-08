import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import Winner from "./components/Winner";



function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-20 bg-blue-800 flex justify-center items-center">
        <h2 className="text-white sm:text-[30px] font-bold text-[20px]">Rock Paper Scissors</h2>
      </div>
      <Routes>
        <Route path="/" element={<Game/>}/>
        <Route path="/winner" element={<Winner/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
