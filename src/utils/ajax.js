import axios from "axios";
import store from "../store";
export async function get(url, params) {
  const token = store?.getState()?.loggedInUser?.userInfo?.token;
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  console.log(params);
  if (params !== undefined) url = url + `/${params}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}
export async function post(url, params) {
  const token = store?.getState()?.loggedInUser?.userInfo?.token;
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  return new Promise((resolve, reject) => {
    axios
      .post(url, params, config)
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
}
