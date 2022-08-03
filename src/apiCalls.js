export const getData = (url, param = undefined) => {
  return fetch(url, param)
        .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err))
}