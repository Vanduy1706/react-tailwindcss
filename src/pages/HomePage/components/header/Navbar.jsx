import NavLink from "../../../../components/NavLink";

export default function Navbar({ toggle }) {
  return (
    <ul
      className={
        toggle
          ? "absolute top-14 left-0 right-0 flex flex-col bg-neutral-100"
          : "absolute -top-146 left-0 right-0 flex flex-col bg-neutral-100 xl:relative xl:top-0 xl:flex-row xl:gap-12.1"
      }
    >
      <NavLink className={"nav-link-active medium-body2"}>Home</NavLink>
      <NavLink className={"nav-link-normal regular-body2"}>Service</NavLink>
      <NavLink className={"nav-link-normal regular-body2"}>Feature</NavLink>
      <NavLink className={"nav-link-normal regular-body2"}>Product</NavLink>
      <NavLink className={"nav-link-normal regular-body2"}>Testimonial</NavLink>
      <NavLink className={"nav-link-normal regular-body2"}>FAQ</NavLink>
    </ul>
  );
}
