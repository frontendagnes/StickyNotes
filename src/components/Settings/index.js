import React, { useContext } from 'react'
import authContext from '../../utility/Context';
import { Wrapper, LabelDiv, Label, H1, Input } from './theme/settings'
const Settings = () => {

    const {color, setColor, 
            colorLow, setColorLow, 
            colorMedium, setColorMedium, 
            colorImportant, setColorImportant} = useContext(authContext)
    const handleChangeColor = (e) =>{
        localStorage.setItem("background", e.target.value)
        setColor(localStorage.getItem("background")) 
    }
    const handleChangeColorLow = (e) => {
        localStorage.setItem("colorLow", e.target.value)
        setColorLow(localStorage.getItem("colorLow"))
    }
    const handleChangeColorLMedium= (e) => {
        localStorage.setItem("colorMedium", e.target.value)
        setColorMedium(localStorage.getItem("colorMedium"))
    }
    const handleChangeColorImportant = (e) => {
        localStorage.setItem("colorImportant", e.target.value)
        setColorImportant(localStorage.getItem("colorImportant"))
    }
    return(
        <Wrapper>
            <H1>Settings</H1>
            <LabelDiv>
                <Label>Background 
                    <Input 
                        type="color" 
                        value={color}
                        onChange={handleChangeColor}
                        />
                </Label>
                <Label>Color Low
                    <Input
                    type="color"
                    value={colorLow}
                    onChange={handleChangeColorLow} />
                </Label>
                <Label>Color Medium
                    <Input
                    type="color"
                    value={colorMedium}
                    onChange={handleChangeColorLMedium} />
                </Label>
                <Label>Color Important
                    <Input
                    type="color"
                    value={colorImportant}
                    onChange={handleChangeColorImportant} />
                </Label>
            </LabelDiv>
        </Wrapper>
    )
}

export default Settings