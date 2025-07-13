import CompanyInfo from "./CompanyInfo";
import Links from "./Links";

export default function FooterContent() {
  return (
    <section className="bg-neutral-black p-8 xl:flex justify-between xl:px-36 xl:py-16">
      <CompanyInfo />
      <Links />
    </section>
  );
}
