export default function Menu({ toggle, setToggle }) {
  return (
    <img
      onClick={() => {
        setToggle(!toggle);
      }}
      className="w-6 h-6 cursor-pointer xl:hidden"
      src="/bars-solid.svg"
      alt="Icon"
    />
  );
}
