import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/slices/userSlice";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const userId = useSelector((state) => state.selectUser.user);
  const dispatch = useDispatch();

  // insert the selected id to the redux
  const selectUserHandler = (id) => {
    dispatch(selectUser(id));
  };

  // previous handler
  const previousHandler = () => {
    if (userId > 1) {
      dispatch(selectUser(userId - 1));
    }
  };

  // next handler
  const nextHandler = () => {
    if (userId === null || userId > 0) {
      dispatch(selectUser(userId + 1));
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        {users ? (
          <div className="flex items-center justify-center">
            <button
              onClick={previousHandler}
              className="px-2 text-2xl font-bold py-1 bg-blue-50 hover:text-white rounded mx-1 hover:bg-pink-500"
            >
              {`<`}
            </button>
            {users?.map((user) => {
              return (
                <button
                  key={user.id}
                  className={
                    user.id === userId
                      ? "px-3 py-2 bg-pink-500 rounded mx-1 text-white"
                      : "px-3 py-2 bg-blue-50 hover:text-white rounded mx-1 hover:bg-pink-500"
                  }
                  onClick={() => selectUserHandler(user.id)}
                >
                  {user.id}
                </button>
              );
            })}
            <button
              onClick={nextHandler}
              className="px-2 text-2xl font-bold py-1 bg-blue-50 hover:text-white rounded mx-1 hover:bg-pink-500"
            >
              {`>`}
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-center text-red-500">Users loading</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
