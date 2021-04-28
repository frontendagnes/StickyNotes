import styled from 'styled-components';

export const Foot = styled.footer`
   display: flex;
   justify-content: space-between;
   flex-flow: row wrap;
   font-size: 22px;
   padding: 10px 40px;
   font-weight: 600;
   border-top: 1px solid grey;
   width: 100%;
   position: absolute;
   bottom:0;
   height: 60px;
   background-color: #ffffff;
   @media (max-width: 700px){
      flex-flow: column wrap;
      align-items: left;
  }

`

export const DivName = styled.div`
font-size: 22px;
@media (max-width: 700px){
   margin-top: 30px;
}
`