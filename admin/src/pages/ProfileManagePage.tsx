import MainSection from "../components/MainSection";
import TitleBar from "../components/TitleBar";

const ProfileManagePage: React.FC = () => {
  return (
    <div className="py-8">
      <TitleBar title="Profile Manage" />
      <MainSection>
        <div className="grid grid-cols-2 gap-y-4 p-4 bg-bgblue justify-between items-center rounded-lg h-full w-[70%]">
          <div className="bg-blue-500 text-white rounded overflow-hidden flex flex-col w-[400px] h-[250px]">
            <div className="h-[66%]">This is for image</div>
            <div className="h-[34%] bg-dark text-center pt-6 font-[700]">
              Donors & Voulenteer Profile Manage
            </div>
          </div>
          <div className="bg-green-500 text-white rounded overflow-hidden flex flex-col w-[400px] h-[250px]">
            <div className="h-[66%]">This is for image</div>
            <div className="h-[34%] bg-dark text-center pt-6 font-[700]">
              Child Profile Manage
            </div>
          </div>
          <div className="bg-red-500 text-white rounded overflow-hidden flex flex-col w-[400px] h-[250px]">
            <div className="h-[66%]">This is for image</div>
            <div className="h-[34%] bg-dark text-center pt-6 font-[700]">
              Elder Profile Manage
            </div>
          </div>
          <div className="bg-yellow-500 text-white rounded overflow-hidden flex flex-col w-[400px] h-[250px]">
            <div className="h-[66%]">This is for image</div>
            <div className="h-[34%] bg-dark text-center pt-6 font-[700]">
              Patient Profile Manage
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default ProfileManagePage;
