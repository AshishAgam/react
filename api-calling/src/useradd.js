import { useState } from "react"

function UserAdd() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    // validation for mobile number
    const [phoneErr, setPhoneErr]=useState();

    const handlePhone = (event) => {
        const value = event.target.value;
        setPhone(value);
         // Regex: only numbers and exactly 10 digits
        const phoneRegex = /^[0-9]{10}$/;
        if(!phoneRegex.test(value)) {
            setPhoneErr("Please Enter valid phone number")
        }else{
            setPhoneErr('')
        }
    };

    // create user api calling
    const createUser=async() => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url,{
            method:"POST",
            body:JSON.stringify({name,phone,age,email})
        });
        response = await response.json();
        if (response){
            alert("new user added")
        } 
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Add New User</h1>
            <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"/>
            <br/><br/>
            <input type="tel" maxLength="10" onChange={handlePhone} value={phone} placeholder="Enter Phone"/>
            <span style={{color:"red"}}>{phoneErr && phoneErr}</span>
            <br/><br/>
            <input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age"/>
            <br/><br/>
            <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"/>
            <br/><br/>
            <button disabled={phoneErr} onClick={createUser}>Add User</button>
        </div>
        
    )
}

export default UserAdd