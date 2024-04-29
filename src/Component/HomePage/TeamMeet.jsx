import TeamMemberCard from "../UniversalComponent/TeamMemmber/TeamMemberCard";

const TeamMeet = () => {
  return (
    <>
      <div className="common-div-style Our_service_div ">
        <div className="container">
          <div className="col_text_style header-one-style">
            <strong>Meet the team</strong>
          </div>

          <div className="row team_row_style">
            <TeamMemberCard temMemberDetails={{name:'John Williams' , position:'CTO', avator:'unsplash_ILip77SbmOE.png', description:"Passion for Defi. Has worked @coinbase & @google as an adviso", likdeProfile:'swapnilahmedshishir',twProfile:'shishir_swapnil',fbProfile:'swapnilahmedshishir'}}/>

            <TeamMemberCard temMemberDetails={{name:'Alisha Ruckets' , position:'Advisor', avator:'unsplash_IF9TK5Uy-KI.png', description:"Has excellent skills in project management. Previously @binance ", likdeProfile:'swapnilahmedshishir',twProfile:'shishir_swapnil',fbProfile:'swapnilahmedshishir'}}/>

            <TeamMemberCard temMemberDetails={{name:'Maria Silva' , position:'Full Stack Developer', avator:'unsplash_bqe0J0b26RQ.png', description:"Has an experience of 10+ years working in web.3. Previously @crypto.com", likdeProfile:'swapnilahmedshishir',twProfile:'shishir_swapnil',fbProfile:'swapnilahmedshishir'}}/>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamMeet