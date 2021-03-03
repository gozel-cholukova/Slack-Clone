import styled  from "styled-components";
import React from 'react';
import { Button } from "@material-ui/core";

function ChatInput({channelName, channelId}) {
  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <ChatInputContainer>
      <form>
        <input 
          placeholder={`Message #ROOM`}
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div``;
