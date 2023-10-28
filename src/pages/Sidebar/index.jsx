import "./index.css";
import { BiLogOut } from "react-icons/bi";

export function Sidebar({ page, setPage } = props) {
  return (
    <>
      <div className="sidebar">
        <div className="logo"></div>
        <div className="secundario">Painel de Infrações</div>
        <hr className="hr" size="1" color="#383838" />
        <div className="button-container">
        <a className="button" onClick={() => setPage("dashboard")}>
          Dashboard
        </a>
        <a className="button" onClick={() => setPage("relatorio")}>
          Gerar Relatório
        </a>
        </div>
        <div className="containerSair">
          <a href="#" className="buttonSair">
            <div className="icon-exit">
              <BiLogOut />{" "}
            </div>{" "}
            Sair
          </a>
        </div>
      </div>
    </>
  );
}
