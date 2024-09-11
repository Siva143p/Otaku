import React from "react";
import Filter from "./Assets/features/filter/Filter";
import CreateAccount from "./Assets/features/forms/CreateAccount";
import UserOptions from "./Assets/features/user/UserOptions";

function News({ AnimeData }) {
  return (
    <div className="bg-red-700  w-full h-screen">
      {/* News <NavbarTailwind />
      <Filter Animes={AnimeData} /> */}

      {/* <CreateAccount /> */}
      <UserOptions />
    </div>
  );
}

export default News;
