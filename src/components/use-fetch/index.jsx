import { useEffect } from "react";
import { useState } from "react";

export default function UseFetch(url, Options = {}) {
  // 3 states
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);

    try {
      const response = await fetch(url, { ...Option });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`$(e).some Error Occured`)
      setPending(false);
    }
  }

  useEffect(()=> {
    fetchData();
  }, [url])

  return {data, error, pending};
}
