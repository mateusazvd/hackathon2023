import "./style.css";
export default function ResumoMulta(props) {

    const corGravidade = () => {
        if(props.gravidademulta == "Média"){
            return "#F89809";
        }else if(props.gravidademulta == "Leve"){
            return "green";
        }else{
            return "red"
        }
    }

  return (
    <div className="multaContainer" key={props.codigomulta}>
      <div
        className="firstrow"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p style={{ marginLeft: "1rem", marginTop: "1rem", color: "#fff" }}>
          {props.codigomulta} - {props.motivomulta}
        </p>
        <p style={{ marginTop: "1rem" }}>
          <span style={{ marginRight: "1.94rem", color: "#E54B4B" }}>
            {props.nomecondutor} - {props.matriculacondutor}
          </span>
        </p>
      </div>
      <div
        className="secondrow"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p style={{ marginTop: ".2rem" }}>
          <span className="spanSubTitle" style={{color: corGravidade()}} >{props.gravidademulta}</span>{" "}
          <span style={{ color: "#868484" }}>
            <span className="spanSubTitle">{props.datamulta}</span>
            <span className="spanSubTitle">{props.localizacao}</span>
            <span className="spanSubTitle">placa: {props.placaveiculo}</span>
          </span>
        </p>
        <a
          href="#"
          style={{
            marginTop: ".5rem",
            marginRight: "1.94rem",
            textDecoration: "none",
            color: "#fff",
            fontWeight: 400,
          }}
        >
          Ver Detalhes
        </a>
      </div>
    </div>
  );
}
