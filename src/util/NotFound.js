import React from "react";

const NotFound = () => {
  document.title = "Oops! Something went wrong!";

  return (
    <>
      <h1>Oops! Looks like the page you're looking for doesn't exist</h1>
    </>
  );
};

export default NotFound;
