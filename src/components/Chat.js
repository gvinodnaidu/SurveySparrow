import React from 'react'
import "./Chat.css";

class Chat extends React.Component{

    constructor(){
        super();
        this.state = {
            toggle:false
        }
    }

    render(){
        return(
           
              
                <div className="chat" onClick={()=>{this.setState({toggle:!this.state.toggle})}}>
                <img className="chat_logo" src="./images/Sparrow_Bird.png" alt="chat_logo"/>
</div>

            
        );
    }
}

export default Chat;

