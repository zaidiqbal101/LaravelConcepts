import React from "react";
import { Inertia } from "@inertiajs/inertia"; 
import { Link } from "@inertiajs/react";


function Page1() {
  return (
    <div className=" flex justify-center items-center h-screen">
    <h1 className="font-serif text-4xl justify-center">C#</h1>
    <Link href="/ADS " className=" font-serif underline text-green-600 ml-4 ">ADS</Link>
    <Link href="/UserList " className=" font-serif underline text-green-600 ml-4 ">User list</Link>
  </div>
  );
}

export default Page1;
