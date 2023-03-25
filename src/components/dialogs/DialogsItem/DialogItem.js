import {NavLink} from "react-router-dom"
function DItem(props){
    return(
        <div className="user">
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DItem