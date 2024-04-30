import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const { registerWithEmail, logOut, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleEmailRegister = (e) => {
    e.preventDefault();

    setError("");
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("password must be more than 6 characters");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("must have a small letter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("must have a capital letter");
      return;
    }
    setLoading(true);
    registerWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photoURL)
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
        logOut()
          .then(() => {
            setLoading(false);
            navigate("/login");
            Swal.fire({
              title: "Registered Successfully",
              //   text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "Okay!",
            });
            form.reset();
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  return (
    <section className="h-auto md:min-h-screen bg-[#ded5c7] dark:bg-neutral-700 ">
      <div
        className={`absolute left-[50%] top-[50%]  flex items-center justify-center ${
          loading ? "block" : "hidden"
        }`}
      >
        <span className="loading loading-spinner loading-lg"></span>
      </div>
      <div className="container mx-auto w-full lg:w-1/2 h-full p-2 md:p-10">
        <div className=" flex w-full h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="">
                {/* <!-- Left column container--> */}
                <div className="px-4 py-4  md:py-4 md:px-0 w-full  ">
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

                    <form onSubmit={handleEmailRegister}>
                      <p className="mb-4 text-center font-bold text-xl">
                        Please register an account
                      </p>
                      {/* <!--Username input--> */}
                      <label className="font-semibold">Your Name</label>

                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="name"
                        id=""
                        required
                        placeholder="enter your name"
                      />
                      <br />
                      {/* photo url input */}
                      <label className="font-semibold">Your PhotoURL</label>
                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="photoURL"
                        id=""
                        required
                        placeholder="enter your photoURL"
                      />
                      <br />
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
                        value="Register"
                      />

                      <br />
                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between mt-2 pb-6">
                        <p className="mb-0 mr-2">Have an account?</p>
                        <Link to={"/login"}>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Login
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
