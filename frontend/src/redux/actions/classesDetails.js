// import axios from "axios";
// import apis from "../../services/Apis";
// import { ActionTypes } from "../constants/action-types";
// import Auth from "../../services/Auth";

// export const getClassesDetails = () => {
//   return async (dispatch) => {
//     axios
//       .get(apis.BASE + apis.GET_CLASSES_DETAILS, {
//         headers: {
//           Authorization: `Bearer ${Auth.retriveToken()}`,
//         },
//       })
//       .then((response) => {
//         if (response.data.success) {
//           dispatch({
//             type: ActionTypes.GET_ALL_CLASSES,
//             payload: {
//               classeslist: response.data.classes,
//             },
//           });
//         }
//       });
//   };
// };

// export const ClassesToggleStatus = (status, id, callback) => {
//   var apisuffix = status ? apis.REMOVE_CLASSES : apis.UNBLOCK_CLASSES;
//   return async () => {
//     await axios
//       .post(
//         apis.BASE + apisuffix,
//         {
//           _id: id,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${Auth.retriveToken()}`,
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data.success) {
//           console.log(response.data);
//           callback();
//         } else {
//           console.log(response.data);
//         }
//       });
//   };
// };

import axios from "axios";
import apis from "../../services/Apis";
import { ActionTypes } from "../constants/action-types";
import Auth from "../../services/Auth";

export const getClassesDetails = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(apis.BASE + apis.GET_CLASSES_DETAILS, {
        headers: {
          Authorization: `Bearer ${Auth.retriveToken()}`,
        },
      });

      if (response.data.success) {
        dispatch({
          type: ActionTypes.GET_ALL_CLASSES,
          payload: {
            classeslist: response.data.classes,
          },
        });
        // console.log("Classes details fetched:", response.data.classes);
      } else {
        console.log("Failed to fetch classes details:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching classes details:", error);
    }
  };
};

export const ClassesToggleStatus = (status, id, callback) => {
  var apisuffix = status ? apis.REMOVE_CLASSES : apis.UNBLOCK_CLASSES;
  return async () => {
    try {
      const response = await axios.post(
        apis.BASE + apisuffix,
        {
          _id: id,
        },
        {
          headers: {
            Authorization: `Bearer ${Auth.retriveToken()}`,
          },
        }
      );

      console.log("Toggle status response:", response.data);

      if (response.data.success) {
        callback();
      } else {
        console.log("Failed to toggle status:", response.data.message);
      }
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  };
};
