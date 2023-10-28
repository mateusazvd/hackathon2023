import { useState } from "react";
import { Dashboard } from "../Dashboard";
import { GerarRelatorio } from "../GerarRelatorio";
import { Sidebar } from "../Sidebar";

export function Admin() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      <div className="main-container-desktop">
        <Sidebar page = {page} setPage = {setPage}/>
        {page == "dashboard" && <Dashboard/>}
        {page == "relatorio" && <GerarRelatorio/>}
      </div>
    </>
  );
}
