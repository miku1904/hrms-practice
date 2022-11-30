import {USER} from "../actiontype/UserActionType"
import axios from "axios";


// export function Login_User(data){
  
//   }


  export const Login_User = (data)  =>{
    // console.log(data)
    const data1 = {
      username: data.userData.username,
      password: data.userData.password,
    };
    return async (dispatch)=>{
        let result ={}
        try{
            result = await axios.post(
              `${process.env.REACT_APP_BASE_URL}/api/auth/signin`,
              // "http://192.168.1.7:1010/api/auth/signin",
              data1
            );
            if(result){
                dispatch({type:'USER', payload: result.data})
            }


        }catch(err){
            console.log(err)
        }
    }

  };





//   try {
//      let data = JSON.stringify({
      
//      });

//      let config = {
//        method: "post",
//        url: `${process.env.REACT_APP_BASE_URL}/api/auth/signin`,
//        headers: {
//          "Content-Type": "application/json",
//        },
//        data: data,
//      };
//      axios(config).then(function (response) {
//        console.log(response)
//        ({ type: "USER", payload: response.data });
//      }) 
//   } catch (error) {
//     console.log(error)
//   }
  
// }

// export const addArticle = (data) => (dispatch) => {
//   dispatch({
//     type: SHOP_LOAD_SUCCESS,
//     payload: data,
//   });
// };

//  return (dispatch) => {
//    axios
//      .post(`${process.env.REACT_APP_BASE_URL}/user/userRegister`)
//      .then((response) => {
//        console.log(response);
//        dispatch({ type: "USER", payload: response.data });
//      })
//      .catch((err) => console.log(err));
//  };




// let data1 = JSON.stringify({
//    username: data.username,
//    password: data.password,
//  });
// console.log(data1)
//  let config = {
//    method: "post",
//    url: `${process.env.REACT_APP_BASE_URL}/api/auth/signin`,
//    headers: {
//      "Content-Type": "application/json",
//    },
//    data: data1,
//  };
//  axios(config)
//    .then(function (response) {
//     console.log(response);
//     dispatch({ type: USER, payload: response.data });
    
//    })
//    .catch(function (error) {
//      console.log(error);
//    });