import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://foodapp-server-1-a24t.onrender.com/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;