import React from 'react';

// Material UI
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon/";
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import { Avatar, IconButton } from "@material-ui/core/";

import './Chat.css';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">

        <p className="chat__message">
          <span className="chat__name">Brendan </span>
          Message one here
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Brendan </span>
          Message two here
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Brendan </span>
          Message three here
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicNoneOutlinedIcon />
      </div>
    </div>
  )
}

export default Chat;
