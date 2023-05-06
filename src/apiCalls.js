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
  try {
    const response = await fetch(url, options);
    const xmlData = await response.text();
    parseString(xmlData, function (err, result) {
      console.dir(result, "result");
      json = result;
    });
  } catch (error) {
    console.error(error);
  }
  return json;
};
