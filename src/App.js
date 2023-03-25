import Header from "./components/Header/Header.js"
import Main from "./components/Main/Main.js"
import Norvbar from "./components/Norvbar/Norvbar.js"
import "./App.css"
import { Route,BrowserRouter,Routes } from "react-router-dom"
import Dialogs from './components/dialogs/dialogs.js'
import avatar from "./components/img/backrooms-descent.jpg"

function App() {
  let dialogs = [
    {
      name:'Димас',
      id:634432424
    },
    {
      name:'Денис',
      id:9564967498
    },
    {
      name:'Мирон',
      id:1231235653
    },
  ]

  let posts = [
    {
      avatar:avatar,
      name:"Матвей",
      text:"dasdasdsadsdasufkfdlgnflkfjklsnfldskfmdslknfdlsnfdskjnfdsljfndskjfndsljfndskfnds"
    },
    {
      avatar:avatar,
      name:"Владлен",
      text:"dasdasdsadsdasufkfdlgnflkfjklsnfldskfmdslknfdlsnfdskjnfdsljfndskjfndsljfndskfnds"
    },
    {
      avatar:avatar,
      name:"Димас",
      text:"dasdasdsadsdasufkfdlgnflkfjklsnfldskfmdslknfdlsnfdskjnfdsljfndskjfndsljfndskfnds"
    },
  ]
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
          <Route path="profile" element={<Main user={{name:"Матвей Бахарев",id:8640534,avatar:avatar,posts:posts}}></Main>}/>
          <Route path="messages" element={<Dialogs chats={dialogs}></Dialogs>}/>
        </Routes>
      </div>
    </BrowserRouter>
   </div>
  )
}

export default App;
