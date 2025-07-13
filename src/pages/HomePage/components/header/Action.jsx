import Button from "../../../../components/Button";

export default function Action({ toggle }) {
  return (
    <div
      className={
        toggle
          ? "absolute top-98 left-0 right-0 flex flex-col xl:gap-3.5"
          : "absolute -top-146 left-0 right-0 flex flex-col gap-3.5 xl:relative xl:top-0 xl:flex-row"
      }
    >
      <Button className={"btn-login"}>Login</Button>
      <Button className={"btn-register"}>Sign up</Button>
    </div>
  );
}
