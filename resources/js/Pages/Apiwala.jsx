import React from "react";
import { Inertia } from "@inertiajs/inertia";
function Apiwala(){
    const apihit1=()=>{
        Inertia.visit("/api/team_details");
    }
    const payout=()=>{
        Inertia.visit("api/payout");
    }
    return (
    <div className="mt-4 ml-8">
        <button onClick={apihit1} className="bg-green-600 px-4 py-2 rounded-full">Team details</button>
        <button onClick={payout} className="bg-green-600 px-4 py-2 rounded-full ml-8">Payout</button>
    </div>
    );
}
export default Apiwala;