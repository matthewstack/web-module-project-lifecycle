import axios from "axios";

const getUser = (search) => {
  return axios.get(`https://api.github.com/users/${search}`).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export default getUser;
