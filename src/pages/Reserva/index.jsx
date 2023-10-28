import { Button } from "../../components/Button/index";
import {
  Container,
  TopTabBarNavigator,
  Form,
  InfoVeiculo,
  FlexDivTab,
  FlexDiv,
  InputDiv,
  Greeting,
  Input,
  Text,
  Title,
} from "./styles";
export function Reserva() {
  return (
    <Container>
      <TopTabBarNavigator>
        <FlexDivTab>
          <p>Reserva de veículo</p>
           <p>menu</p>
        </FlexDivTab>
       
      </TopTabBarNavigator>

      <Greeting>
        <Title>Bem vindo(a)!</Title>
        <Text>Realize a reserva do veículo</Text>
      </Greeting>

      <Form>
        <InputDiv>
          <FlexDiv>
            <label htmlFor="placa" id="placa">
              Placa:
            </label>
          </FlexDiv>
          <FlexDiv>
          <Input type="text" id="placa" />
          <Button
           width="150px"
           backgroundColor="red"
           color="white"
           onClick={()=> null}>🔍</Button>
          </FlexDiv>
        </InputDiv>

        <InfoVeiculo>
          <FlexDiv>
            <p>Placa</p>
            <p>Modelo Veiculo</p>
          </FlexDiv>
          <FlexDiv>
            <p>Status</p>
            <p>Tipo</p>
            <p>🏀</p>
          </FlexDiv>
        </InfoVeiculo>

        <button>Confirmar Reserva</button>
      </Form>
    </Container>
  );
}
