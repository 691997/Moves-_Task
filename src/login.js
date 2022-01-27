import Name from "./name";
import { useState } from "react";


const Login = () => { 
    
    const [pass , setPass]= useState("");
    const [pass_error , setPassError] = useState(null)
    
    const vaildation = (e) => {
        console.log(document.getElementById("d").value)
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
    }
    const show = () => {
        const ele = document.getElementById("d")
        if (ele.type === "password") {
            return ele.type = "text" ;
        } else {
            return  ele.type = "password" ;
        }
    }
    return (
        <form>
            <div className="inputs">
                <h2>Login</h2>
                <Name />
            <div className="in">
                 <label><p> password </p></label>
                 <input id="d" type="password" placeholder='password' name="pass" value={pass} onChange={(e) => vaildation(e)} required  />
                 <small> {pass_error} </small>
                 <div className="check">
                     <input type="checkbox" onClick={() => show()}  />
                     <label>Show Password</label> 
                 </div>
             </div>
                <button className="login"> Login</button>
            </div>            
        </form>
    )
}


export default Login;