import React from 'react';
import { Foot, DivName } from './theme/themeFooter'
import Logo from '../Logo'

const Footer = () => {
return(
    <Foot>
        <span>&copy; 2021</span> 
        <span><Logo  /></span>
        <DivName>created by: Agnieszka Kamińska</DivName>
    </Foot>
)
}

export default Footer

