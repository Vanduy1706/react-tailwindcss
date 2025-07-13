import Button from "../../../../components/Button";

export default function CustomerContent() {
  return (
    <article className="max-w-75 mx-auto my-0 xl:max-w-187">
      <div className="text-center mb-8 xl:text-left">
        <h1 className="medium-body2 text-neutral-grey mb-4">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </h1>
        <p className="headline-4 text-brand-primary mb-2">Tim Smith</p>
        <p className="regular-body2 text-neutral-l_grey">
          British Dragon Boat Racing Association
        </p>
      </div>
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:gap-0 xl:justify-between">
        <img src="/Client1.png" alt="Logo" />
        <img src="/Client2.png" alt="Logo" />
        <img src="/Client3.png" alt="Logo" />
        <img src="/Client4.png" alt="Logo" />
        <img src="/Client5.png" alt="Logo" />
        <img src="/Client6.png" alt="Logo" />
        <Button className={"btn-no-bg flex flex-row gap-2"}>
          <span>Meet all customers</span>
          <img src="/Right.svg" alt="Icon" />
        </Button>
      </div>
    </article>
  );
}
