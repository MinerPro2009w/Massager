import './dialogs.css'
import DialogItem from './DialogsItem/DialogItem.js'
import Messages from './../messagers/messagers.js'
function dialogs(props){
    return (
        <div className="dialogs">
            <div className="dialogList">
                <div className='dialogList-container'>
                    {props.chats.map(function(chat){
                        return <DialogItem id={chat.id} name={chat.name}/>
                    })}
                </div>

            </div>
           <Messages messagers={props.messages}/>
        </div>
    )
}

export default dialogs