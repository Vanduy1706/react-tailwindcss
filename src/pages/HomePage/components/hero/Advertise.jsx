import Button from "../../../../components/Button";

export default function Advertise() {
  return (
    <article className="w-fit h-fit mb-4 flex flex-col items-center xl:block xl:mb-0">
      <h1 className="headline-1 text-neutral-d_grey mb-4 text-center xl:text-left xl:text-6xl/[76px]">
        Lessons and insights <br />
        <span className="text-brand-primary">from 8 years</span>
      </h1>
      <p className="regular-body2 text-neutral-grey mb-8 text-center xl:text-left">
        Where to grow your business as a photographer: site or social media?
      </p>
      <Button className={"btn"}>Register</Button>
    </article>
  );
}
