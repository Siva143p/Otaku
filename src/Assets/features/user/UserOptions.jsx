import React from "react";

function UserOptions() {
  return (
    <div
      className="w-full bg-gradient-to-bl absolute z-40 top-16 text-white border-y-amber-400 border-2"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div
        className="w-96 bg-slate-900 absolute right-0"
        style={{ height: "34.4rem" }}
      >
        <div className="overflow-y-scroll h-full">
          <section className="bg-purple-500">
            <div>name</div>
            <div>free trail</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default UserOptions;
