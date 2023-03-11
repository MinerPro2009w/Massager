import Posts from "./../Posts/posts.js"
import "./Main.css"
import avatar from "./../img/backrooms-descent.jpg"
function Main(){
    return(
        <div className="Main">
            <div className="profile">
                <img class="Ava" src={avatar}/>
                <h2 class="Name">Бахарев Матвей</h2>
                <h2 class="idshnik">ID:89023587</h2>
            </div>
            <Posts></Posts>
        </div>
    )
}
export default Main