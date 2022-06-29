import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="registerUserForm signIn centerChild items-center">
      <form action="" className="s-column sm:s-column-2 p-8 gap-4">
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" name="password" required />
        </div>
        <div className="col-span-2">
          <Link
            to="/forgotpassword"
            className="self-start text-sm hover:text-blue-500 capitalize"
          >
            forgot password
          </Link>
          <button className="box-full">sign in</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
