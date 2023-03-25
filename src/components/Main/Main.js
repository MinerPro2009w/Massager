import Posts from "./../Posts/posts.js"
import "./Main.css"

function Main(props){
    return(
        <div className="Main">
            <div className="profile">
                <img className="Ava" src={props.user.avatar}/>
                <h2 className="Name">{props.user.name}</h2>
                <h2 className="idshnik">ID:{props.user.id}</h2>
            </div>
            <Posts posts={props.posts}></Posts>
        </div>
    )
}
export default Main