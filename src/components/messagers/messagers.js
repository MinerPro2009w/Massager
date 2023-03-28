import Message from "./../message/message.js"
import './massagers.css'
import sendIcon from "./../img/arrow-forward-outline.svg"
function Messages(props){
    return (
        <div className = "Messages">
            <div className = "MessageList">
               {props.messagers.map(function(message,index,array)
               {
                return <Message message={message.text} id={message.id}></Message>
               })}
            </div>
            <div className="EnterMessage">
                <input className="MessageInput" type="text" placeholder="Введите сообщение..."></input>
                <button className="Send"><img src={sendIcon}></img></button>  
            </div>
        </div>
    )
}

export default Messages