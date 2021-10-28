import styled from 'styled-components'

export const DivWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
align-items: center;
@media(max-width: 900px){
flex-wrap: wrap-reverse;
justify-content: center;
}
`

export const Wrapper = styled.div`
position: relative;
min-height: 100%;
`
export const NewNoteWarapper = styled.div`
position: absolute;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
padding: 20px;
display: flex;
justify-content: center;
align-items: flex-start;
`