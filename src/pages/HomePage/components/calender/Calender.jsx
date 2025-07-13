import CalenderContent from "./CalenderContent";

export default function Calender() {
  return (
    <section className="px-8 mt-10.5 xl:px-36 xl:flex xl:items-center">
      <img className="my-0 mx-auto" src="/src/assets/pana.png" alt="Image" />
      <CalenderContent />
    </section>
  );
}
