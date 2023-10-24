import { useState, useEffect } from "react"

export function useFetch(url) {
  const [data, setData] = useState(null)

  const isLoading = data === null

  useEffect(
    () => {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
    },
    [url]
  )

  return {
    data,
    isLoading,
  }
}