
import "./post.css"
function post(props){
    return(
        <div className="post">
                    <img className="Mini-avik" src={props.avatar}/>
                    <p class="post-name">{props.name}</p>
                    <p class = "welc">{props.text}</p>
                </div>
    )
}
export default post