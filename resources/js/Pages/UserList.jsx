  import React from "react";
  import { Inertia } from "@inertiajs/inertia";
  import { usePage, router } from "@inertiajs/react";

  function UserList() {
    const { users } = usePage().props;

    const handleDelete = (id) => {
      if (confirm("Are you sure you want to delete this user?")) {
    router.delete(`/users/${id}`);
      }
    };
      const handleVisit=()=>{
        Inertia.visit('/');
      }

    return (
      <div className="p-6">
        <h1 className="text-xl font-serif mb-4">User List Data</h1>
          <button onClick={handleVisit} className="font-serif rounded-lg bg-green-400 px-4 py-2">Home</button>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Created At</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center border border-gray-300 px-4 py-2"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }

  export default UserList;
