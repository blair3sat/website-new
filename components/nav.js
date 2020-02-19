import React from "react";
import Link from "next/link";
import styled from "styled-components";

const links = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Our Mission" },
  { href: "/support#support", label: "Support us" },
  { href: "/support", label: "Sponsors" },
  // { href: "/blog", label: "Blog" },
//   { href: "/team", label: "Team" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const NavContainer = styled.nav`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.9);
  height: 0;
  overflow: visible;
  color: #fff;
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 3em;
  z-index: 1000;
  padding: 0em 15%;
  display: flex;
  align-items: center;
  overflow: auto;


  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1em;
    right: unset;
    bottom: 0px;
    height: 4.5em;

    .logo{
      margin: auto;
    }

    .links {
      padding: 0px;

    }
  }

  .logo {
    margin-right: auto;
  }

  .links {
    display: flex;
    justify-content: space-between;
  }
  .link {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = () => (
  <NavContainer>
    <div className="logo">
      <Link href="/">
        <a>Blair3sat</a>
      </Link>
    </div>
    <ul className="links">
      {links.map(({ key, href, label }) => (
        <li className="link" key={key}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  </NavContainer>
);

export default Nav;
