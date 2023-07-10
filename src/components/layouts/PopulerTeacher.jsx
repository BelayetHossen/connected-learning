import SectionTitle2 from "../common/SectionTitle2";
import TeamCard from "../common/TeamCard";


const PopulerTeacher = () => {
    return (
        <>
            <div className="bg-[#EDEEF3]">
                <div className="container mx-auto md:px-14 px-4 py-14">
                    <SectionTitle2 sub="Team Member" title="Popular Professional Teachers"></SectionTitle2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                        <TeamCard img="https://i.ibb.co/3yyQpJf/team-1.jpg" name="Pushpa Kanon" desig="CEO, derhab"></TeamCard>
                        <TeamCard img="https://i.ibb.co/thsQLSt/team-2.jpg" name="Lolona khan" desig="UI Designer"></TeamCard>
                        <TeamCard img="https://i.ibb.co/Mfg4BtZ/team-3.jpg" name="Jahangiri khan" desig="UX Designer"></TeamCard>
                        <TeamCard img="https://i.ibb.co/g4VQgcP/team-4.jpg" name="Mukayemi sha" desig="Developer"></TeamCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopulerTeacher;



