import React from "react";

const Header = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span class="ml-3 text-5xl underline">
              Interview Creation Portal
            </span>
          </a>
          <nav class="md:ml-auto mr-10 flex flex-wrap items-center text-base justify-center">
            <a href="/" class="text-xl mr-5 hover:text-gray-900">
              Create
            </a>
            <a
              href="/update-interview"
              class="text-xl mr-5 hover:text-gray-900"
            >
              Update
            </a>
            <a href="/view-interview" class="text-xl mr-5 hover:text-gray-900">
              View
            </a>
          </nav>
        </div>
      </header>{" "}
    </div>
  );
};
export default Header;
