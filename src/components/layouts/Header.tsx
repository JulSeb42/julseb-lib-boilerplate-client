/*=============================================== Header component ===============================================*/

import { Header as Container } from "@julseb-lib/react"
import { Nav } from "./Nav"
import { SITE_DATA } from "data"

export const Header = () => {
    return (
        <Container logo={SITE_DATA.NAME}>
            <Nav />
        </Container>
    )
}
