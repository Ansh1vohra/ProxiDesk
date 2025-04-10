import { Route,Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./pages/Signin";


export default function App(){
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  )
}