import React from "react";
import { usePage } from "@inertiajs/react";

export default function ADS() {
    const { data } = usePage().props; // data passed from Laravel controller

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
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{item.id}</td>
                                <td className="border px-4 py-2">{item.stock_name}</td>
                                <td className="border px-4 py-2">{item.open_price}</td>
                                <td className="border px-4 py-2">{item.created_at}</td>
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
