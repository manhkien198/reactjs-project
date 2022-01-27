import { useEffect, useState } from "react";
import paginate from "./pagination";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getFollowers = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setData(paginate(data));
    setLoading(false);
  };
  useEffect(() => {
    getFollowers();
  }, []);
  return { loading, data };
};
