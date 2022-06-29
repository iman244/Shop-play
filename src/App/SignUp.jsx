const SignUp = () => {
  return (
    <div className="registerUserForm signUp centerChild items-center">
      <form action="" className="s-column sm:s-column-2 p-8 gap-4">
        <div>
          <label htmlFor="full name">full name</label>
          <input type="text" name="full name" required />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" name="email" required />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="text" name="password" required />
        </div>
        <button className="my-4">sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
