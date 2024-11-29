/*=============================================== FactCard component ===============================================*/

import { Text } from "@julseb-lib/react"
import { StyledFactCard, Position } from "./styles"
import type { IFactCard } from "./types"

export const FactCard: FC<IFactCard> = ({ position, fact }) => {
    return (
        <StyledFactCard>
            <Position>{position}.</Position>
            <Text>{fact}</Text>
        </StyledFactCard>
    )
}
