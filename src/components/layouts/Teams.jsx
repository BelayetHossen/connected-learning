import SectionTitle2 from "../common/SectionTitle2";
import TeamCard from "../common/TeamCard";

const Teams = () => {
    return (
        <>
            <div className="bg-[#EDEEF3]">
                <div className="container mx-auto md:px-14 px-4 py-14">
                    <SectionTitle2 sub="Team Member" title="The Amazing Team of Us"></SectionTitle2>


                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                        <TeamCard img="https://i.ibb.co/3yyQpJf/team-1.jpg" name="Pushpa Kanon" desig="CEO, derhab"></TeamCard>
                        <TeamCard img="https://i.ibb.co/thsQLSt/team-2.jpg" name="Lolona khan" desig="UI Designer"></TeamCard>
                        <TeamCard img="https://i.ibb.co/Mfg4BtZ/team-3.jpg" name="Jahangiri khan" desig="UX Designer"></TeamCard>
                        <TeamCard img="https://i.ibb.co/g4VQgcP/team-4.jpg" name="Mukayemi sha" desig="Developer"></TeamCard>

                        <TeamCard img="https://i.ibb.co/j3PhHdw/team-5.jpg" name="Pushpa Kanon" desig="Photography"></TeamCard>
                        <TeamCard img="https://i.ibb.co/j4JmxPp/team-6.jpg" name="Lolona khan" desig="UI Designer"></TeamCard>
                        <TeamCard img="https://i.ibb.co/1q5PZsT/team-7.jpg" name="Jahangiri khan" desig="Python Programar"></TeamCard>
                        <TeamCard img="https://i.ibb.co/8gnGxR6/team-8.jpg" name="Mukayemi sha" desig="Business Specialist"></TeamCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Teams;




