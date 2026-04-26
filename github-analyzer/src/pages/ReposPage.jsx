import { useParams } from "react-router-dom";
import ReposList from "../components/ReposList";
import useUserRepos from "../hooks/useUserRepos";
import "./Container.css"
import LanguageChart from "../components/LanguageCharts";

const ReposPage = () => {
  const { username } = useParams();
  const { repos, loading, error } = useUserRepos(username);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
        <ReposList repos={repos} />;
        <LanguageChart repos={repos} />;
    </div>
  )
};

export default ReposPage;