import React from "react";
import { Link } from "react-router-dom";
export default function Headerdes() {
  return (
    <>
      <div className="appbar">
        <div className="h">Y</div>
        <div className="desnews">Hacker News</div>
        <div className="features">
          <Link className="feature">New |</Link>
          <Link className="feature">Past |</Link>
          <Link className="feature">Comments |</Link>
          <Link className="feature">Ask |</Link>
          <Link className="feature">Show |</Link>
          <Link className="feature">Jobs |</Link>
          <Link className="feature">Submit</Link>
        </div>
      </div>
    </>
  );
}
