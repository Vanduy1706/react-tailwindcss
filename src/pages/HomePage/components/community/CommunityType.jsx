export default function CommunityType({ src, heading, para }) {
  return (
    <div className="w-75 h-65 px-4 py-6 text-center">
      <img className="m-auto mb-4" src={src} alt="Image" />
      <h1 className="headline-3 text-neutral-d_grey mb-2">{heading}</h1>
      <p className="regular-body3 text-neutral-grey">{para}</p>
    </div>
  );
}
