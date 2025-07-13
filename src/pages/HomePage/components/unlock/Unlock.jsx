import UnlockContent from "./UnlockContent";

export default function Unlock() {
  return (
    <section className="px-8 mt-10.5 xl:px-36 xl:flex xl:items-center">
      <img className="my-0 mx-auto" src="/UnlockImage.png" alt="Image" />
      <UnlockContent />
    </section>
  );
}
