import Header from "./components/Header/Header.js"
import Main from "./components/Main/Main.js"
import Norvbar from "./components/Norvbar/Norvbar.js"
import "./App.css"
import { Route,BrowserRouter,Routes } from "react-router-dom"
import Dialogs from './components/dialogs/dialogs.js'
import avatar from "./components/img/backrooms-descent.jpg"

function App(props) {
  return (
   <div className="wrapper">
    <BrowserRouter>
      <Header></Header>
      <Norvbar></Norvbar>
      <div className = "wrapper-content">
      <Routes>
          {/* <Route path="profile" render={function(){
            return(
              <Main user={{
                name:"Бахарев Матвей",
                id:8640534
              }}></Main>
            )
          }}/> */}
          <Route path="profile" element={<Main user={props.state.userData} posts = {props.state.postData}></Main>}/>
          <Route path="messages" element={<Dialogs chats={props.state.dialogData} messages={props.state.messagesData}></Dialogs>}/>
        </Routes>
      </div>
    </BrowserRouter>
   </div>
  )
}

export default App;
