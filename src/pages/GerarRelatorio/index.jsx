import { Sidebar } from "../Sidebar";
import "./style.css";
import { multas } from "../../Utils/multas";
import ResumoMulta from "../../components/resumoMulta";

export default function GerarRelatorio() {
  return (
    <div style={{display: "flex"}}>
      <Sidebar />
      <div className="main-container-relatorio">
        <div className="secundary-container-relatorio">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="titleContainer">
              <h1 style={{ color: "white" }}>Gerar relatório</h1>
              <p>Crie o relatório detalhado das últmas multas de trânsito</p>
            </div>
            <div className="containerUpload">
              <button className="btnUpload">Adicionar arquivo</button>
            </div>
          </div>

          <input type="text" className="inpSearch" placeholder="Pesquisar" />
          <button className="btnSearch">Pesquisar</button>
          <div className="containerMulta">
            {multas.map((e) => (
              <ResumoMulta
                codigomulta={e.codigomulta}
                placaveiculo={e.placaveiculo}
                localizacao={e.localizacao}
                datamulta={e.datamulta}
                gravidademulta={e.gravidademulta}
                matriculacondutor={e.matriculacondutor}
                nomecondutor={e.nomecondutor}
                motivomulta={e.motivomulta}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
