import React from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

function NavigationBar() {
  return (
    <nav className="hud-nav">
      <a className="hud-brand" href="#home">
        <img src="/favicon-192.png" alt="" />
        <span>MANIK</span>
      </a>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="hud-wanted" aria-hidden="true">
        <span className="hud-cash">$1,000,000</span>
        <span className="hud-stars">★★★★★</span>
      </div>
    </nav>
  );
}

export default NavigationBar;
