import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Register from "../../pages/Register";
interface LoginProps {
    isVisible: boolean;
    onClose: () => void;
  }
const Login=({ isVisible,onClose }:LoginProps)=>{

    const router=useRouter();
    function google(){
    router.push('/#')
    }
    if(!isVisible)return null;
    return(
<>
    
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center z-10">
            <div className="w-[550px] flex flex-col">
                <button className="text-white text-xt place-self-end" onClick={()=>
                onClose()}>X</button>
                <div className="bg-white p-2 rounded">
                    <div className=" mt-20 mb-20">
                    <h1 className="flex justify-center items-center font-bold text-2xl " >Welcome back!</h1>
                    <p className="flex justify-center items-center text-gray-500 text-sm">Continue with Google or enter your details</p>
                    <br />
                    <div className="flex justify-center items-center middle-div border-2 border-black mx-20 h-10"
                    onClick={google} tabIndex={0}
                    role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251">
                            </path></svg>&emsp;<p className="text-sm font-bold " >Login with Google</p></div>

                    <br /><br />
                    <div className="relative">
                    <hr className="border-1 border-gray-400 mx-10" />
                    <span className="bg-white px-4 font-bold text-gray-600 text-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        Or
                    </span>
                    </div>
                    <br />
                    <div className="flex justify-center flex-wrap items-center">
                    <div><input type="email" className="relative my-30 w-80 border-b-2 border-black" placeholder="Email"/></div>
                    <div><input type="email" className="relative my-30 w-80 border-b-2 border-black mt-8" placeholder="Password"/></div>
                    <div className="w-1/2 flex items-center mt-5">
                        <span className="ml-auto text-sm font-bold">Forgot password?</span>
                    </div>
                    </div>
                    <div>
                        <br />
                    <div className="flex justify-center items-center bg-black text-white mx-20 h-10"
                    tabIndex={0} role="button">
                    <p>Login</p>
                    </div>
                    <p className="flex justify-center items-center mt-5 text-sm font-bold ">Don't have a acount?
                    <Link href="/Register" >Sign up with free</Link>  </p>
                    </div>
                </div>
            </div>
        </div>
        /</div>
    </>
    )
}
export default Login;