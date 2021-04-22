import React from 'react'
import Logo from '../Logo'
import { DivWrapper, Button, ButtonSettings } from './theme'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCogs } from "@fortawesome/free-solid-svg-icons"

const TopPanel = ({onClick}) => {
return(
<DivWrapper>
    <span>
        <Logo fontSize={36} />
    </span>
    <span>
        <Button onClick={onClick}>Add note</Button>
        <ButtonSettings onClick={onClick} title="Settings"><FontAwesomeIcon icon={faCogs} /></ButtonSettings>
    </span>
</DivWrapper>
)
}

export default TopPanel