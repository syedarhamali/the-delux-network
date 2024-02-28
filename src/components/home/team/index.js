import TeamsCarousel from "@/components/ui/carousel/teams";
import { teamMembers } from "./team-data";

const TeamSection = () => {
  return (
    <div id="team" className="bg-[#212428] relative">
      <div className="px-4 mx-auto bg-[#212428] max-w-[1440px] sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-wrap justify-center mb-12 text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h1 className="text-5xl font-bold text-center text-primary-purple">
                  Team
                </h1>
                {/* Description */}
                <p className="text-lg font-light text-gray-700">
                  Meet The crew.
                </p>
              </div>
            </div>
            <TeamsCarousel data={teamMembers} />
          </div>
    </div>
  );
};

export default TeamSection;
