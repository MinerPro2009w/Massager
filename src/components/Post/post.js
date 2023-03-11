import avatar from "./../img/backrooms-descent.jpg"
import "./post.css"
function post(props){
    return(
        <div className="post">
                    <img className="Mini-avik" src={avatar}/>
                    <p class="post-name">Бахарев Матвей</p>
                    <p class = "welc">{props.text}</p>
                </div>
    )
}
export default post