/*=============================================== FactCard styles ===============================================*/

import styled from "styled-components"
import { FONT_WEIGHTS, Mixins, RADIUSES, SPACERS } from "@julseb-lib/react"

export const StyledFactCard = styled.div`
    border: 1px solid ${({ theme }) => theme.GRAY_200};
    border-radius: ${RADIUSES.M};
    padding: ${SPACERS.S};
    ${Mixins.Flexbox({ $gap: "s" })}
`

export const Position = styled.span`
    font-weight: ${FONT_WEIGHTS.BLACK};
    color: ${({ theme }) => theme.GRAY_500};
`
