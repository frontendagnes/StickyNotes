import styled from 'styled-components'

export const DivWrapper = styled.div`
display: flex;
height: 100%;
@media(max-width: 900px){
flex-wrap: wrap-reverse;
justify-content: center;
}
`

export const Wrapper = styled.div`
position: relative;
min-height: 100%;
`