import moment from 'moment';
function Tabela({vetor}) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Nome do Operador Transacionado</th>
                    <th>Saldo atual</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{moment(obj.dataTransferencia).format('HH:mm:ss DD-MM-YYYY')}</td>
                            <td>R$ {obj.valor}</td>
                            <td>{obj.tipo}</td>
                            <td>{obj.nomeOperadorTransacao}</td>
                            <td>R$ {obj.conta.saldo}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;