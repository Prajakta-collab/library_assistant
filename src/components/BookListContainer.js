import React from 'react';
import styled from "styled-components";
import {IoHandLeftSharp} from 'react-icons/io5';
import {SiBookstack} from 'react-icons/si';


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

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  padding: 10px;
`;
 const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  
  gap: 10px;
`;
const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
`;
 const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
`;
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
const BookItem=styled.div` display:flex;
flex-direction: row;
align-items: center;

  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  :hover {
    background: #ebebeb;
  }`
  const BookIcon = styled.img`
  width:56px;
  height: 38px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  object-fit: cover;
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 12px;
`;

const BookName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
  font-weight:bold;
`;
const DescText = styled.span`
  width: 100%;
  font-size: 14px;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
`;

const ArrivalTime = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
`;

const BookComponent=()=>{
    return <BookItem>
        <BookIcon src="images/alchemist.jpg"/>
      <BookInfo>
          <BookName>
              The Alchemist
          </BookName>
          <DescText>The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure...</DescText>
      </BookInfo>
      <BookInfo>
          <ArrivalTime>3 days ago</ArrivalTime>
      </BookInfo>
    </BookItem>
}


const BookListContainer = () => {
  return (
<Container>
<ProfileInfoDev>
             

             <ProfileImage src="images/assistant.png"/> <UserName >Library Assistant-Marnie </UserName>
          </ProfileInfoDev>
          {/* <SearchBox>
              <SearchContainer>
                  <SearchIcon src={"images/search-icon.svg"}/>
                  <SearchInput placeholder="Search in New Arrivals"/>
                      

              </SearchContainer>
          </SearchBox> */}
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
