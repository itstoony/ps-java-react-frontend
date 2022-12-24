function Formulario(transacoes) {
    return (
        <form>
            <input type='datetime-local' onChange={transacoes} placeholder='Data de Inicio' className='form-control'/>
            <input type='datetime-local' onChange={transacoes} placeholder='Data Final' className='form-control'/>
            <input type='text' onChange={transacoes} placeholder='Nome do Operador' className='form-control'/>

            <input type="button" value='Pesquisar' className='btn btn-primary'/>
        </form>
    )
}

export default Formulario;