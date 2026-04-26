import { useEffect, useState } from "react";
import axios from "axios";

const useGitHubUser = (username) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) {
            setUser(null);
        return;
        }

        const controller = new AbortController();

        const fetchUser = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await axios.get(
                    `https://api.github.com/users/${username}`,
                    { signal: controller.signal }
                );

                setUser(res.data);
            } catch (e) {
                if (e.name === "CanceledError") return;
                setError(e);
            } finally {
            setLoading(false);
            }
        };

        fetchUser();

        return () => {
            controller.abort();
        };
    }, [username]);

    return { user, loading, error };
}

export default useGitHubUser;