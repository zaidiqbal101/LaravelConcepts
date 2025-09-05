import React from "react";
import {Inertia} from "@inertiajs/inertia";
function Page2(){
    const Home =()=>{
        Inertia.visit('/');
    }
    return(
        <div className="flex justify-center  mt-8">
    <h1 className="text-blue-600 mt-4 ml-4 ">C# PAGE2</h1>
    <div className="flex justify-center  items-center h-screen mt-8">
    <button onClick={Home}>Page2</button>
     </div>
        </div>
    )
}
export default Page2;