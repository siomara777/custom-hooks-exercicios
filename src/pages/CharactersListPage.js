import { Title, NameContainer } from "./style";
import { Card } from "../components/Card/Card";
import useGetCharacter from "../hooks/useGetCharacter";
import useRequestData from '../hooks/useRequestData';




const CharactersListPage = () => {
  const [caractersList, isLoading, isError]= useRequestData('/people');

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>
      {isError ? (<p>Erro na postagem! Tente novamente...</p> ):
        isLoading ? (<p>Carregando ...</p> ): 
        caractersList.map((caracter) => {
          return (
            <Card
              key={caracter.name}
              text={caracter.name}
              backgroudColor={"nome"}
              textColor={"nome"}
            />
          );
        })}
      </NameContainer>
    </div>
  );
};

export default CharactersListPage;
