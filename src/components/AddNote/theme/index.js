import styled from 'styled-components';

export const Button = styled.button`
background: transparent;
border: transparent;
font-size: 18px;
cursor: pointer;
margin-left: 5px;
padding: 5px;
`
export const DivOption = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
border: 1px solid black;
border-bottom: transparent;
padding: 5px;
border-radius: 5px 5px 0 0;
`
export const DivWrapper = styled.div`
width: 30%;
padding: 10px;
display: flex;
flex-flow: column wrap;
justify-content: center;
@media(max-width: 850px){
    width: 40%;
}
@media(max-width: 550px){
    width: 80%;
}
`
export const TextArea = styled.textarea`
width: 100%;
height: 200px;
background-color: #FFFFCC;
font-size: 18px;
padding: 5px 10px;
border:1px solid black;
resize: none;
`
export const DivDate = styled.div`
background-color: #DDDDDD;
border: 1px solid #000000;
display: flex;
justify-content: space-between;
font-size: 12px;
padding:5px;
width: 100%;
border-radius: 0 0 5px 5px;
border-top: transparent;
`
export const Select = styled.select`
width: 45%;
background-color: #DDDDDD;
font-weight: 600;
letter-spacing: 2px;
border-radius: 5px;
padding: 3px;
`
export const Option = styled.option`
font-weight: 600;
letter-spacing: 1.5px;
`
// komponent główny index.js
export const Wrapper = styled.div`
display: flex;
flex-flow: row-reverse wrap-reverse;
justify-content: center;
width: 100%;
margin-bottom: 70px;
height: 100%;
@media(max-width: 700px){
    margin-bottom: 120px;
}
@media(max-width: 395px){
    margin-bottom: 150px;
}
`