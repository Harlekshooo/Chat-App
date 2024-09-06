import React, { useEffect, useState } from "react";
import "./chatscreen.css";
// import IoMdSend from 'react-icons/io'
import { IoSend } from "react-icons/io5";
import Header from "../Header/header";

const body = () => {
  const [messageValue, setMessageValue] = useState("");
  const [sentMessage, setSentMessage] = useState("");
  const [displayBtn, setDisplayBtn] = useState(true);
  const [chatArr, setChatArr] = useState(
    JSON.parse(localStorage.getItem("send")) != undefined ||
      JSON.parse(localStorage.getItem("send")) != null
      ? JSON.parse(localStorage.getItem("send"))
      : []
  );

  const theHour = new Date().getHours();
  let currenHour = theHour;

  if (currenHour > 12) {
    currenHour = theHour - 12;
  } else {
    currenHour = theHour;
  }
  const currentMinute = new Date().getMinutes();

  const lessThan10 = `0${currentMinute}`;
  const greaterThan10 = `${currentMinute}`;

  const antiMeridian = "AM";
  const postMeridian = "PM";

  const textChange = (e) => {
    let result = e.target.value;
    setMessageValue(result);
    if (result == "") {
      setDisplayBtn(true);
    } else {
      setDisplayBtn(false);
    }
  };

  const sendClick = () => {
    // setSentMessage(messageValue);
    setMessageValue("");

    const senderChat = {
      creation: messageValue,
    };

    chatArr.push(senderChat);
    setDisplayBtn(true)
    localStorage.setItem("send", JSON.stringify(chatArr));
  };

  const handleClearClick = () => {
    localStorage.clear()
    setChatArr([])
  }

  

  return (
    <div className="bodyContainer">
      <Header />
      <div className="innerBodyContainer">
        <div className="messageSection">
          <div className="sendersMessage">
            {chatArr.map((newChat, i) => {
              console.log(newChat.creation);
              return (
                <div className="messageListContainer">
                <div className="messageList" key={i}>
                  {
                    <div className="message">
                      {newChat.creation}
                      <span className="time">
                        {currenHour}:
                        {currentMinute < 10 ? lessThan10 : greaterThan10}{" "}
                        {theHour < 12 ? antiMeridian : postMeridian}
                      </span>
                    </div>
                  }
                  <span className="profile">P</span>
                </div>

                <div className="responseList">
                  <span className="profile">P</span>
                  <div className="response">
                    Automated Response
                  </div>
                </div>
                </div>
              );
            })}
          </div>

        
            
          
        </div>

        <div className="textAreaCont">
          <div className="innerTextAreaCont">
          <button onClick={handleClearClick} className="clearChat"> clear</button>
            <textarea
            onChange={textChange}
            className="typeMessage"
            placeholder="Type your message"
            value={messageValue}
            id=""
            cols="30"
            rows="10"
          />
          {!displayBtn && (
            <button onClick={sendClick} className="sendMessage">
              <IoSend className="sendIcon" />
            </button>
          )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default body;
