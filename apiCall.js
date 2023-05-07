// var parseString = require("xml2js").parseString;

// export const getData = async (url) => {
//   var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };
//   let json = null;
//   try {
//     const response = await fetch(url, requestOptions);
//     const xmlData = await response.text();
//     parseString(xmlData, function (err, result) {
//       console.log(result);
//       console.dir(result, "result");
//       json = result;
//     });
//   } catch (error) {
//     console.error(error, "error");
//   }
//   return json;
// };

// var parseString = require("xml2js").parseString;

// export const getData = async () => {
//   var requestOptions = {
//     method: "GET",
//     redirect: "follow",
//   };

//   fetch(
//     "https://nextjs-cors-anywhere.vercel.app/api?endpoint=http://api.wefeelfine.org:8080/ShowFeelings?display=xml&returnfields=sentence,imageid,postdate&feeling=sad&limit=5&extraimages=8&postdate=2012-02-14",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((xmlData) => {
//       // console.log(xmlData, "xml");
//       console.log(parse(xmlData));
//     })
//     .catch((error) => console.log("error", error));

//   // var xml = "<root>Hello xml2js!</root>";
//   // parseString(xml, function (err, result) {
//   //   console.dir(result);
//   // });
//   // let json = null;
//   // try {
//   //   const response = await fetch(url, options);
//   //   const xmlData = await response.text();
//   //   parseString(xmlData, function (err, result) {
//   //     console.dir(result, "result");
//   //     json = result;
//   //   });
//   // } catch (error) {
//   //   console.error(error, 'error');
//   // }
//   // return json;
// };

// const parse = (xml) => {
//   console.log(xml);
//   var parseString = require("xml2js").parseString;
//   // var xml = "<root>Hello xml2js!</root>";
//   parseString(xml, function (err, result) {
//     console.dir(result);
//   });
//   // let json = null;
//   // try {
//   //   console.log(parseString(xmlData))
//   //   parseString(xmlData, function (err, result) {
//   //     console.dir(result, "result");
//   //     json = result;
//   //   });
//   // } catch (error) {
//   //   console.error(error, "error");
//   // }
//   // return json;
// };
