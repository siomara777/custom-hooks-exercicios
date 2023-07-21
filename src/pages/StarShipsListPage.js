
import {Title,PostContainer } from './style'
import { Card } from '../components/Card/Card'
import useGetStarShips from "../hooks/useGetStarShips"
import useRequestData from '../hooks/useRequestData';

const  StarShipsListPage = () => {
  const [starShipsList, isLoading, isError] = useRequestData('/starships');

  return (
    <div>
      <Title>Título das Naves</Title>
      <PostContainer>

      {isError ? (<p>Erro! Tente novamente...</p> ):
        isLoading ? (<p>Carregando ...</p> ): 
      starShipsList.map((starShip) => {
        return(
          <Card 
          key={starShip.name} 
          title={starShip.name}
          text={starShip.manufacturer} 
          backgroudColor={'gray'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default StarShipsListPage;



