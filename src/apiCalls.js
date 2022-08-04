export const getData = (url) => {
  return fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw Error(response.statusText)
        })
        
}