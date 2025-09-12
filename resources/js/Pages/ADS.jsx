import React from "react";
import { usePage,router } from "@inertiajs/react";

export default function ADS() {
    const { data } = usePage().props; // data passed from Laravel controller

    const handleDelete=(id)=>{
        if(confirm('Are you sure')){
            router.delete(`/ADS/${id}`);
        }
    }
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">ADS Data List</h1>

            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Stock Name</th>
                        <th className="border px-4 py-2">Open Price</th>
                        <th className="border px-4 py-2">Close Price</th>
                        <th className="border px-4 py-2">High Price</th>  
                        <th className="border px-4 py-2">Low Price</th>  
                        <th className="border px-4 py-2">Created At</th>
                        <th className="border px-4 py-2">Action</th>                    
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{item.id}</td>
                                <td className="border px-4 py-2">{item.stock_name}</td>
                                <td className="border px-4 py-2">{item.open}</td>
                                <td className="border px-4 py-2">{item.close}</td>
                                <td className="border px-4 py-2">{item.High}</td>
                                <td className="border px-4 py-2">{item.Low}</td>
                                <td className="border px-4 py-2">{item.created_at}</td><td>
                                <button onClick={() => handleDelete(item.id)} className="bg-red-200 px-2 py-2 rounded hover:bg-red-500">Delete</button>
                            </td>

                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="4"
                                className="text-center border px-4 py-2"
                            >
                                No data found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
