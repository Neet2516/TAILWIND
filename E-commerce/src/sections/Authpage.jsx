import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name , setName] =   useState("");
    const [pnum , setPnum] = useState();
    const[email,setEmail]= useState("");
    const [pass,setPass]=useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-800 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>

        <form className="space-y-5">
          {!isLogin && (
            <>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none" onChange={(e)=>{
                    setName(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your name" maxLength="10" pattern="[0-9]{10}"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none" 
                onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "")}}
      onChange={(e)=>{
                    setPnum(e.target.value) ;
                    
                }}
              />
            </div>
            </>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              onChange={(e)=>{
                if (!isLogin) {
      setEmail(e.target.value);
    }
              }}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
               onChange={(e)=>{
                if (!isLogin) {
      setPass(e.target.value);
                }}
    }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition duration-300"
            onClick={()=>{
                const user = {NAME : name , PHONE : pnum , EMAIL : email ,PASSWORD :pass};
                localStorage.setItem("USER" , JSON.stringify(user));
                
                console.log(name ,  pnum , email , pass);}}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}
          <button
            onClick={() => {setIsLogin(!isLogin);
                
            }}
            className="text-purple-600 font-semibold ml-1 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
