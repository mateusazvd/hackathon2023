import './index.css'

export function Login(){
    return(
        <>
          

            <div className='container'>

                {/* <div className="garrafa"></div> */}

                <div className="esquerdo">
                    <div className="img"></div>
                    <h2 className="secundario">Painel de Infração</h2>
                </div>


                <div className="direito">
                    <form className='formulario'>
                        <header className='titulo'>Login</header>
                        <input className='inputLogin' type="text"  placeholder='Login' required/>
                        <input className='inputSenha' type="text" placeholder='Senha' required/>
                        <button className='botao'>Entrar</button>
                    </form>
                </div>
            </div>
        </>    
    )
}