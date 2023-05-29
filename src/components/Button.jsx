import React from "react"

function Button({selectedBreed, searchByBreed}) {
    return <button
      type="button"
      className="btn btn-primary mx-2"
      disabled={!selectedBreed}
      onClick={searchByBreed}
      style={{ color: "#fff", cursor: "pointer" }}
    >
      Search
    </button>;
  }

  export default Button