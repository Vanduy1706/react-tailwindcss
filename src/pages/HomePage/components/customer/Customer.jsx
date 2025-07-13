import CustomerContent from "./CustomerContent";

export default function Customer() {
  return (
    <section className="px-8 py-8 mt-12 bg-neutral-silver xl:flex xl:flex-row xl:justify-center xl:px-36 xl:gap-19.5 xl:items-center">
      <img
        className="mx-auto my-0 xl:mx-0 drop-shadow-shadow8"
        src="/src/assets/TImg.png"
        alt="Image"
      />
      <CustomerContent />
    </section>
  );
}
