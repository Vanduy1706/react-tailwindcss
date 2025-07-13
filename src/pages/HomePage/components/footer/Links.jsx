export default function Links() {
  return (
    <article className="flex flex-col gap-4 mt-8 xl:flex-row xl:mt-0 xl:gap-20">
      <div className="flex flex-col gap-4 items-center xl:items-start">
        <span className="headline-4 text-neutral-white">Company</span>
        <ul className="w-full flex flex-row flex-wrap gap-3 justify-center regular-body3 text-neutral-silver xl:flex-col">
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 items-center xl:items-start">
        <span className="headline-4 text-neutral-white">Support</span>
        <ul className="w-full flex flex-row flex-wrap gap-3 justify-center regular-body3 text-neutral-silver xl:flex-col">
          <li>Help center</li>
          <li>Terms of service</li>
          <li>Legal</li>
          <li>Privacy policy</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 items-center xl:items-start">
        <span className="headline-4 text-neutral-white">Stay up to date</span>
        <div className="relative w-full">
          <input
            className="bg-neutral-grey text-neutral-silver w-full py-2.5 pl-3 rounded-lg "
            type="Text"
            placeholder="Your email address"
          />
          <img
            className="absolute right-3 top-2.75 bottom-2.75"
            src="/send.svg"
            alt="Icon"
          />
        </div>
      </div>
    </article>
  );
}
