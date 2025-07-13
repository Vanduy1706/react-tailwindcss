import Button from "../../../../components/Button";

export default function CalenderContent() {
  return (
    <article className="max-w-75 flex flex-col items-center my-0 mx-auto xl:items-start xl:block xl:h-fit xl:max-w-165">
      <h1 className="headline-2 text-neutral-d_grey text-center mb-4 xl:text-start">
        How to design your site footer like <br />
        we did
      </h1>
      <p className="regular-body3 text-neutral-grey text-center mb-8 xl:text-start">
        Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue
        nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat
        a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
        platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis
        finibus. In euismod augue vitae nisi ultricies, non aliquet urna
        tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis
        massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis
        libero. Donec consectetur faucibus ipsum id gravida.
      </p>
      <Button className={"btn"}>Learn More</Button>
    </article>
  );
}
