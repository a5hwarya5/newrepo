import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("TOURISM");
            navigate("/");
          }}
        >
          TOURISM
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("TRAVEL");
            navigate("/");
          }}
        >
          TRAVEL
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("SKETCHES");
            navigate("/");
          }}
        >
          SKETCHES 
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() => {
            setSearch("SPORTS");
            navigate("/");
          }}
        >
          SPORTS
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("FASHION");
            navigate("/");
          }}
        >
          FASHION
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("FITNESS EQUIPMENTS");
            navigate("/");
          }}
        >
          FITNESS EQUIPMENTS
        </div>
        <div
          className="button btn btn-outline-dark text-light mx-3"
          onClick={() => {
            setSearch("TECHNOLOGY");
            navigate("/");
          }}
        >
          TECHNOLOGY
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("FINANCE");
            navigate("/");
          }}
        >
          FINANCE
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("BUSINESS");
            navigate("/");
          }}
        >
          BUSINESS
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("PAINTINGS");
            navigate("/");
          }}
        >
          PAINTINGS
        </div>

        {location.pathname == "/saved" ? (
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/saved")}
          >
            Saved
          </div>
        )}
      </div>

      <div
        className="container my-4"
        style={{
          width: "780px",
        }}
      >
        {location.pathname === "/" && (
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-dark text-light"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;