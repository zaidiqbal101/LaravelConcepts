import React from "react";
import { Inertia } from "@inertiajs/inertia"; 
import { Link } from "@inertiajs/react";


function Page1() {
  return (
    <div className=" flex justify-center items-center h-screen">
    <h1 className="font-serif text-4xl justify-center">C#</h1>
    <Link href="/page2" className=" font-serif underline text-green-600 mt-24">Page2</Link>
    <Link href="/UserList " className=" font-serif underline text-green-600 ">User list</Link>
  </div>
  );
}

export default Page1;
