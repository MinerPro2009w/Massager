import Header from "./components/Header/Header.js"
import Main from "./components/Main/Main.js"
import Norvbar from "./components/Norvbar/Norvbar.js"
import "./App.css"
import { Route } from "react-router-dom"

function App() {
  return (
   <div className="wrapper">
      <Header></Header>
      <Route path="/profile" component={Main}/>
      <Norvbar></Norvbar>
   </div>
  )
}

export default App;
