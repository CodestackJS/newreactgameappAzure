import { Card, CardBody, HStack, Heading, Image, } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/imageUrl"


interface GameProps {
    game: Game
}

const GameCard = ({game}:GameProps) => {
  return (
    <>
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)}/>
        <CardBody>
           
            {/* {game.parent_platforms.map(platform => <Text>{platform.platform.name}</Text>)} */}
            {/* both the code above and below with mapping is correct way different version */}
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
            {/* <PlatformIconsList platforms={game.parent_platforms.map(platform => platform.platform)}/> */}
            <HStack>
                <PlatformIconsList platforms={game.parent_platforms.map(platform => platform.platform)}/>
                  <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize={'100%'}>{game.name}</Heading>
        </CardBody>

    </Card>
    
    
    
    </>
  )
}

export default GameCard