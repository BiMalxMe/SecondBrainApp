import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Backend_url } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate()

    async function signin() {
      try {
          const username = usernameRef.current?.value;
          const password = passwordRef.current?.value;
  
          if (!username || !password) {
              alert("Username and password are required!");
              return;
          }
  
          console.log("Signing in with:", username);
  
          const res = await axios.post(`${Backend_url}/api/v1/signin`, { username, password });
          const jwt = res.data?.token;
          localStorage.setItem("token",jwt)
          alert("Successfully signed in!");
          navigate("/dashboard")
      } catch (error: any) {
          console.log("signin failed:", error);
          alert( "Signin failed. Please try again.");
      }
  }
  
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded border min-w-48 p-8">
        <Input reference={usernameRef} placeholder="Username"/>
        <Input placeholder="Password" reference= {passwordRef}/>
        <div className="flex justify-center pt-4">
        <Button onclick={signin} size="md" variant="primary" text="Signin" fullwidth={true}/>
        </div>
      </div>
    </div>
  );
};
