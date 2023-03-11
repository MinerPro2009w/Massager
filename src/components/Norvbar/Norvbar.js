import { BrowserRouter, NavLink } from "react-router-dom"
function Norvbar(){
    return(
        <BrowserRouter>
        <div className="Norvbar">
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink to="/messages">Сообщения</NavLink>
            <NavLink to="/friends">Друзья</NavLink>
        </div>
        </BrowserRouter>
    )
}
export default Norvbar