import AchievementHeading from "./AchievementHeading";
import Counts from "./Counts";

export default function Achievement() {
  return (
    <section className="mt-12 p-8 xl:px-36 bg-neutral-silver xl:py-16 xl:flex xl:items-center xl:justify-between">
      <AchievementHeading />
      <Counts />
    </section>
  );
}
