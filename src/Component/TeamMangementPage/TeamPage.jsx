import HeroText from "../UniversalComponent/HeroText/HeroText";
import TeamMemberCard from "../UniversalComponent/TeamMemmber/TeamMemberCard";

const TeamPage = () => {
  return (
    <>
      <div className="univarsal_div">
        <div className="container">
          <HeroText
            heroText={{
              text1: "Our",
              text2: "Team",
              description:
                "Our team of passionate and experienced professionals is dedicated to helping your business achieve its digital goals. We combine expertise in Management, Marketing, Development, Design, and Listing to deliver exceptional results.",
            }}
          />

          {/* other text */}
          <div className="row team_row_style">
            <TeamMemberCard
              temMemberDetails={{
                name: "John Williams",
                position: "CTO",
                avator: "unsplash_ILip77SbmOE.png",
                description:
                  "Passion for Defi. Has worked @coinbase & @google as an adviso",
                likdeProfile: "swapnilahmedshishir",
                twProfile: "shishir_swapnil",
                fbProfile: "swapnilahmedshishir",
              }}
            />

            <TeamMemberCard
              temMemberDetails={{
                name: "Alisha Ruckets",
                position: "Advisor",
                avator: "unsplash_IF9TK5Uy-KI.png",
                description:
                  "Has excellent skills in project management. Previously @binance ",
                likdeProfile: "swapnilahmedshishir",
                twProfile: "shishir_swapnil",
                fbProfile: "swapnilahmedshishir",
              }}
            />

            <TeamMemberCard
              temMemberDetails={{
                name: "Maria Silva",
                position: "Full Stack Developer",
                avator: "unsplash_bqe0J0b26RQ.png",
                description:
                  "Has an experience of 10+ years working in web.3. Previously @crypto.com",
                likdeProfile: "swapnilahmedshishir",
                twProfile: "shishir_swapnil",
                fbProfile: "swapnilahmedshishir",
              }}
            />
          </div>

          <div className="row team_row_style mt-5">
            <TeamMemberCard
              temMemberDetails={{
                name: "John Williams",
                position: "CTO",
                avator: "unsplash_ILip77SbmOE.png",
                description:
                  "Passion for Defi. Has worked @coinbase & @google as an adviso",
                likdeProfile: "swapnilahmedshishir",
                twProfile: "shishir_swapnil",
                fbProfile: "swapnilahmedshishir",
              }}
            />

            <TeamMemberCard
              temMemberDetails={{
                name: "Alisha Ruckets",
                position: "Advisor",
                avator: "unsplash_IF9TK5Uy-KI.png",
                description:
                  "Has excellent skills in project management. Previously @binance ",
                likdeProfile: "swapnilahmedshishir",
                twProfile: "shishir_swapnil",
                fbProfile: "swapnilahmedshishir",
              }}
            />

            <TeamMemberCard
              temMemberDetails={{
                name: "Maria Silva",
                position: "Full Stack Developer",
                avator: "unsplash_bqe0J0b26RQ.png",
                description:
                  "Has an experience of 10+ years working in web.3. Previously @crypto.com",
                likdeProfile: "swapnilahmedshishir",
                twProfile: "shishir_swapnil",
                fbProfile: "swapnilahmedshishir",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
