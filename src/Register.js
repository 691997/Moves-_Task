import { useState } from "react";
import Name from "./name";

const Register = (props) => {

    const [user_name , SetUser] = useState("")       
    const [error , SetUserError] = useState(null)       
    const [pass , setPass]= useState("");
    const [pass_error , setPassError] = useState(null)
    const [rpass , setRPass]= useState("");
    const [rpass_error , setRPassError] = useState(null)
        const space = (even) => { 
            SetUser(even.target.value)
            if (even.target.name === "uname"){
                if (even.target.value.includes(" ")) {
                    SetUserError("Not Vaild ..User Name Shouldn't have a Space ")
                }else {
                    SetUserError (null)
                }
            }
        }

    const vaildation = (e) => {
        console.log(document.getElementById("pass_1").value)
        if(e.target.name === "pass") {
            setPass(e.target.value);
            if (e.target.value === "") {
                setPassError (null);
            }else if ( e.target.value.length >= 8 && e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$")  ){
                setPassError (" Vaild");
            }else {
                setPassError ("Not Vaild");
            }
        }
        if(e.target.name === "rpass") {
            setRPass(e.target.value);
            if (e.target.value === "") {
                setRPassError (null);
            }else if ( e.target.value.length >= 8 && e.target.value.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$") ){
                setRPassError (" Vaild");
            }else if (document.getElementById("pass_1").value === document.getElementById("pass_2").value) {
                setRPassError (" Vaild");
            } else {
                setRPassError ("Not the Same Password");
            }
    }
}

    return (
        <form className="register" >
            <div className="in">
                <h2>Register</h2>
                <label><p> Name </p></label>
                <input type="text" placeholder='Name' name="name" required />
            </div>
            <Name/>
            <div className="in">
                <label><p> User Name </p></label>
                <input type="text" placeholder='User Name' value={user_name} name="uname" required onChange={(even) => space(even)} />
                <small>{error}</small>
            </div>

            <div className="in">
                <label><p> password </p></label>
                <input id="pass_1" type="password" placeholder='password' name="pass" value={pass} onChange={(e) => vaildation(e)} required  />
                <small> {pass_error} </small>
            </div>

            <div className="in">
            <label><p> Confirm password </p></label>
            <input id="pass_2" type="password" placeholder='password' name="rpass" value={rpass} onChange={(e) => vaildation(e)} required  />
            <small> {rpass_error} </small>
        </div>
            <button className="login"> Register </button>
        </form>
    )
}

export default Register;