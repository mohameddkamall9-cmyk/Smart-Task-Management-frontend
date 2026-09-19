import Navbar from '../components/Navbar'
const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        alert('Login button clicked');
    }
    return (
        <>
        <Navbar />
        
        <div className="container flex flex-row">

            <div className="login-container bg-green-200 rounded-md m-2">
                <div className="login-header bg-amber-50 flex flex-col p-2 font-semibold text-2xl rounded-t-md">
                    <h1>Login</h1>
                </div>
                <div className="login-form l  p-2">
                <form onSubmit={handleLogin} >
                    <div className="input-one flex  flex-row gap-15 ">
                        <label htmlFor="email">Email:</label>
                        <input className=" border border-black-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500" type="email" id="email" name="email" />
                    </div>
                    <div className="input-two flex flex-row gap-8 ">
                        <label htmlFor="password">Password:</label>
                        <input className="w--full border border-black-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500" type="password" id="password" name="password" />
                    </div>
                    <div className="login-button flex flex-col justify-center ">
                        <button type="submit"  className="login-button justify-centerS bg-green-400 text-black font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-300 m-2 p-2 ">Login</button>
                    
                    </div>
                </form>
            </div>
            <div className="login-footer flex flex-col p-0.5 ">
                <p>Don't have an account? <a href="/register">Register</a></p>
                <p> did you forget you password you dumbass? <a href="/forgot-password">Reset</a></p>
            </div>
            </div>
            
            <div className="design border-amber-500 border-2 rounded-md m-2">
                <div className="design-one bg-green-400 rounded-md m-2"></div>

            </div>

        </div>
        </>
    )

}

export default Login