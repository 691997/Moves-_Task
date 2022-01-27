import { useState } from "react";


const Name = () => {

    const [name , setName]= useState("");
    const [error , setError] = useState(null)

    const vaildation = (e) => {
        if(e.target.name === "email") {
            setName(e.target.value);
            if (e.target.value === "") {
                setError (null);
            }else if (e.target.value.match("[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}")){
                setError (" Vaild");
            }else {
                setError ("Not Vaild");
            }
        }
    }
    return (
        <div className="in">
            <label><p> Email </p></label>
            <input type="email" placeholder='Email' name="email" value={name} onChange={(e) => vaildation(e)} pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" required />
            <small> {error} </small>
        </div>
    )
}

export default Name;