import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height : 60px;
  background-color : #e0dada;
  margin : -8px;
  h1{
    margin-top : -8px;
  }
`;
const Wrapper = styled.div`
padding : 10px 20px;
display: flex;
justify-content: space-between;
` ;
const a = styled.div` flex: 1;`;
const b = styled.div`flex : 4;`;
const c = styled.div`flex: 1;`
const Navbar = () => {
  return (
    <Container><Wrapper><a><img src="img.jpg" alt="tswira" height="30px"/></a><b><h1>Title</h1></b><c>Search</c></Wrapper></Container>
  )
}
export default Navbar