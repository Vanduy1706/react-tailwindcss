import CountType from "./CountType";

export default function Counts() {
  return (
    <article className="flex flex-col items-center gap-8 mt-8 xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:m-0">
      <CountType
        srcIcon={"/people.svg"}
        amount={"2,245,341"}
        type={"Members"}
      />
      <CountType srcIcon={"/groupHand.svg"} amount={"46,328"} type={"Clubs"} />
      <CountType
        srcIcon={"/pointer.svg"}
        amount={"828,867"}
        type={"Event Bookings"}
      />
      <CountType
        srcIcon={"/wallet.svg"}
        amount={"1,926,436"}
        type={"Payments"}
      />
    </article>
  );
}
