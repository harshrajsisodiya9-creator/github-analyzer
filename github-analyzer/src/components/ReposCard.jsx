const ReposCard = ({ repo }) => {
  return (
    <div>
      <h3>{repo.name}</h3>
      <p>{repo.description || "No description"}</p>
      <span>⭐ {repo.stargazers_count}</span>
      <span>🍴 {repo.forks_count}</span>
      <span>🔵 {repo.language || "Unknown"}</span>
    </div>
  )
}

export default ReposCard