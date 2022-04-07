import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import { loadUsers } from "./redux/slices/usersSlice";

const App = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.selectUser.user);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadUsers(data.data));
      });
  }, []);

  return (
    <main className="md:w-9/12 w-11/12 mx-auto py-10">
      {userId ? (
        <UserDetails />
      ) : (
        <section className="flex items-center justify-center py-5">
          <div className="h-56 flex items-center justify-center w-96 px-4 py-3 rounded bg-blue-50">
            <h1 className="text-pink-500">Select a user to see the details</h1>
          </div>
        </section>
      )}
      <Users />
    </main>
  );
};

export default App;
