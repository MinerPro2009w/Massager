import { BrowserRouter, NavLink } from "react-router-dom"
import "./Norvbar.css"
function Norvbar(){
    return(
        <div className="Norvbar">
            <div className="NorvCont">
                <NavLink to="/profile">Профиль</NavLink>
                <NavLink to="/messages">Сообщения</NavLink>
                <NavLink to="/friends">Друзья</NavLink>
            </div>
        </div>
    )
}
export default Norvbar