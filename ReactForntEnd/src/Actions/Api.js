import axios from "axios";

const baseUrl = "http://localhost:60671/api/";

console.log(baseUrl);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  UserApi(url = baseUrl + "DCandidate/") {
    return {
      fetchall: () => axios.get(url),
      fetchbyid: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updateRecord) => axios.put(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
};
