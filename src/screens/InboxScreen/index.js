import React, { useState, useEffect, forwardRef } from "react";
import FlipMove from "react-flip-move";
import {
  CircleTickIcon,
  DeleteIcon,
  EditIcon,
  LinkIcon,
  MoreIcon,
  QuoteIcon,
  SearchIcon,
  SendIcon,
  SettingIcon,
} from "../../assets/icons";
import "./inbox.scss";

const InboxScreen = () => {
  const [friendsMessages, setFriendsMessages] = useState([
    {
      id: 1,
      user_name: "Zephyrus",
      user_type: "Business Consultant",
      message: "Current message a chatbot is a soft",
      unread: 0,
      stamp: "9:21",
      profile_image: "/images/user-1.png",
    },
    {
      id: 2,
      user_name: "Chatbiz",
      user_type: "Teacher Consultant",
      message: "Previous message a chatbot is",
      unread: 2,
      stamp: "8:54",
      profile_image: "/images/user-2.png",
    },
    {
      id: 3,
      user_name: "Legacy Bot",
      user_type: "Student Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Yesterday",
      profile_image: "/images/user-3.png",
    },
    {
      id: 4,
      user_name: "Intercom",
      user_type: "Business Consultant",
      message: "Previous message a chatbot is...",
      unread: 1,
      stamp: "Yesterday",
      profile_image: "/images/user-4.png",
    },
    {
      id: 5,
      user_name: "Konversation",
      user_type: "Business Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Feb 24",
      profile_image: "/images/user-5.png",
    },
    {
      id: 6,
      user_name: "Wefolio Chat",
      user_type: "Student Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 16",
      profile_image: "/images/user-6.png",
    },
    {
      id: 7,
      user_name: "Intercom",
      user_type: "Business Consultant",
      message: "Previous message a chatbot is...",
      unread: 0,
      stamp: "Jan 16",
      profile_image: "/images/user-4.png",
    },
    {
      id: 8,
      user_name: "Konversation",
      user_type: "Student Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 14",
      profile_image: "/images/user-5.png",
    },
    {
      id: 9,
      user_name: "Wefolio Chat",
      user_type: "Teacher Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 08",
      profile_image: "/images/user-6.png",
    },
    {
      id: 10,
      user_name: "Intercom",
      user_type: "Teacher Consultant",
      message: "Previous message a chatbot is...",
      unread: 0,
      stamp: "Jan 08",
      profile_image: "/images/user-4.png",
    },
    {
      id: 11,
      user_name: "Konversation",
      user_type: "Business Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 07",
      profile_image: "/images/user-5.png",
    },
    {
      id: 12,
      user_name: "Wefolio Chat",
      user_type: "Business Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 07",
      profile_image: "/images/user-6.png",
    },
    {
      id: 13,
      user_name: "Intercom",
      user_type: "Business Consultant",
      message: "Previous message a chatbot is...",
      unread: 0,
      stamp: "Jan 07",
      profile_image: "/images/user-4.png",
    },
    {
      id: 14,
      user_name: "Konversation",
      user_type: "Business Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 07",
      profile_image: "/images/user-5.png",
    },
    {
      id: 15,
      user_name: "Wefolio Chat",
      user_type: "Business Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 05",
      profile_image: "/images/user-6.png",
    },
    {
      id: 16,
      user_name: "Intercom",
      user_type: "Business Consultant",
      message: "Previous message a chatbot is...",
      unread: 0,
      stamp: "Jan 05",
      profile_image: "/images/user-4.png",
    },
    {
      id: 17,
      user_name: "Konversation",
      user_type: "Business Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 05",
      profile_image: "/images/user-5.png",
    },
    {
      id: 18,
      user_name: "Wefolio Chat",
      user_type: "Business Consultant",
      message: "You: Previous message a chatbot...",
      unread: 0,
      stamp: "Jan 05",
      profile_image: "/images/user-6.png",
    },
  ]);
  const [selectedChat, setSelectedChat] = useState({
    user_name: "Zephyrus",
    user_type: "Business Consultant",
    message: "Current message a chatbot is a soft",
    unread: 0,
    stamp: "9:21",
    profile_image: "/images/user-1.png",
  });

  return (
    <div className="inbox-page rel">
      <div className="wrapper app-padding flex">
        {/* Inbox Sidebar */}
        <div className="inbox-sidebar rel">
          <div className="hdr flex aic sticky">
            <div className="search-field flex aic">
              <div className="icon">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="iput cleanbtn font s14 c000 anim"
              />
            </div>
          </div>
          <div className="friends-list flex flex-col">
            {friendsMessages.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedChat(item);
                }}
                className={`friend flex aic ${
                  selectedChat.id === item.id ? "active" : ""
                }`}
              >
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${item.profile_image})`,
                  }}
                />
                <div className="meta flex flex-col">
                  <div className="row flex aic">
                    <div className="name font">{item.user_name}</div>
                    <div className="stamp font">{item.stamp}</div>
                  </div>
                  <div className="row flex aic">
                    <div className="msg font wordwrap">{item.message}</div>
                    {item.unread > 0 && (
                      <div className="unread font">{item.unread}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Container */}
        <ChatContainer selectedChat={selectedChat} />
      </div>
    </div>
  );
};

export default InboxScreen;

// Chat Container
const ChatContainer = ({ selectedChat }) => {
  const [username, setUsername] = useState("Mubashir");
  const [user, setUser] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      username: "Zephyrus",
      text: "Hello there! 👋",
      stamp: "9:20",
    },
    {
      username: "Zephyrus",
      text: "Welcome to our help center. ‍💻",
      stamp: "9:21",
    },
  ]);

  const handleSendMessage = () => {
    if (input) {
      setMessages([
        ...messages,
        {
          username: username,
          text: input,
          stamp: "9:20",
        },
      ]);
      setInput("");
    }
  };

  return (
    <div className="chat-container flex flex-col">
      <div className="inbox-content-hdr flex aic">
        <div className="lit flex aic">
          <div className="user flex aic">
            <div
              className="img"
              style={{ backgroundImage: `url(${selectedChat.profile_image})` }}
            />
            <div className="meta flex flex-col">
              <div className="nam font s14">{selectedChat.user_name}</div>
              <div className="txt font s12">{selectedChat.user_type}</div>
            </div>
          </div>
        </div>
        <div className="rit flex aic">
          <div className="btn cleanbtn flex aic">
            <CircleTickIcon />
          </div>
          <div className="btn cleanbtn flex aic">
            <MoreIcon />
          </div>
        </div>
      </div>
      <div className="messages-section">
        {user ? (
          <div className="message-user-block">
            <FlipMove>
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  message={msg}
                  username={username}
                  selectedChat={selectedChat}
                />
              ))}
            </FlipMove>
          </div>
        ) : (
          <div className="message-friend-block">
            <FlipMove>
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  message={msg}
                  username={username}
                  selectedChat={selectedChat}
                />
              ))}
            </FlipMove>
          </div>
        )}
      </div>
      <div className="inbox-content-ftr flex aic">
        <div className="field flex aic">
          <input
            type="text"
            className="iput cleanbtn font s14 anim"
            placeholder="Write message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleSendMessage();
              }
            }}
          />
        </div>
        <div className="actions flex aic">
          <button
            className="cleanbtn upload-btn"
            onClick={() => document.getElementById("_upload-file_").click()}
          >
            <LinkIcon />
          </button>
          <input id="_upload-file_" type="file" className="hidden-input" />
          <button
            className="send-btn flex aic anim"
            onClick={handleSendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

// Message Block
const Message = forwardRef(({ message, username, selectedChat }, ref) => {
  const isUser = username === message.username;
  const [openMessageSetting, setOpenMessageSetting] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setOpenMessageSetting(false);
    });
  });

  return (
    <div
      className={`message-row ${isUser ? "user-message" : "friend-message"}`}
    >
      <div className="msg-content flex aic">
        <div ref={ref} className="text font">
          {message.text}
        </div>
        <div className="msg-actions flex aic rel">
          {isUser && (
            <button
              className="setting-btn cleanbtn"
              onClick={(e) => {
                e.stopPropagation();
                setOpenMessageSetting(!openMessageSetting);
              }}
            >
              <SettingIcon />
            </button>
          )}
          <div
            className={`message-setting flex flex-col anim ${
              openMessageSetting ? "show" : "hide"
            }`}
          >
            <div className="item flex aic">
              <div className="ico">
                <EditIcon />
              </div>
              <div className="lbl font s14">Edit</div>
            </div>
            <div className="item flex aic">
              <div className="ico">
                <QuoteIcon />
              </div>
              <div className="lbl font s14">Quote</div>
            </div>
            <div className="item flex aic">
              <div className="ico">
                <DeleteIcon />
              </div>
              <div className="lbl font s14">Delete</div>
            </div>
          </div>
        </div>
      </div>
      <div className="meta flex aic">
        <div
          className="user-profile"
          style={{
            backgroundImage: `url(${selectedChat.profile_image})`,
          }}
        />
        <div className="stamp font">{message.stamp}</div>
      </div>
    </div>
  );
});
