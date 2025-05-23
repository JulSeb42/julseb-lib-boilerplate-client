import { Text } from "@julseb-lib/react"
import { Link } from "react-router-dom"
import { Page } from "components"
import { PATHS } from "routes"

export const NotFound = () => {
    return (
        <Page title="404">
            <Text tag="h1">Page not found</Text>

            <Text>
                <Link to={PATHS.ROOT}>Back to homepage.</Link>
            </Text>
        </Page>
    )
}
