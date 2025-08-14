import { useActionState } from "react"


function Validation() {

    const handleLogin=(prevData,formData)=>{
        let name = formData.get('name')
        let password = formData.get('password')
        let usernameRegex = /^[A-Za-z ]+$/;
        
        if(!name || !usernameRegex.test(name)){
            return {error: "Please Enter Valid Username", name,password}
        }else if(password.length <= 4 || password.length >= 8){
            return {error: "Password should be greater than 4 and less that 8 character", name,password}
        }else{
            return {message: "Login Successfully", name,password}
        }
        
    }
    const [data,action,pending] = useActionState(handleLogin);
    
    return (
        <div>
            <h1>Validation with useActionState in React</h1>
            {
                data?.message && <span style={{color:"green"}}> {data?.message}</span>
            }
            {
                data?.error && <span style={{color:"red"}}>{data?.error}</span>
            }
            <form action={action}>
                <input defaultValue={data?.name} type="text" name="name" placeholder="Enter Username" />
                <br /><br />
                <input defaultValue={data?.password} type="text" name="password" placeholder="Enter Password" />
                <br /><br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Validation