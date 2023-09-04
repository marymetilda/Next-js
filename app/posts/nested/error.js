"use client";
const { useEffect } = require("react");

// Error components must be client components

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Oops!! Something went wrong</h1>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
