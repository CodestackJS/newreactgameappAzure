import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenre from '../hooks/useGenre'

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {



  useGenre()


    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <>
        <Heading as={'h1'}>
            {heading}
        </Heading>
    
    </>
  )
}

export default GameHeading