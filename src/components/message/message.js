import "./message.css"
function Message(props){
    return(
        <div className="Message">
            <h2 className="MessageAll">{props.message}</h2>

        </div>
    )
}
export default Message