import React from "react";
import Filter from "./Assets/features/filter/Filter";
import CreateAccount from "./Assets/features/forms/CreateAccount";
import UserOptions from "./Assets/features/user/UserOptions";
import ForgetPassword from "./Assets/features/forms/ForgetPassword";
import Sucess from "./Assets/features/forms/Success";

function News({ AnimeData }) {
  return (
    <div className="bg-red-700  w-full h-screen">
      {/* News <NavbarTailwind />
      <Filter Animes={AnimeData} /> */}

      {/* <CreateAccount /> */}
      <UserOptions />
      {/* <ForgetPassword /> */}
      {/* <Success /> */}
    </div>
  );
}

export default News;
