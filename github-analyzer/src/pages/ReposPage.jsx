import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ReposList from "../components/ReposList"

const ReposPage = () => {
  const { username } = useParams()
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const controller = new AbortController();

    const fetchRepos = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${username}/repos`,
            {signal : controller.signal}
        )
        const sorted = res.data.sort((a, b) => b.stargazers_count - a.stargazers_count)
        setRepos(sorted)
        console.log(sorted);
      } catch (e) {
        if(axios.isCancel(e)) return;   // ignore cancelled requests
        setError("Failed to fetch repos")
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()

    return () => controller.abort() // cleanup return function to cancel request on unmount
  }, [username])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return <ReposList repos={repos} />
}

export default ReposPage