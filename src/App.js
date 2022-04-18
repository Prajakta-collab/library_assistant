import Navbar from './components/Navbar';
import NewArrivals from './components/NewArrivals';
import styled from "styled-components";
import BookListContainer from './components/BookListContainer';
import ChatContainer from './components/ChatContainer';
const Container=styled.div`
display:flex;
flex-direction:row;
height:100vh;
width:100%;
background:#f8f9fb;`
function App() {
  return (
   <>
<Navbar/> 
<Container>
  <BookListContainer/>
  <ChatContainer/>

  </Container> </>
  );
}

export default App;
