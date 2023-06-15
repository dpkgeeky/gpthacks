import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react"
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [messages, setMessages] = useState([])
  const sendMessage = async (res) => {
    try {
      setMessages([...messages, {
        message: res,
        sentTime: "just now",
        sender: "Deepak",
        direction: "outgoing"
      }])
        const ans = await axios.post("http://localhost:3000/api/ask", {
        "question": res
      })
      setMessages([...messages,{
        message: res,
        sentTime: "just now",
        sender: "Deepak",
        direction: "outgoing"
      } ,{
        message: ans.data.response,
        sentTime: "just now",
        sender: "chatbot",
        direction: "incoming"
      }])
      
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages?.map((ele) => (
              <Message
                model={ele}
              />
            ))}
            {/* <Message
          model={{
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Joe",
          }}
        />
         <Message
          model={{
            message: "Hello my friend",
            sentTime: "just now",
            sender: "Joe",
            direction:"outgoing"
          }}
        /> */}
          </MessageList>
          <MessageInput onSend={(res) => sendMessage(res)} placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>)
}
  ;

export default App