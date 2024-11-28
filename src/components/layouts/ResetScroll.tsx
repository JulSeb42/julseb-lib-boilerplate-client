/*=============================================== ResetScroll component ===============================================*/

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const ResetScroll = () => {
    const { pathname, search, state } = useLocation()

    console.log({ pathname, search, state })

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        })
    }, [pathname, search])

    return null
}
