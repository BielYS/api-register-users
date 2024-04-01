import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
            projectId='9b55ce88-eb64-4df7-81e0-11c84b5ea855'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}} 
            />
        </div>
    )
}

export default ChatsPage