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
            <div className="posts">
                <input className="postText" placeholder="Введите текст к посту"/>
                <button className = "post-add">Добавить пост</button>
                <div className="post">
                    <img className="Mini-avik" src={avatar}/>
                    <p class="post-name">Бахарев Матвей</p>
                    <p class = "welc">welcome!</p>
                </div>
            </div>
        </div>
    )
}
export default Main