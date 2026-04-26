import { useState, useEffect } from "react";
import axios from "axios";

const useUserRepos = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) {
            setRepos([]);
            setLoading(false);
        return;
        }

        const controller = new AbortController();

        const fetchRepos = async () => {
            setLoading(true);
            setError(null);
            setRepos([]);

        try {
            const res = await axios.get(
            `https://api.github.com/users/${username}/repos`,
            { signal: controller.signal }
            );

            const sorted = [...res.data].sort(
            (a, b) => b.stargazers_count - a.stargazers_count
            );

            setRepos(sorted);
      } catch (e) {
            if (e.name === "CanceledError") return;
            setError("Failed to fetch repos");
      } finally {
            setLoading(false);
      }
    };

        fetchRepos();

        return () => controller.abort();
    }, [username]);

    return { repos, loading, error };
}

export default useUserRepos;