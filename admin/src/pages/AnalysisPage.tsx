import { incomereport, userreport } from "../assets";
import MainSection from "../components/MainSection";
import TitleBar from "../components/TitleBar";

const AnalysisPage: React.FC = () => {
  return (
    <div className="py-8">
      <TitleBar title="Analysis" />
      <MainSection>
        <div className="flex gap-4 w-[80%] items-center justify-between">
          <div className="w-[40%] aspect-square bg-dark rounded-2xl flex flex-col items-center justify-center group cursor-pointer">
            <div className="w-full flex items-center justify-center pb-5 bg-white">
              <img
                src={userreport}
                alt="user report"
                className="w-[50%] group-hover:animate-pulse group-hover:scale-105 duration-200"
              />
            </div>
            <p className="text-white font-[700] text-[1.5rem] group-hover:animate-pulse duration-200 group-hover:scale-105 pt-4">
              User Posted Event Manage
            </p>
          </div>
          <div className="w-[40%] aspect-square bg-dark rounded-2xl flex flex-col items-center justify-center group cursor-pointer">
            <div className="w-full flex items-center justify-center pb-5 bg-white">
              <img
                src={incomereport}
                alt="income report"
                className="w-[50%] group-hover:animate-pulse group-hover:scale-105 duration-200"
              />
            </div>
            <p className="text-white font-[700] text-[1.5rem] group-hover:animate-pulse duration-200 group-hover:scale-105 pt-4">
              Admin Event Manage
            </p>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default AnalysisPage;
