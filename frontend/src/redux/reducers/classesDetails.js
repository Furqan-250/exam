import { ActionTypes } from "../constants/action-types";

const initialState = {
  list: [],
  retrived: false,
};
export const getAllClassesReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.GET_ALL_CLASSES:
      return {
        ...state,
        list: payload.classeslist,
        retrived: true,
      };
    default:
      return state;
  }
};
