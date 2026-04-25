import ReposCard from "./ReposCard"

const ReposList = ({ repos }) => {
  return (
    <div>
      {repos.map(repo => (
        <ReposCard key={repo.id} repo={repo} />
      ))}
    </div>
  )
}

export default ReposList