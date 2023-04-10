const axios = require("axios");

const options = {
  method: "GET",
  url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
  params: { q: "justin+bieber" },
  headers: {
    "X-RapidAPI-Key": "7711e82db6msh76601ef21b0daebp148c42jsnc81d1faf8341",
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
