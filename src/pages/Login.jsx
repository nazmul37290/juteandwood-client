import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { loginWithEmailandPassword } = useContext(AuthContext);
  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailandPassword(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
        Swal.fire({
          title: "Logged In Successfully",
          //   text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Okay!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="min-h-screen bg-[#ded5c7] dark:bg-neutral-700 ">
      {/* <div
        className={`absolute left-[50%] top-[50%]  flex items-center justify-center ${
          loading ? "block" : "hidden"
        }`}
      >
        <span className="loading loading-spinner loading-lg"></span>
      </div> */}
      <div className="container mx-auto w-1/2 h-full p-10">
        <div className=" flex w-full h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 w-full  ">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center ">
                      {/* <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      /> */}
                      <h4 className="mb-12 mt-1 pb-1 text-2xl font-bold">
                        Jute&Wood
                      </h4>
                    </div>

                    <form onSubmit={handleEmailLogin}>
                      <p className="mb-4 text-center font-bold text-2xl">
                        Login
                      </p>

                      {/* email input */}
                      <label className="font-semibold">Your Email</label>
                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="email"
                        name="email"
                        id=""
                        required
                        placeholder="enter your email"
                      />
                      <br />
                      {/* <!--Password input--> */}
                      <label className="font-semibold">Your Password</label>
                      <br />
                      <div className="flex items-center relative">
                        <input
                          className="p-2 border w-full mb-2 rounded-md"
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id=""
                          required
                          placeholder="enter your password"
                        />
                        <div className="absolute right-3 mb-2 text-lg">
                          {showPassword ? (
                            <FaEyeSlash
                              onClick={() => setShowPassword(false)}
                            ></FaEyeSlash>
                          ) : (
                            <FaEye
                              onClick={() => setShowPassword(true)}
                            ></FaEye>
                          )}
                        </div>
                      </div>
                      <br />
                      {/* show error messsage */}
                      <p className="text-red-500">{error}</p>

                      {/* <!--Submit button--> */}

                      <input
                        type="submit"
                        className="btn mt-4 font-bold text-lg w-full bg-[#ad9773] text-white"
                        value="Login"
                      />
                      {/* <!--Forgot password link--> */}

                      <a href="#!">Forgot password?</a>

                      <br />
                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Do not Have an account?</p>
                        <Link to={"/register"}>
                          <button
                            type="button"
                            className="rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase "
                          >
                            Register
                          </button>
                        </Link>
                      </div>
                      <div>
                        <p className="text-center font-bold">OR</p>
                        <div className="flex flex-col gap-2">
                          <button
                            type="button"
                            className="font-bold flex items-center justify-center gap-2 text-base  mx-auto w-1/2 rounded border-2 border-danger px-6 pb-[6px] pt-2  "
                          >
                            <FcGoogle className="text-xl" /> GOOGLE
                          </button>
                          <button
                            type="button"
                            className="flex items-center justify-center gap-2 mx-auto w-1/2 font-bold rounded border-2 border-danger px-6 pb-[6px] pt-2 text-base  uppercase"
                          >
                            <FaGithub className="text-xl"></FaGithub> GITHUB
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
