import './App.css';
import Formulario from "./Components/Formulario";
import Tabela from "./Components/Tabela";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {


    // cadastro de conta
    const transferir = {
        idOrigem:'',
        valor:'',
        idDestino:''
    }

    // obtendo os dados do formulário
    const digitado = (e) => {
        console.log(e.target);
    }

    // UseState
    const [transacoes, setTransacoes] = useState([]);
    const id = 1;
    const url = "http://localhost:8080/conta/" + id + "/transacoes";
    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                url
            );
            setTransacoes(result.data.content);
        }

        fetchData();
    }, []);
    return (
        <div>
            <Formulario/>
            <Tabela vetor={transacoes}/>
        </div>
    );
}

export default App;
