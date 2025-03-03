import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Backend_url } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate()

    async function signup() {
      try {
          const username = usernameRef.current?.value;
          const password = passwordRef.current?.value;
  
          if (!username || !password) {
              alert("Username and password are required!");
              return;
          }
  
          console.log("Signing up with:", username);
  
          await axios.post(`${Backend_url}/api/v1/signup`, { username, password });
  
          alert("Successfully signed up!");
          navigate("/signin")
      } catch (error: any) {
          console.log("Signup failed:", error);
          alert( "Signup failed. Please try again.");
      }
  }
  
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8">
        <Input reference={usernameRef} placeholder="Username"/>
        <Input placeholder="Password" reference= {passwordRef}/>
        <div className="flex justify-center pt-4">
        <Button onclick={signup} size="md" variant="primary" text="Signup" fullwidth={true}/>
        </div>
      </div>
    </div>
  );
};
