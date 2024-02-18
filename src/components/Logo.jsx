import { BlurOnSharp } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.h1`
    font-size: inherit;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
`

export const Logo = <Container><span>StyLight</span> <BlurOnSharp style={{ fontSize: "1em" }} /></Container>

export default Logo