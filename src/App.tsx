/*=============================================== App ===============================================*/

import { Routes, Route } from "react-router-dom"
import { ToasterProviderWrapper, uuid } from "@julseb-lib/react"
import { routes } from "routes"

export const App = () => {
    return (
        <ToasterProviderWrapper>
            <Routes>
                {routes.map(route => (
                    <Route
                        key={uuid()}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </ToasterProviderWrapper>
    )
}
