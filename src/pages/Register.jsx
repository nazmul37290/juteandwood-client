import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="min-h-screen bg-neutral-200 dark:bg-neutral-700">
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

                    <form>
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
                        placeholder="enter your email"
                      />
                      <br />
                      {/* <!--Password input--> */}
                      <label className="font-semibold">Your Password</label>
                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="password"
                        name="password"
                        id=""
                        placeholder="enter your password"
                      />
                      <br />
                      {/* <!--Submit button--> */}

                      <input
                        type="submit"
                        className="btn mt-4 font-bold text-lg w-full bg-[#ad9773] text-white"
                        value="Register"
                      />
                      {/* <!--Forgot password link--> */}

                      <a href="#!">Forgot password?</a>

                      <br />
                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
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
