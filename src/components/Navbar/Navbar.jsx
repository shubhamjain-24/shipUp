import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { FiUserPlus } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import img1 from "../../Images/navimg.png";
import { FaArrowRight } from "react-icons/fa6";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <BootstrapNavbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary NavbarContianer"
    >
      <Container className="Nav_container">
        <BootstrapNavbar.Brand className="Nav_logo" href="#home">
          Ship<span className="Nav_logoHighlight">Up</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto Nav_text">
            <NavDropdown title="Company" id="collapsible-nav-dropdown">
              <div className="dropdown">
                <NavDropdown.Item href="#action/3.1" className="dropdown-item">
                  <span className="dropdown_head">Company</span>
                  <div className="drop_listitem">
                    <div className="item1">
                      <div className="item_logo">
                        <FiUserPlus />
                      </div>
                      <div className="item_textDiv">
                        <div className="item_headtext">About Us</div>
                        <div className="item_subtext">
                          The people behind shipUp and the story of <br />{" "}
                          shared success.
                        </div>
                      </div>
                    </div>
                    <div className="item1">
                      <div className="item_logo">
                        <GrLocation />
                      </div>
                      <div className="item_textDiv">
                        <div className="item_headtext">Partner With Us</div>
                        <div className="item_subtext">
                          Collaboration with ShipUp and drive mutual <br />{" "}
                          growth
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item1">
                    <div className="item_logo">
                      <HiOutlineLightBulb />
                    </div>
                    <div className="item_textDiv">
                      <div className="item_headtext">Carrer</div>
                      <div className="item_subtext">Join the ShipUp</div>
                    </div>
                  </div>
                </NavDropdown.Item>
                <div href="#action/3.1" className="dropdown-item">
                  <span className="dropdown_head">Newsroom</span>
                  <div className="drop_listitem">
                    <div className="item1">
                      <img src={img1} alt="" />
                    </div>
                    <div className="item1">
                      <div
                        style={{ marginTop: "0px",cursor:"pointer" }}
                        className="item_subtext"
                      >
                        News and awards
                      </div>
                    </div>
                  </div>
                  <div className="item1">
                    <div
                      style={{ marginTop: "-30px" ,cursor:"pointer"}}
                      className="item_subtext_2"
                    >
                      Learn More &nbsp; <FaArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </NavDropdown>
            <Nav.Link href="#features" className="mx-2 pl-3 pr-3">
              Services
            </Nav.Link>
            <Nav.Link href="#sol" className="mx-2 pl-3 pr-3">
              Solutions
            </Nav.Link>
            <Nav.Link href="#industries" className="mx-2 pl-3 pr-3">
              Industries
            </Nav.Link>
            <Nav.Link href="#insights" className="mx-2 pl-3 pr-3">
              Insights
            </Nav.Link>
            <Nav.Link href="#news" className="mx-2 pl-3 pr-3">
              News And Media
            </Nav.Link>
          </Nav>
          <Nav className="Nav_buttons justify-content-between">
            <Button
              variant="outline-primary"
              className="mx-2 pl-3 pr-3 button1"
            >
              Request Quote
            </Button>
            <Button variant="primary" className="mx-2 pl-3 pr-3 button2">
              Join Now
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
