import styled from 'styled-components';

export const Button = styled.button`
background: transparent;
border: transparent;
font-size: 18px;
cursor: pointer;
margin-left: 15px;
`
export const DivOption = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
border: 1px solid black;
border-bottom: transparent;
padding: 5px;
`
export const DivWrapper = styled.div`
width: 30%;
padding: 10px;
`
export const TextArea = styled.textarea`
width: 100%;
height: 200px;
background-color: #FFFFCC;
font-size: 18px;
padding: 5px 10px;
`
export const SpanButton = styled.span`

`

// komponent główny index.js
export const Wrapper = styled.div`
display: flex;
flex-flow: row wrap;
height: 80vh;
justify-content: center;
`