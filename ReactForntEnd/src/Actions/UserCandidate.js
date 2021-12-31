import { type } from "@testing-library/user-event/dist/type";
import api from "./Api";

export const ACTION_TYPES = {
  FETCH_ALL: "FETCH_ALL",
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const formatdata = (data) => ({
  ...data,
  age: parseInt(data.age ? data.age : 0),
});

export const fetchall = () => (dispatch) => {
  api
    .UserApi()
    .fetchall()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const create = (data, onsucess) => (dispatch) => {
  data = formatdata(data);
  api
    .UserApi()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onsucess();
    })
    .catch((err) => console.log(err));
};

export const update = (id, data, onsucess) => (dispatch) => {
  data = formatdata(data);
  api
    .UserApi()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data },
      });
      onsucess();
    })
    .catch((err) => console.log(err));
};

export const Delete = (id, onsucess) => (dispatch) => {
  api
    .UserApi()
    .delete()
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onsucess();
    })
    .catch((err) => console.log(err));
};
