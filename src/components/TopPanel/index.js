import React from 'react'
import Logo from '../Logo'
import { Header, ButtonSettings, ButtonAdd } from './theme'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCogs } from "@fortawesome/free-solid-svg-icons"

const TopPanel = ({onClick, settings}) => {
return(
<Header>
    <span>
        <Logo fontSize={36} />
    </span>
    <span>
        <ButtonAdd onClick={onClick}>Add note</ButtonAdd>
        <ButtonSettings onClick={settings} title="Settings"><FontAwesomeIcon icon={faCogs} /></ButtonSettings>
    </span>
</Header>
)
}

export default TopPanel