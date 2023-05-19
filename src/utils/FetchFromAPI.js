const axios = require("axios");

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "716cbea802msh8dc03ca03e20dbdp13fe17jsnb9c0ec4c4aee",
    // "X-RapidAPI-Key": "180f3e78bemsh65a9d4497e6204fp1e44e2jsn25be45dea563", //finish limit for today
    // "X-RapidAPI-Key": "545f125aa5msh63af47fd786e3f5p1aa9bcjsn34315a1b54e9",  //finish limit for taday
    // "X-RapidAPI-Key": '7711e82db6msh76601ef21b0daebp148c42jsnc81d1faf8341', //finish limit fro today
    // "X-RapidAPI-key" : 'e7cda0c1aamsh91988eae6c63b16p167c04jsn8eac106c2bd2', //finish limits for today
    // "X-RapidAPI-Key": "36335168d1msh3cfa65402914fa9p113887jsn49d678a1cefb", //not subscribed yet
    // "X-RapidAPI-Key": "ff1f56636fmsh3d4f84440b4214cp1fef14jsn9814f1848d2f", //finish limits for today
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data ;
}

export const FetchChannels = async (id) => {
  const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`,options);
  return data ; 
 }

export const FetchChannelVideos = async (id) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/search?part=snippet&channelId=${id}&order=date&maxResults=50`,
    options
  );
  return data;
};

export const FetchVideo = async (id) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`,
    options
  );
  return data;
};

export const FetchSuggestedVideo = async (id) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id,snippet&type=video`,
    options
  );
  return data;
};