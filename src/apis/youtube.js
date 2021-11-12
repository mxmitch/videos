import axios from "axios";

const KEY = "AIzaSyDPUWBzoL76ZaXN2BhWfQDqpwM41jaW9FU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
