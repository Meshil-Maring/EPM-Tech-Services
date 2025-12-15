const Signup = () => {
  return (
    <form>
      <label>User Name</label>
      <input type="text" name="name" placeholder="Enter your name"></input>

      <label>Email</label>
      <input type="email" name="email" placeholder="Enter your email"></input>

      <label>Password</label>
      <input
        type="text"
        name="password"
        placeholder="Enter your password"
      ></input>

      <label>Confirm Password</label>
      <input type="text" name="confirm-password"></input>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
