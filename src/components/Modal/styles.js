import styled from "styled-components"
import { Close as Cross } from "styled-icons/material/Close"
import { NavigateNext } from "styled-icons/material/NavigateNext"
import { NavigateBefore } from "styled-icons/material/NavigateBefore"

export const ModalBehind = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  visibility: ${props => (props.open ? `visible` : `hidden`)};
  opacity: ${props => (props.open ? `1` : `0`)};
  transition: 0.5s;
  z-index: 1;
`

export const ModelDiv = styled.div`
  align-self: center;
  justify-self: center;
  background: ${props => props.theme.white};
  max-width: ${props => props.maxWidth || props.theme.maxWidth};
  max-height: ${props => props.maxHeight || `80vh`};
  position: relative;
  overflow: scroll;
  padding: 2em;
  border-radius: ${props => props.theme.mediumBorderRadius};
  box-shadow: 0 0 3em ${props => props.theme.black};
`

export const Close = styled(Cross).attrs({ size: `2em` })`
  position: absolute;
  top: 0.5em;
  right: 0.4em;
  cursor: pointer;
  z-index: 1;
  color: ${props => props.white && `white`};
`

export const Next = styled(NavigateNext).attrs({ size: `2em` })`
  position: absolute;
  top: 50%;
  right: 0.4em;
  cursor: pointer;
  z-index: 1;
  color: ${props => props.white && `white`};
`

export const Previous = styled(NavigateBefore).attrs({ size: `2em` })`
  position: absolute;
  top: 50%;
  left: 0.4em;
  cursor: pointer;
  z-index: 1;
  color: ${props => props.white && `white`};
`
