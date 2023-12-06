import { useState } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import errorImg from "../assets/images/icon-error.svg";

const ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

function Hero() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const handleInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //todo: check event.target.value if it is a valid email
    //if not raise error
    //if fine then do nothing
    if (!ValidateEmail(email)) {
      setIsError(true);
    } else {
      setIsError(false);
      setEmail("");
    }
  };

  const style = (error) => {
    if (error) {
      return {
        borderColor: "red",
      };
    }
  };

  return (
    <>
      <div className="m-auto flex flex-col items-center justify-center text-des-red max-w-[540px] md:justify-start">
        <div className="w-10/12 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl uppercase mt-16 m-auto mb-8 tracking-[0.2em] font-light">
            We're{" "}
            <span className="text-neutral-grey font-bold"> coming soon </span>
          </h1>
          <p className="lg:text-lg">
            Hellow fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up to date with announcements
            and our launch deals
          </p>
          <div className="my-8 m-auto lg:my-12">
            <form onSubmit={handleSubmit}>
              <div className="m-auto flex justify-around rounded-full w-11/12 max-w-5/6 lg:w-full relative">
                <input
                  className="px-6 py-3 w-full border border-opacity-50 outline-des-red rounded-full placeholder-des-red placeholder-opacity-50"
                  placeholder="Email Address"
                  onChange={handleInput}
                  value={email}
                  style={style(isError)}
                />
                <button className="bg-soft-red py-4 h-[50px] rounded-full w-20 flex justify-center absolute right-0 bg-gradient-to-br from-f-2 to-t-2 drop-shadow-softored hover:opacity-75">
                  <img src={arrow} />
                </button>
                {isError && (
                  <>
                    <p className="absolute top-14 text-sm left-6 text-soft-red">
                      Please provide an email
                    </p>
                    <img className="absolute top-3 right-24" src={errorImg} />
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
