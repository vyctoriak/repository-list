import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

// https://api.github.com/users/samuel1992/repos

export function RepositoryList() {

  const [repositories, setRepositories] = useState([])

  /* 
  * IMPORTANTE:
   dispara uma função quando alguma variável muda (se setada entre o [] de dependência), 
   caso o [] esteja vazio a função é executada uma única vez
  */
  
  /*
  ! CUIDADO :
    Se deixar o segundo parâmetro (o array de dependência) vazio,
    o useEffect irá entrar em looping!
  */


  useEffect(() => {
    fetch('https://api.github.com/users/samuel1992/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}