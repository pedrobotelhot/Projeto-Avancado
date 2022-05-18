import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Exercicio prático React</h1>
       <form action="/pagina-processa-dados-do-form" method="post">
          <div>
            <label for="name">Nome:</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label for="endname">Sobrenome:</label>
            <input type="text" id="endname" />
          </div>
          <div>
            <label for="mail">E-mail:</label>
            <input type="email" id="mail" />
          </div>
          <div>
            <label for="password">Senha:</label>
            <input type="password" id="password"></input>
          </div>
          <div className="button">
            <button type="submit" onClick = {() => alert("Dados Enviados!")} >Enviar</button>
          </div>
          <div className="button2">
            <button type="reset" onClick = {() => alert("Dados Cancelados!")}>Cancelar</button>
          </div>
        </form>
      </header> 
    </div>
  );
}


export default App;
