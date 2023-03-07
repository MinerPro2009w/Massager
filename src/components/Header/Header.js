import "./Header.css"
import logo from "./../img/logo.png"
function Header(){
    return(
        <div className="Header">
            <img className = "logo" src={logo}/>
        </div>

    )
}
export default Header