import React from 'react'
import styled from "styled-components"
import { layouts } from '../styles/themeHandler'

function Commercial() {
  return (
    <CommercialStyleContainer className="CommercialContainer">

<layouts.ContainerSolid>Hier könnte Ihre Werbung stehen</layouts.ContainerSolid>
<layouts.ContainerSolid>Hier könnte Ihre Werbung stehen</layouts.ContainerSolid>
<layouts.ContainerSolid>Hier könnte Ihre Werbung stehen</layouts.ContainerSolid>
    </CommercialStyleContainer>
  )
}

export default Commercial

const CommercialStyleContainer= styled.section`
padding: 10px 10px 10px 10px;
display: flex;
flex-direction:column;
height:100%;
max-width: 100%;
`