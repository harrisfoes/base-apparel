import React from "react";
import arrow from "../assets/images/icon-arrow.svg";

function Hero() {
  return (
    <>
      <div className="m-auto flex flex-col items-center justify-center text-des-red">
        <div className="w-10/12 text-center">
          <h1 className="text-5xl uppercase mt-16 m-auto mb-6 tracking-[0.2em] font-light">
            We're{" "}
            <span className="text-neutral-grey font-bold"> coming soon </span>
          </h1>
          <p>
            Hellow fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up to date with announcements
            and our launch deals
          </p>
          <div className="my-6">
            <form>
              <div className="flex justify-around border rounded-full w-11/12 max-w-[350px] bg-neutral-grey">
                <input className="border m-2" placeholder="Email Address" />
                <button className="bg-soft-red p-4 rounded-full w-16 flex justify-center">
                  <img src={arrow} />{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
