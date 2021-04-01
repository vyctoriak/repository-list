import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
  name: "Unform 1",
  description: "Forms in React",
  link: "https://github.com/vyctoriak/BeTheHero"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}