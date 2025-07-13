import ForumType from "./ForumType";

export default function ForumList() {
  return (
    <article className="relative flex flex-col items-center justify-center gap-28 mt-4 xl:flex-row xl:gap-6">
      <ForumType
        srcImg={"/forum1.png"}
        content={"Creating Streamlined Safeguarding Processes with OneRen"}
        btnName={"Read more"}
      />
      <ForumType
        srcImg={"/forum2.png"}
        content={
          "What are your safeguarding responsibilities and how can you manage them?"
        }
        btnName={"Read more"}
      />
      <ForumType
        srcImg={"/forum3.png"}
        content={"Revamping the Membership  Model with Triathlon  Australia"}
        btnName={"Read more"}
      />
    </article>
  );
}
