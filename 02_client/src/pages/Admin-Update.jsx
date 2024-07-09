import { useState } from "react";
import { toast } from "react-toastify";

const AdminUpdate = async() => {
    const [user, setUser] = useState({  
        username: "",
        email: "",
        phone: "",
    }); 

    const id = "a";  // ******** NEED ID

    // Fetching initial information
    try{
        const response = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': "application.json",
            },
            body: JSON.stringify(user),
        });

        if(response.ok){
            setUser(user) ;
        }
        else{
            toast.error("Update is not possible") ;
        }
    }
    catch(error){
        console.log(`Frontend Error At Admin-Update.jsx : ${error}`) ;
    }

    // Updating information
    const handleSubmit = async(eve) => {
        eve.preventDefault() ;
        
    }
    


  return (
        <div>
            <h1>User Data</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username"
                id="username"
                value={user.username}    
                />

                <label htmlFor="email">Email</label>
                <input type="email" name="email"
                id="email"
                value={user.email}    
                />                

                <label htmlFor="password">Password</label>
                <input type="password" name="password"
                id="password"
                value={user.password}    
                />
            </form>
        </div>
    )
}

export default AdminUpdate