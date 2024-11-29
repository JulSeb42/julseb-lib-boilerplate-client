/*=============================================== Api ===============================================*/

import { useState, useEffect } from "react"
import styled from "styled-components"
import {
    Text,
    Flexbox,
    uuid,
    SkeletonCard,
    generateNumbers,
    Button,
} from "@julseb-lib/react"
import { Page, FactCard, ErrorMessage } from "components"
import { catFacts } from "api"
import type { IErrorMessage } from "types"

export const Api = () => {
    const [facts, setFacts] = useState<Array<string>>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<undefined | IErrorMessage>(undefined)

    const getNewFacts = (number = 5) =>
        catFacts
            .getFacts(number)
            .then(res => {
                setFacts(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setError(err)
                setLoading(false)
            })

    useEffect(() => {
        getNewFacts()
    }, [])

    return (
        <Page title="API Example">
            <Flexbox
                alignItems="center"
                justifyContent="space-between"
                gap="xs"
            >
                <Text tag="h1">API Example</Text>
                <Button onClick={() => getNewFacts()}>New facts</Button>
            </Flexbox>

            {error ? (
                <ErrorMessage error={error} />
            ) : loading ? (
                generateNumbers(0, 4).map(n => (
                    <StyledSkeletonCard
                        key={n}
                        className="SkeletonCard"
                        border={{ width: 1 }}
                        height={64}
                        borderRadius="m"
                        isShiny
                    />
                ))
            ) : !facts?.length ? (
                <Text>Your search did not return any result.</Text>
            ) : (
                <Flexbox flexDirection="column" gap="s">
                    {facts?.map((fact, i) => (
                        <FactCard key={uuid()} fact={fact} position={i + 1} />
                    ))}
                </Flexbox>
            )}
        </Page>
    )
}

const StyledSkeletonCard = styled(SkeletonCard)`
    & > .Shine {
        background-color: ${({ theme }) => theme.GRAY_50};
    }
`
