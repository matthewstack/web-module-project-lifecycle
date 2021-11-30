import axios from "axios";

const getFollowers = (search) => {
  return axios
    .get(`https://api.github.com/users/${search}/followers`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export default getFollowers;
