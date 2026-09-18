import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, configuration) {
  const response = await fetch(url, configuration);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Something wrong happened.");
  }

  return resData;
}

export default function useHttp(url, configuration, initialData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, {
          ...configuration,
          body: data,
        });
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong.");
      }
      setIsLoading(false);
    },
    [url, configuration],
  );

  useEffect(() => {
    if (
      (configuration &&
        (configuration.method === "GET" || !configuration.method)) ||
      !configuration
    ) {
      sendRequest();
    }
  }, [sendRequest, configuration]);

  return { data, isLoading, error, sendRequest };
}
