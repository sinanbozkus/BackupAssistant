import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

library.add(faCheckDouble);

export default function HeaderNav() {
  return (
    <div className="mb-3">
      <header className="navbar navbar-expand-md navbar-dark">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link
            to="/"
            className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pr-0 pr-md-3"
          >
            <FontAwesomeIcon icon={["fas", "check-double"]} className="mr-1" />
            Backup Assistant
          </Link>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link pl-1 pr-0" to="/">
                    <span className="nav-link-title btn btn-secondary">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link pl-1 pr-0" href="./#">
                    <span className="nav-link-title btn btn-secondary">
                      Add New Rule
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-1 pr-0" to="/providers">
                    <span className="nav-link-title btn btn-secondary">
                      Providers
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link pl-1 pr-0" href="./#">
                    <span className="nav-link-title btn btn-secondary">
                      Logs
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pl-1 pr-0" href="./#">
                    <span className="nav-link-title btn btn-secondary">
                      Settings
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
