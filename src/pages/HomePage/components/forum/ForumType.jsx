import Button from "../../../../components/Button";

export default function ForumType({ srcImg, content, btnName }) {
  return (
    <div className="relative">
      <img src={srcImg} alt="Image" />
      <span className="absolute bg-neutral-silver top-47.5 right-6 left-6 max-w-80 drop-shadow-shadow8 rounded-lg p-4 text-center xl:flex xl:flex-col xl:items-center xl:gap-4 xl:max-w-79">
        <p className="headline-4 text-neutral-grey xl:max-w-71 xl:min-h-21">
          {content}
        </p>
        <Button className={"btn-no-bg flex flex-row items-center mx-auto my-0"}>
          <span>{btnName}</span>
          <img src="/Right.svg" alt="Icon" />
        </Button>
      </span>
    </div>
  );
}
