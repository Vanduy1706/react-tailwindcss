import { useState } from "react";
import Action from "./Action";
import Logo from "./Logo";
import Menu from "./Menu";
import Navbar from "./Navbar";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="relative flex py-4 px-8 justify-between bg-neutral-100 xl:py-5.5 xl:pl-26.25 xl:pr-30">
      <Logo />
      <Menu toggle={toggleMenu} setToggle={setToggleMenu} />
      <Navbar toggle={toggleMenu} />
      <Action toggle={toggleMenu} />
    </header>
  );
}
