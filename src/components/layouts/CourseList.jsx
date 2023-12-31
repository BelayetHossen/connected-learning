import { Button } from "@material-tailwind/react";
import CourseCard from "../common/CourseCard";
import SectionTitle1 from "../common/SectionTitle1";
import { BiRightArrowAlt } from "react-icons/bi";

const CourseList = () => {
    return (
        <>
            <div className="bg-[#EDEEF3]">
                <div className="container mx-auto md:px-14 px-4 py-14">
                    <SectionTitle1 sub="Course List" title="Find your Perfect Course"></SectionTitle1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                        <CourseCard img="https://s3-alpha-sig.figma.com/img/9757/dd84/7dc4c35e60544d9001c18dd4d4642c3b?Expires=1690156800&Signature=dRYIrh4cF1cIb2D1lXg0B6x7xitAu9kD8917Qy7DGvg2F-vfh4~brWFrFvMtiI6QGjxg3rpGIdj1HWmSwf5xnWbAJSu8VM6QDrBVlUlH3gnEc8HjsJQPurbhRwho5YEEMYeL63~UGdRYLAJ2DKYIHZCG9j1rM8IlRU7eXPID~7xKqQ~rPPzVLIkyNAzFRmIKA5QFLmmaKrtACmj4mTBgp4ai8tYf0FHOhl04ptdO2aQ9xW2OCsBaqhWwiCDLh5p52YN6WJ9krl0G6IVPtRhGj2GsfhYJxdJaAPDtZD~LhYtE84eWkIJdYePOOmgjn-Rx6XcEVGXhLJi2uvzFJiMxog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" title="UI/UX Design" category="Web Design"></CourseCard>
                        <CourseCard img="https://s3-alpha-sig.figma.com/img/46d0/e372/5417fce8a7db6c1b7d56bd70d8e6652e?Expires=1690156800&Signature=QCOFGcJZPu9T9fQnKpIqv3-G8RydDZCLfdRVSsDqabD4iozfgYFmwtFLPj-2XmG51zlma8d0a-1E4FS4D-B-lqu~ODKxQ6AnKEXu9Ct27ktIZPhxnl~lOrABhvwUzuM2cOBf6q5x2q5-ObwWvyFG03iuchOgLCc36qKgFFiyDHOZTS-x5exkgOo06PXEuBGqM-VPc0n7qfqzdUp1Of6SNvesmdgP-GspAipJTKGdmNffsJ4kzGkN5L4JwZZwvRLb7R8tlu-yoclslOTWBgIW10yAuE0TmSRcP-EkUItcN2AZmYYY8teMwgl90m3xUHw-kxpTmNf98K3-pk0i0yH0wA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" title="CSS" category="Marketing"></CourseCard>
                        <CourseCard img="https://s3-alpha-sig.figma.com/img/5544/3fda/96f5a3e8d87ee6376d975795468914a7?Expires=1690156800&Signature=QkdQ7mNsUxQuZhT2qsr8FJg79IUX~bZ4l-ik0OnGOuM-25pCyWePlNjvRfsSkMgLUV6WJ12jEatZRwkFPUGagvAduBHbV7aWoyQp7yvFslsvutG4-p~O9OCYJOal2GTSshYDgv40rDAdwpawIeEMYJe0aEeUlI366S8~FxRjP3BiBPFSqJvPwGrL7kXpSfL7A5VRcAKpoR~9INUXWzNDF01sxWU8nUCArqswy8dAtw7cRbVYMWf-b-wump9igjnlCDS8cBTg5vUGpw3hc4KWW0XV~NC8vx47TWC2NaHZ9pAjzZzrpeH1KSTugtDOKbuCkCPCE8Zce5h3Dz0k3l1uAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" title="Digital Marketing" category="Web Design"></CourseCard>
                        <CourseCard img="https://s3-alpha-sig.figma.com/img/dc85/98fd/cffbe8158ae9c36644202ff97d2937f2?Expires=1690156800&Signature=DkuraPfztHqRm3LP3knXK4ueedcwWsl~eAhmXxojZZi5-Kf1zrIrcw76Mezo66d9kiquFK9qHU2hd4b3fV0i3vygyAmKcLHYs2HoQk6Oky13ybi0AWUMdfi8Uzgbuml1RPqG5Lh2StGz52ReoEcQOB807y-e4zCAuapMm8qpoQWl9pau-O3GuvPSVjjEVbzgHMjAqiNGdPt~cjCkI0fMCxTPZAx6L2~LFuQRXRC~Qnq4h1goYD1vgtmhilUPj55eM1IF0S9hUDg2cNWO1KmU6Q-4XOuo53qS7OkKzjG~jmgCzOqwfaUHXrMXF81eniWTk78GGXXa7SjR-yXUe4jLSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" title="UI/UX Design" category="Web Design"></CourseCard>
                        <CourseCard img="https://s3-alpha-sig.figma.com/img/9757/dd84/7dc4c35e60544d9001c18dd4d4642c3b?Expires=1690156800&Signature=dRYIrh4cF1cIb2D1lXg0B6x7xitAu9kD8917Qy7DGvg2F-vfh4~brWFrFvMtiI6QGjxg3rpGIdj1HWmSwf5xnWbAJSu8VM6QDrBVlUlH3gnEc8HjsJQPurbhRwho5YEEMYeL63~UGdRYLAJ2DKYIHZCG9j1rM8IlRU7eXPID~7xKqQ~rPPzVLIkyNAzFRmIKA5QFLmmaKrtACmj4mTBgp4ai8tYf0FHOhl04ptdO2aQ9xW2OCsBaqhWwiCDLh5p52YN6WJ9krl0G6IVPtRhGj2GsfhYJxdJaAPDtZD~LhYtE84eWkIJdYePOOmgjn-Rx6XcEVGXhLJi2uvzFJiMxog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" title="UI/UX Design" category="Web Design"></CourseCard>
                        <CourseCard img="https://s3-alpha-sig.figma.com/img/9757/dd84/7dc4c35e60544d9001c18dd4d4642c3b?Expires=1690156800&Signature=dRYIrh4cF1cIb2D1lXg0B6x7xitAu9kD8917Qy7DGvg2F-vfh4~brWFrFvMtiI6QGjxg3rpGIdj1HWmSwf5xnWbAJSu8VM6QDrBVlUlH3gnEc8HjsJQPurbhRwho5YEEMYeL63~UGdRYLAJ2DKYIHZCG9j1rM8IlRU7eXPID~7xKqQ~rPPzVLIkyNAzFRmIKA5QFLmmaKrtACmj4mTBgp4ai8tYf0FHOhl04ptdO2aQ9xW2OCsBaqhWwiCDLh5p52YN6WJ9krl0G6IVPtRhGj2GsfhYJxdJaAPDtZD~LhYtE84eWkIJdYePOOmgjn-Rx6XcEVGXhLJi2uvzFJiMxog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" title="UI/UX Design" category="Web Design"></CourseCard>
                    </div>
                    <div className="text-center mt-8">
                        <Button className="rounded-full bg-[#6278FF] mr-3 capitalize" variant="filled">View All <BiRightArrowAlt className="inline -mt-1" /></Button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default CourseList;