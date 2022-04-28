import React ,{useState} from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMicCircleSharp } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import Wave from 'wave-visualizer';
import axios from 'axios';



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



const ChatContainer = () => {
const [data, setData] = useState("hi prajakta")
const [started, setStarted] = useState(false)

const onClose=()=>{
  console.log("onClose clicked")
  
  setStarted(false);
  
    this.audioStream.getTracks().forEach((track) => {
      track.stop();
    });
  
  
}
const StartButton=()=>{
  let wave = new Wave();
  setStarted(true)


  this.audioStream=navigator.mediaDevices
  .getUserMedia({
    audio: true,
  })
  .then(function (stream) {
    wave.fromStream(stream, 'output', {
      colors: ['red', 'white', 'blue'],
    });
    
  })
  .catch(function (err) {
    console.log(err.message);
  });
  console.log(started);
}


const startAssistant=async()=>{
  try{
    const res=await axios.get('http://localhost:5000/assistant')
    console.log("res",res)


  }catch(err){
console.log("err",err);
  }
}
const micClick = () => {
  console.log("mic button clicked");
  startAssistant()
  
  StartButton()

};

  return (
    <Container>
      <ProfileHeader />

      <MessageContainer>
   {started?(<div id="visualizer-container" style={{position: "absolute",
            top: "250px",
            right: "480px",}}>
      <canvas id="output" width="350" height="250"></canvas>
     
    </div>):(null)}
        
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
