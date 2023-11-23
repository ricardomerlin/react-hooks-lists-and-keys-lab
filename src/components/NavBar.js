import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mapLinks = links.map(item => {
    return <a href={'#' + item} key={item}>{item}</a>
  })

  return <nav>{mapLinks}</nav>;
}

export default NavBar;
