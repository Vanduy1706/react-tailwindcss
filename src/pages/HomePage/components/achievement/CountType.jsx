export default function CountType({ srcIcon, amount, type }) {
  return (
    <div className="flex items-center gap-1.5">
      <img className="h-fit" src={srcIcon} alt="Icon" />
      <div>
        <h1 className="headline-3 text-neutral-d_grey">{amount}</h1>
        <p className="regular-body2 text-neutral-grey">{type}</p>
      </div>
    </div>
  );
}
