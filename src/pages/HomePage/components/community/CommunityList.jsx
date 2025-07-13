import CommunityType from "./CommunityType";

export default function CommunityList() {
  return (
    <article className="flex flex-col items-center justify-between px-8 xl:px-36 xl:flex-row xl:items-start">
      <CommunityType
        src="/MembershipOrganisations.png"
        heading="Membership Organisations"
        para="Our membership management software provides full automation of membership renewals and payments"
      />
      <CommunityType
        src="/NationalAssociations.png"
        heading="National Associations"
        para="Our membership management software provides full automation of membership renewals and payments"
      />
      <CommunityType
        src="/ClubsAndGroups.png"
        heading={
          <>
            Clubs And <br />
            Groups
          </>
        }
        para="Our membership management software provides full automation of membership renewals and payments"
      />
    </article>
  );
}
