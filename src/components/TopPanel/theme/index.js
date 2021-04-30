import styled from 'styled-components';

export const Header = styled.header`
display: flex;
justify-content: space-between;
padding: 30px 20px;
background-color: #ffffff;
-webkit-box-shadow: 0px 3px 18px 10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 18px 10px rgba(0,0,0,0.75);
box-shadow: 0px 3px 18px 10px rgba(0,0,0,0.75);
margin-bottom: 50px;
@media(max-width: 700px){
padding: 15px 5px;
}
`

export const Button = styled.button`
transition: all 0.75s;
font-size: 22px;
cursor: pointer;
`
export const ButtonAdd = styled(Button)`
padding: 5px 10px;
border-radius: 5px;
border: transparent;
background-color: #000000;
color: #ffffff;
&:hover{
background-color: #ffffff;
color: #000000;
}
`

export const ButtonSettings = styled(Button)`
background: transparent;
border: transparent;
font-size: 32px;
color: #999999;
&::before{
    content: "|";
    padding-right:5px;
    padding-left:5px;
}
&:hover{
    color: #CCCCCC;
}
`
