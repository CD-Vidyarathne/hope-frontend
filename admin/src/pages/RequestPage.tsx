import MainSection from "../components/MainSection";
import TitleBar from "../components/TitleBar";
import {
  childsupport,
  eventrequest,
  patientsupport,
  eldersupport,
} from "../assets";
import { useNavigate } from "react-router-dom";

const RequestPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="py-8">
      <TitleBar title="Requests" />
      <MainSection>
        <div className="grid grid-cols-2 gap-y-4 p-4 bg-bgblue justify-between items-center rounded-lg h-full w-[70%] ">
          <div
            onClick={() => navigate("patients")}
            className="bg-dark text-white cursor-pointer rounded overflow-hidden flex flex-col w-[400px] h-[250px] group"
          >
            <div className="h-[66%] flex items-center justify-center group-hover:animate-pulse overflow-hidden">
              <img
                src={patientsupport}
                alt="Patient Support"
                className="w-full"
              />
            </div>
            <div className="h-[34%] bg-dark">
              <div className="flex justify-between font-[700] items-center p-4">
                <p>Patient Support Requests</p>
                <div className="ml-auto bg-bgblue text-main p-3 rounded-full">
                  6
                </div>
              </div>
            </div>
          </div>
          <div
            className=" bg-dark cursor-pointer text-white rounded overflow-hidden flex flex-col w-[400px] h-[250px] group"
            onClick={() => navigate("children")}
          >
            <div className="h-[66%] flex items-center justify-center group-hover:animate-pulse overflow-hidden">
              <img src={childsupport} alt="Child Support" className="w-full" />
            </div>
            <div className="h-[34%] bg-dark">
              <div className="flex justify-between font-[700] items-center p-4">
                <p>Child Support Requests</p>
                <div className="ml-auto bg-bgblue text-main p-3 rounded-full">
                  6
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("elders")}
            className="bg-dark cursor-pointer group text-white rounded overflow-hidden flex flex-col w-[400px] h-[250px]"
          >
            <div className="h-[66%] flex items-center justify-center group-hover:animate-pulse overflow-hidden">
              <img src={eldersupport} alt="Elder Support" className="w-full" />
            </div>
            <div className="h-[34%] bg-dark">
              <div className="flex justify-between font-[700] items-center p-4">
                <p>Elder Support Requests</p>
                <div className="ml-auto bg-bgblue text-main p-3 rounded-full">
                  6
                </div>
              </div>
            </div>
          </div>
          <div className="bg-dark cursor-pointer group text-white rounded overflow-hidden flex flex-col w-[400px] h-[250px]">
            <div className="h-[66%] flex items-center justify-center group-hover:animate-pulse overflow-hidden">
              <img src={eventrequest} alt="Event Request" className="w-full" />
            </div>
            <div className="h-[34%] bg-dark">
              <div className="flex justify-between font-[700] items-center p-4">
                <p>Event Requests</p>
                <div className="ml-auto bg-bgblue text-main p-3 rounded-full">
                  6
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default RequestPage;
