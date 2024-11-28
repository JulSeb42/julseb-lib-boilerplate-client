/*=============================================== Page ===============================================*/

import { PageLoading, Wrapper, Main } from "@julseb-lib/react"
import { SwitchTheme } from "./SwitchTheme"
import { BaseLayout, type IBaseLayout } from "./BaseLayout"
import { Header } from "./Header"
import { SITE_DATA, navLinks } from "data"
import { PATHS } from "routes"
import type { LibMainSize } from "@julseb-lib/react/types"
import type { ILibPageLayout } from "@julseb-lib/react/component-props"

export const Page: FC<IPage> = ({
    children,
    isLoading,
    mainSize,
    noWrapper,
    ...rest
}) => {
    return (
        <BaseLayout {...rest}>
            {isLoading ? (
                <PageLoading />
            ) : (
                <>
                    <Header />

                    {!noWrapper ? (
                        <Wrapper>
                            <Main size={mainSize}>{children}</Main>
                        </Wrapper>
                    ) : (
                        children
                    )}
                </>
            )}
        </BaseLayout>
    )
}

interface IPage extends IBaseLayout {
    noWrapper?: boolean
    isLoading?: boolean
    mainSize?: LibMainSize
}
