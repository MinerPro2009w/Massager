import Post from "./../Post/post.js"
import "./posts.css"
function posts(props){
    return(
        <div className="posts">
                <input className="postText" placeholder="Введите текст к посту"/>
                <button className = "post-add">Добавить пост</button>
                {props.posts.map(function(post){
                    return (<Post text={post.text} avatar={post.avatar} name={post.name}/>)
                })}
            </div>
    )
}
export default posts