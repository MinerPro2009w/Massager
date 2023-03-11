import Post from "./../Post/post.js"
import "./posts.css"
function posts(){
    return(
        <div className="posts">
                <input className="postText" placeholder="Введите текст к посту"/>
                <button className = "post-add">Добавить пост</button>
                <Post text="Welcome!"></Post>
                <Post text="This is my first post!"></Post>
                <Post text="I love cats."></Post>
            </div>
    )
}
export default posts