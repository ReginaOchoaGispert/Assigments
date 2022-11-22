import React, { useState } from 'react';
import axios from "axios";

function Login(props) {
  var [registerInfo, setRegisterInfo] = useState({ 
    userName: "", 
    password: "",
    name: "",
    lname: "",
  });
  // var [userName, setUserName] = useState("");
  // var [password, setPassword] = useState("");
  var [errorMsg, setErrorMsg] = useState("");
  function handleUpdate(e) { //e is my event
    const { value, name } = e.target; // desempaca
    setRegisterInfo((prevValue)=>{
      if (name === "Username") {
        return { 
          ...prevValue,
          userName: value, //porque ya lo desempacaste
          // password: prevValue.password,
          // name: prevValue.name,
          // lname: prevValue.lname,
        };
      } else {
        return { 
          // userName: prevValue.userName, 
          ...prevValue,
          password: value, 
          // name: prevValue.name, 
          // lname: prevValue.lname,
        };
      }
    });
  }
  // function recordUsername(e) {
  //   setRegisterInfo((prevValue)=>{ 
  //     return { 
  //       userName: e.target.value, 
  //       password: prevValue.password,
  //       name: prevValue.name,
  //       lname: prevValue.lname,
  //     };
  //   });
  //   // setUserName(e.target.value);
  //   // console.log(userName); //to check it works in inspeccionar
  // }
  // function recordPassword(e) {
  //   setRegisterInfo((prevValue)=>{ 
  //     return { userName: prevValue.userName, password: e.target.value, name: prevValue.name, lname: prevValue.lname };
  //   });
  //   // setPassword(e.target.value);
  //   // console.log(password);
  // }
  function processLogin(e/*userName*/) { //the 'e' represents the event of the clic
    e.preventDefault();
    var userName = registerInfo.userName;
    var userPass = registerInfo.password;
    axios
      .post("/login",{ user: userName, pass: userPass }) //Im here creating a form, for the security
      .then((res) => {
        var data = res.data; //desempaca
        console.log(data);
        if(!data.hasOwnProperty("error")) {
          console.log("Success");
          registerInfo.name = data.name;
          registerInfo.lname = data.lname;
          props.handler(registerInfo);
        } else {
          setErrorMsg(data.message);
        }
      }).catch(err => {
        console.error(err.error);
      });
    // axios
    // .get("/login/"+userName+"/"+userPass).then((res) => {
    //   var data = res.data; //desempaca
    //   console.log(data);
    //   if(!data.hasOwnProperty("error")) {
    //     console.log("Success");
    //     registerInfo.name = data.name;
    //     registerInfo.lname = data.lname;
    //     props.handler(registerInfo);
    //   } else {
    //     setErrorMsg(data.message);
    //   }
    // }).catch(err => {
    //   console.error(err.error);
    // });
  }

    // if(userName === "admin" && password === "password") {
  //   if (
  //     registerInfo.userName === "admin" && 
  //     registerInfo.password === "password"
  //   ) {
  //     registerInfo.name = "Gabriel";
  //     registerInfo.lname = "Castillo";
  //     // props.handler();
  //     props.handler(registerInfo);
  //   }else {
  //     setErrorMsg("Wrong login");
  //   }
  // }
  return (
      <form>
          <input
            name = "Username"
            type="text"
            placeholder="Username" 
            // onChange={recordUsername}
            onChange={handleUpdate}
          />
          <input 
            name = "Password"
            type="password"
            placeholder="Password" 
            // onChange={recordPassword}
            onChange={handleUpdate}
          />
          <button 
            type="submit" 
            // onClick={props.handler}
            onClick={processLogin}
          >
            Log In
          </button>
          {errorMsg}
      </form>
  );
}

export default Login;