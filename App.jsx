import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// 1-
// function ListaUsuarios() {
//   const usuarios = [
//     { id: 1, nome: "K", email: "pretuê@email.com" },
//     { id: 2, nome: "E", email: "eve@email.com" },
//     { id: 3, nome: "❤️", email: "casamento@email.com" }
//   ];

//   return (
//     <ul>
//       {usuarios.map(usuario => (
//         <li key={usuario.id}>
//           {usuario.nome} - {usuario.email}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ListaUsuarios;

//2-
// function App() {
//   // O useState avisa o React quando os dados mudam,
//   // fazendo a tela atualizar automaticamente.

//   const [usuarios, setUsuarios] = useState([]);

//   return (
//     <div>
//       <h1>Lista de usuários</h1>
//     </div>
//   );
// }

// export default App;

//3-
// function ListaDeNomes() {
//   const [nomes, setNomes] = useState(["Lano Belgo", "Ambrosinio"]);
//   const [input, setInput] = useState("");

//   function adicionar() {
//     setNomes([...nomes, input]);
//     setInput("");
//   }

//   return (
//     <div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={adicionar}>Adicionar</button>

//       <ul>
//         {nomes.map((nome, index) => (
//           <li key={index}>{nome}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaDeNomes;

//4-
// function ListaTarefas() {
//   const [tarefas, setTarefas] = useState([]);
//   const [input, setInput] = useState("");

//   function adicionar() {
//     const novaTarefa = {
//       id: Date.now(),
//       texto: input
//     };

//     setTarefas([...tarefas, novaTarefa]);
//     setInput("");
//   }

//   return (
//     <div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={adicionar}>Adicionar</button>

//       <ul>
//         {tarefas.map(tarefa => (
//           <li key={tarefa.id}>{tarefa.texto}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaTarefas;

//5-
// function ListaTarefas() {
//   const [tarefas, setTarefas] = useState([]);
//   const [input, setInput] = useState("");

//   function adicionar() {
//     if (input.trim() !== "") {
//       const novaTarefa = {
//         id: Date.now(),
//         texto: input
//       };

//       setTarefas([...tarefas, novaTarefa]);
//       setInput("");
//     }
//   }

//   return (
//     <div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={adicionar}>Adicionar</button>

//       <ul>
//         {tarefas.map(tarefa => (
//           <li key={tarefa.id}>{tarefa.texto}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListaTarefas;

//6-
// function ListaDeNomes() {
//   const [nomes, setNomes] = useState([
//     { id: 1, nome: "Cansei" },
//     { id: 2, nome: "Cansei2" }
//   ]);

//   function remover(id) {
//     setNomes(nomes.filter(nome => nome.id !== id));
//   }

//   return (
//     <ul>
//       {nomes.map(nome => (
//         <li key={nome.id}>
//           {nome.nome}

//           <button onClick={() => remover(nome.id)}>
//             Remover
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ListaDeNomes;

//7-
// function App() {
//   const [tarefas, setTarefas] = useState([]);
//   const [input, setInput] = useState("");

//   function adicionar() {
//     if (input.trim() !== "") {
//       setTarefas([...tarefas, {
//         id: Date.now(),
//         texto: input
//       }]);

//       setInput("");
//     }
//   }

//   function remover(id) {
//     setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
//   }

//   return (
//     <div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={adicionar}>Adicionar</button>

//       <p>Total de tarefas: {tarefas.length}</p>

//       <ul>
//         {tarefas.map(tarefa => (
//           <li key={tarefa.id}>
//             {tarefa.texto}

//             <button onClick={() => remover(tarefa.id)}>
//               Remover
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//8-
// O filter() é melhor porque cria um novo array sem o item removido.
// Já o splice() modifica o array original, podendo causar problemas
// na atualização do estado no React.

//9-
// function App() {
//   const [tarefas, setTarefas] = useState([
//     { id: 1, texto: "Estudar React" },
//     { id: 2, texto: "Fazer exercícios" }
//   ]);

//   function editarTarefa(id) {
//     const novoTexto = prompt("Novo texto:");

//     if (novoTexto) {
//       setTarefas(tarefas.map(tarefa =>
//         tarefa.id === id
//           ? { ...tarefa, texto: novoTexto }
//           : tarefa
//       ));
//     }
//   }

//   return (
//     <div>
//       {tarefas.map(tarefa => (
//         <p key={tarefa.id}>
//           {tarefa.texto}

//           <button onClick={() => editarTarefa(tarefa.id)}>
//             Editar
//           </button>
//         </p>
//       ))}
//     </div>
//   );
// }

// export default App;

//10-
// function App() {
//   const [tarefas, setTarefas] = useState([
//     { id: 1, texto: "Estudar React" },
//     { id: 2, texto: "Fazer exercícios" }
//   ]);

//   const [editandoId, setEditandoId] = useState(null);
//   const [input, setInput] = useState("");

//   function editar(tarefa) {
//     setEditandoId(tarefa.id);
//     setInput(tarefa.texto);
//   }

//   function salvar(id) {
//     setTarefas(tarefas.map(tarefa =>
//       tarefa.id === id
//         ? { ...tarefa, texto: input }
//         : tarefa
//     ));

//     setEditandoId(null);
//   }

//   return (
//     <div>
//       {tarefas.map(tarefa => (
//         <div key={tarefa.id}>
//           {editandoId === tarefa.id ? (
//             <>
//               <input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//               />

//               <button onClick={() => salvar(tarefa.id)}>
//                 Salvar
//               </button>

//               <button onClick={() => setEditandoId(null)}>
//                 Cancelar
//               </button>
//             </>
//           ) : (
//             <>
//               {tarefa.texto}

//               <button onClick={() => editar(tarefa)}>
//                 Editar
//               </button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

//11-
function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar", concluida: false },
    { id: 2, texto: "VerGameplayGTA", concluida: false }
  ]);

  function concluir(id) {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    ));
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>

      {tarefas.map(tarefa => (
        <p key={tarefa.id}>
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => concluir(tarefa.id)}
          />

          <span style={{
            textDecoration: tarefa.concluida ? "line-through" : "none"
          }}>
            {tarefa.texto}
          </span>

          {tarefa.concluida ? " - Concluída" : " - Pendente"}
        </p>
      ))}
    </div>
  );
}

export default App;
