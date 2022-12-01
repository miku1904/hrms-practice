import axios from "axios";

  export const Login_User = (data)  =>{
    return async (dispatch)=>{
        try{
            await axios
              .post(
                `${process.env.REACT_APP_BASE_URL}/api/auth/signin`,
                // "http://192.168.1.7:1010/api/auth/signin",
                data
              )
              .then((res) =>{
                console.log(res.data.isError);
              if(res.data.isError === false){
                dispatch({ type: "USER", payload: res.data })
                alert("Login sucssfull")
              }else{
                alert(res.data.message)
              }
            });

        }catch(err){
            console.log(err)
        }
    }
  };




