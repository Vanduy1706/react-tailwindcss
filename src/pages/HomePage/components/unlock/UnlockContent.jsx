import Button from "../../../../components/Button";

export default function UnlockContent() {
  return (
    <article className="max-w-75 flex flex-col items-center my-0 mx-auto xl:items-start xl:block xl:h-fit xl:max-w-165">
      <h1 className="headline-2 text-neutral-d_grey text-center mb-4 xl:text-start">
        The unseen of spending three <br />
        years at Pixelgrade
      </h1>
      <p className="regular-body3 text-neutral-grey text-center mb-8 xl:text-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque
        placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
        Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa
        pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
      </p>
      <Button className={"btn"}>Learn More</Button>
    </article>
  );
}
