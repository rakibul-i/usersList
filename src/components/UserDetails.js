import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const userId = useSelector((state) => state.selectUser.user);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (() => {
      setUser(null);
      fetch(`https://reqres.in/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => setUser(data.data));
    })();
  }, [userId]);
  return (
    <section className="flex items-center justify-center py-5">
      {user ? (
        <div className="h-56 w-96 px-4 py-3 rounded bg-blue-50">
          {/* first name and last name */}
          <h4 className="text-center text-md font-semibold">
            {user?.first_name} {user?.last_name}
          </h4>
          <h4 className="text-center pt-2">{user?.email}</h4>
          {/* user image */}
          <div className="flex items-center justify-center py-3">
            <img src={user?.avatar} className=" rounded-full" alt="" />
          </div>
        </div>
      ) : (
        <div className="h-56 flex items-center justify-center w-96 px-4 py-3 rounded bg-blue-50">
          <h1 className="text-pink-500">Loading...</h1>
        </div>
      )}
    </section>
  );
};

export default UserDetails;
