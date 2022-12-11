import React,{useState} from 'react'
import "./Login.css";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState("");

  const [password, setPassword] = useState("");
  console.log(result);
  //a function to handle the changes of the input
  const handleChanges = (e, cb) => {
    cb(e.target.value);
  };
  //finction to allow the user to login
  const Login = async (body, event) => {
  
    await axios
      .post("http://localhost:5000/user/login", body)
      .then(async (res) => {
        
        await setResult(res.data);
        if(result.user){
          localStorage.setItem('token',result.user)
          window.location.href='/home'
        }
      });
  };
  return (
    <div
   
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div
                  className="col-lg-6"
                  style={{ backgroundColor: "#FFC000" }}
                >
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1670434638/mawi/Brown_Illustration_Traditional_Food_Logo-removebg-preview_v6tutd.png"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4
                        className="mt-1 ps-5 mb-5 pb-1"
                        style={{ color: "#715561" }}
                      >
                        Welcome to MAWI cuisine
                      </h4>
                    </div>

                    <form>
                     

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlor="form2Example11">
                          Username
                        </label>
                        <input
                          onChange={(e) => {
                            handleChanges(e, setUsername);
                          }}
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="User name or email address"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlor="form2Example22">
                          Password
                        </label>
                        <input
                          onChange={(e) => {
                            handleChanges(e, setPassword);
                          }}
                          type="password"
                          id="form2Example22"
                          className="form-control"
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                        onClick={()=>{
                          Login({username,password})
                        }}
                          className="btn btn-black btn-block bg-black fa-lg gradient-custom-2 mb-3"
                          type="button"
                          style={{color:"#ffffff"}}
                        >
                          Log in
                        </button>
                        <br />
                        
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="btn btn-black bg-success gradient-custom-2 "
                          style={{color:"#ffffff"}}
                          onClick={() => {
                            console.log("cliked");
                            window.location.href = "/signup";
                          }}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4" style={{ color: "#715561" }}>
                      We are more than just a web site
                    </h4>
                    <p className="small mb-0" style={{ color: "#715561" }}>
                      recipe is full of quantities, measurements, and
                      instructions, but it’s not just a formula. Often, it’s a
                      memory—of that week you were in Florence, or of your mom
                      baking cookies, or of your homeland across the world.
                      Which is to say: Often, it’s personal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Login