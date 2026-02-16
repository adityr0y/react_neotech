import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section id="users" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Members
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {users.map((u) => (
            <div key={u.id} className="p-6 rounded-2xl shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900">{u.name}</h3>
              <p className="text-gray-600 text-sm">{u.email}</p>
              <p className="text-gray-500 text-sm">{u.company?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}