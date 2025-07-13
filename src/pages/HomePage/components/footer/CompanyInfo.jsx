export default function CompanyInfo() {
  return (
    <article className="xl:flex xl:flex-col xl:justify-between xl:items-start">
      <img
        className="mx-auto mt-0 mb-5 xl:mx-0"
        src="/LogoDark.svg"
        alt="Logo"
      />
      <div className="regular-body3 text-neutral-silver text-center mb-5 xl:text-left">
        <p>Copyright © 2020 Nexcent ltd.</p>
        <p>All rights reserved</p>
      </div>
      <div className="flex justify-center gap-4 xl:justify-between">
        <img src="/Insta.svg" alt="Icon" />
        <img src="/Basket.svg" alt="Icon" />
        <img src="/Twitter.svg" alt="Icon" />
        <img src="/Youtube.svg" alt="Icon" />
      </div>
    </article>
  );
}
