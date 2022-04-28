import React from 'react';
import styled from "styled-components";



const Container=styled.div`
display:flex;
flex-direction:column;
height:100%;
width:100%;
flex:1.1;
background:#222222;
color:white;
`
const ProfileInfoDev=styled.div`
display:flex;
flex-direction:row;
background:#3b3b3b;
padding:10px`

const ProfileImage=styled.img`
width:32px;
height:32px;
border-radius:50%;`


const UserName=styled.div`  font-size: 15px;
padding: 5px 10px;
font-weight:bold;
color: white;


`

const Introduction=styled.div`  font-size: 35px;
padding: 5px 10px;
font-family:vazir;
font-weight: bold;
font-decoration:italic;

`



const BookListContainer = () => {
  return (
<Container>
<ProfileInfoDev>
             

             <ProfileImage src="images/assistant.png"/> <UserName >Library Assistant-Marnie </UserName>
          </ProfileInfoDev>
         
<Introduction>
Welcome to Library Voice Assistant- Marnie!
{/* <IoHandLeftSharp marginLeft='5px'color='orange'/> */}
<br/>
I'm here to help you find location of a book. 
{/* <SiBookstack color='cornflowerblue' size='40px'/> */}
</Introduction>
      </Container>    
  )
}

export default BookListContainer
