import { BlurOnSharp } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.h1`
    font-size: inherit;
    font-weight: bold;

    &, & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 0.5rem;
    }

    & > a > svg {
        margin-top: 0.1em;
    }
`

export const Logo = <Container><Link><span to="/home">StyLight</span> <BlurOnSharp style={{ fontSize: "1em" }} /></Link></Container>

export default Logo