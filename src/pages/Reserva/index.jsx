import { Container } from "./styles";

export function Reserva(){
    return(
        <Container>  
            <h1>Reserva de veículo</h1>
            <p>Data e Hora Atuak</p>
            <label id="placa">Informe a placa do veículo:</label>
            <input type="text" id="placa"/>
            <p>Infos Veiculo</p>
            <button>Iniciar Reserva/Finalizar Reserva</button>
        </Container>    
    )
}