import React ,{useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMicCircleSharp } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
const onClose=()=>{
  alert("close button clicked");
}
const micClick = () => {
  console.log("mic button clicked");
  alert("mic button clicked");
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  flex: 4;
  background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #3b3b3b;
  padding: 10px;
  align-items: center;
  gap: 10px;
  font-weight: bold;

  height: 56px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;
const ContactName = styled.span`
  font-size: 16px;
  color: black;
`;

const MicContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  padding: 10px;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  bottom: 0;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #181818;
`;
const MessageDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 15px;
`;
const Message = styled.div`
  background: white;
  padding: 8px 10px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
`;

const MicButton = styled.button`
  background: transparent;
  height: 60px;
  width: 60px;
  color: white;
  padding: 1rem;
  border: none;
  cursor: pointer;
  font-size: 27px;
  border: 5px solid white;
  border-radius: 50%;
  padding: 10px;
`;

const ChatContainer = () => {
const [data, setData] = useState("hi prajakta")
  return (
    <Container>
      <ProfileHeader />

      <MessageContainer>
        <MessageDiv>
          <Message>{data}</Message>
        </MessageDiv>
        {/* <MessageDiv>
          <Message>The alchemist is at shelf no 8.</Message>
        </MessageDiv> */}
      </MessageContainer>
      <MicContainer>
        <IoMicCircleSharp
          onClick={micClick}
          color="cornflowerblue"
          height="38px"
          width="38px"
          size="4.2em"
          style={{
            position: "absolute",
            bottom: "18px",
            right: "18px",
            cursor: "pointer",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        />
      </MicContainer>
      <AiFillCloseCircle
      onClick={onClose}
        size="4.2em"
        color="cornflowerblue"
        style={{
          position: "absolute",
          bottom: "18px",
          right: "108px",
          cursor: "pointer",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      />
    </Container>
  );
};

export default ChatContainer;
