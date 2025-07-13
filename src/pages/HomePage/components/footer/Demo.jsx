import Button from "../../../../components/Button";

export default function Demo() {
  return (
    <section className="bg-neutral-silver py-8 px-8">
      <h1 className="headline-3 text-neutral-black text-center mb-8">
        The children are welcome to <br />
        fringilla free eu.
      </h1>
      <Button className={"btn flex gap-2 mx-auto my-0"}>
        <span className="">Get a Demo</span>
        <svg
          className="text-neutral-white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </Button>
    </section>
  );
}
