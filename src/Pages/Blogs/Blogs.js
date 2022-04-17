import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="my-10">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item bg-white mx-auto border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button
              className="
              font-bold
              text-xl
              md:text-2xl
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Difference between Authorization and Authentication
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="">
                      <strong className="">Authentication</strong> <br /> <br />
                      <div className="text-left">
                        *. Authentication verifies who the user is. <br />

                        *. Authentication is visible to and partially changeable by the user. <br />

                        *. Authentication is the first step of a good identity and access management process. <br />
                      </div>
                  </div>
                  <div className="">
                      <strong className="">Authorization</strong> <br /> <br />
                      <div className="text-left">
                        *. Authorization always takes place after authentication. <br />

                        *. Authorization determines what resources a user can access. <br />

                        *. Authorization isn’t visible to or changeable by the user. <br />
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingTwo">
            <button
              className="
              font-bold
              text-xl
              md:text-2xl
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Why are you using firebase? What other options do you have to implement authentication?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>Why we Use Firebase</strong> <br /> <br />
              Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br /> <br />
              <strong>What other options do you have to implement authentication?</strong> <br /> <br />
              Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="
              font-bold
              text-xl
              md:text-2xl
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What other services does firebase provide other than authentication.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body py-4 px-5">
              <strong>What other services does firebase provide other than authentication.</strong> <br /> <br />

              Firebase Provide many more feature without authentication. Firebase Provide Hosting, Realtime Database, Remote Config, Firebase ML, Cloud Function, Cloud Messaging, Could Storage etc. Firebase is a Product of Google LLC. its too much sequre of Other Authetication System.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
