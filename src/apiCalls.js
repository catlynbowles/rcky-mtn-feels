var parseString = require("xml2js").parseString;

export const getData = async (dataSearch) => {
  const url = "https://cors-proxy3.p.rapidapi.com/api";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "3bea32400cmsh3e321627a520f18p12bc62jsn79614440dfdd",
      "X-RapidAPI-Host": "cors-proxy3.p.rapidapi.com",
    },
    body: new URLSearchParams({
      "my-url": dataSearch,
    }),
  };

  let json = null;
  const response = await fetch(url, options);
  if (!response.ok) {
    console.log(response);
    if (response.status === 429) {
      throw new Error(`This website runs on limited API requests, and the quota has been met for the day! Try back with tomorrow's feelings!`)
    }
    throw new Error(`Error! status: ${response.status}`);
  }
  const xmlData = await response.text();
  parseString(xmlData, function (err, result) {
    console.dir(result, "result");
    json = result;
  });
  return json;
};
