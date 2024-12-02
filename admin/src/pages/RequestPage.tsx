import TitleBar from "../components/TitleBar";

function RequestPage() {
  return (
    <div className="py-8">
      <TitleBar title="Requests" />
      <div className="p-8 ">
        <div className="grid grid-cols-2 gap-4 p-4 bg-bgblue rounded-lg w-full h-full">
          <div className="bg-blue-500 text-white rounded overflow-hidden flex flex-col w-[400px] h-[250px]">
            <div className="h-[66%]">This is for image</div>
            <div className="h-[34%] bg-main">This is for text</div>
          </div>
          <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
          <div className="bg-red-500 text-white p-4 rounded">Item 3</div>
          <div className="bg-yellow-500 text-white p-4 rounded">Item 4</div>
        </div>
      </div>
    </div>
  );
}

export default RequestPage;
