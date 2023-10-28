import "./index.css";
import { cidades } from "../../Utils/cidades";


export function Dashboard() {
  return (
    <>
      <div className="main-container-desktop">
        <div className="secundary-container">
          <div className="title-container">
            <h1>{"Bem vindo(a)"}</h1>
            <p>Confira os últimos resultados das multas de trânsito</p>
          </div>

          <div style={{ display: "flex" }}>
            <div className="dashboard-container">
              <div className="dashboard-main">
                <select name="select">
                  {cidades.map((cidade) => (
                    <option value={cidade}>{cidade}</option>
                  ))}
                </select>
                <div className="filtros-mes">
                  <button> 3 Meses </button>
                  <button> 6 Meses </button>
                  <button> 12 Meses </button>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="secundary-dashboard-container">
                <div
                  className="dash-monetario"
                  style={{ backgroundColor: "#262424" }}
                >
                  <h1>R$ 15000,00</h1>
                  <p>Em multas esse mês</p>
                </div>
                <div
                  className="dash-monetario"
                  style={{ backgroundColor: "#E5333B" }}
                >
                  <h1>R$ 26900,00</h1>
                  <p>Em multas mês passado</p>
                </div>
              </div>
              <div className="lista-infracoes-container">
                <span>
                  <div style={{fontSize:"16px",color: "#fff"}}>Infrações mais recentes</div>
                  <div style={{ color: "#E5333B",fontSize:"14px"}}>Ver mais</div>
                </span>
                <div className="item-infracao">
                  <div>
                    <p>Mateus Azevedo Aguiar</p>
                    <p>86975 - Multa por alta velocidade</p>
                    <p style={{ color: "#7E7A7A" }}>
                      {"Fortaleza(CE) 25/12/2022 ás 17:32"}
                    </p>
                  </div>
                  <div>
                    <p>Nivel</p>
                    <p>R$ 190,00</p>
                    <p>Placa BRA2E19</p>
                  </div>
                </div>
                <div className="item-infracao">
                  <div>
                    <p>Mateus Azevedo Aguiar</p>
                    <p>86975 - Multa por alta velocidade</p>
                    <p style={{ color: "#7E7A7A" }}>
                      {"Fortaleza(CE) 25/12/2022 ás 17:32"}
                    </p>
                  </div>
                  <div>
                    <p>Nivel</p>
                    <p>R$ 190,00</p>
                    <p>Placa BRA2E19</p>
                  </div>
                </div>
                <div className="item-infracao">
                  <div>
                    <p>Mateus Azevedo Aguiar</p>
                    <p>86975 - Multa por alta velocidade</p>
                    <p style={{ color: "#7E7A7A" }}>
                      {"Fortaleza(CE) 25/12/2022 ás 17:32"}
                    </p>
                  </div>
                  <div>
                    <p>Nivel</p>
                    <p>R$ 190,00</p>
                    <p>Placa BRA2E19</p>
                  </div>
                </div>
                <div className="item-infracao">
                  <div>
                    <p>Mateus Azevedo Aguiar</p>
                    <p>86975 - Multa por alta velocidade</p>
                    <p style={{ color: "#7E7A7A" }}>
                      {"Fortaleza(CE) 25/12/2022 ás 17:32"}
                    </p>
                  </div>
                  <div>
                    <p>Nivel</p>
                    <p>R$ 190,00</p>
                    <p>Placa BRA2E19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
