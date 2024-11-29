/*=============================================== Page ===============================================*/

import { PageLoading, Wrapper, Main } from "@julseb-lib/react"
import { BaseLayout, type IBaseLayout } from "./BaseLayout"
import { Header } from "./Header/Header"
import type { LibMainSize } from "@julseb-lib/react/types"

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
