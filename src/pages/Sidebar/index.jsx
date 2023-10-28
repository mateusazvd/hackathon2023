import './index.css'
import { BiLogOut } from 'react-icons/bi';


export function Sidebar() {
  return (
    <>

      <div className="sidebar">
        <div className="logo"></div>
        <div className="secundario">Painel de Infrações</div>
        <hr className='hr' size='1' color='#383838' />
        <a href="/admin" className='button'>Dashboard</a>
        <a href="#" className='button'>Gerar Relatório</a>
        <div className='containerSair'>
          <a href="#" className='buttonSair'><BiLogOut /> Sair</a>
        </div>
      </div>

    </>
  )
}