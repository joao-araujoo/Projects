export default function Register() {
  return (
    <>
      <main className="container">
        <div className="form-container">
          <h1>Register</h1>
          <form>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" style={{marginBottom: "30px"}} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" style={{marginBottom: "30px"}} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" style={{marginBottom: "30px"}} />
            <button type="submit" style={{ marginTop: "20px" }}>Register</button>
          </form>
        </div>
      </main>
    </>
  )
}
