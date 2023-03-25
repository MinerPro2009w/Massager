import Message from "./../message/message.js"
import './massagers.css'
import sendIcon from "./../img/arrow-forward-outline.svg"
function Messages(){
    return (
        <div className = "Messages">
            <div className = "MessageList">
                <Message></Message>
                <Message></Message>
                <Message></Message>
                <Message></Message>
            </div>
            <div className="EnterMessage">
                <input className="MessageInput" type="text" placeholder="Введите сообщение..."></input>
                <button className="Send"><img src={sendIcon}></img></button>  
            </div>
        </div>
    )
}

export default Messages