import Image from "next/image";

export default function Skills() {
  return (
    <div className="mx-auto my-15 w-full">
      <div className="flex flex-col gap-7 items-center py-4 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Skills and Tools</h1>
        <h4 className="text-sm text-gray-300 px-3 md:px-15 mb-12 lg:mb-10">
          Highly skilled at creating responsive, fast and well designed
          websites.
        </h4>
        <div className="flex flex-col justify-between gap-17 items-center w-full mx-auto px-5 py-7 border rounded-lg shadow-sm shadow-purple-400 lg:w-[700px]">
          <div className="grid grid-cols-3 justify-between items-center space-x-6 lg:space-x-12 text-sm">
            <div className="flex flex-col justify-between gap-2 items-center">
              <Image
                src={"/images/javascriptlogo.png"}
                height={50}
                width={50}
                alt="JS"
              />
              <h1>Javascript</h1>
            </div>

            <div className="flex flex-col justify-between gap-2 items-center">
              <Image
                src={"/images/tailwindcsslogo.png"}
                height={50}
                width={50}
                alt="JS"
              />
              <h1>Tailwindcss</h1>
            </div>

            <div className="flex flex-col justify-between gap-2 items-center">
              <Image
                src={"/images/typescriptlogo.png"}
                height={50}
                width={50}
                alt="JS"
              />
              <h1>Typescript</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between items-center space-x-5 lg:space-x-10 text-sm">
            <div className="flex flex-col justify-between gap-2 items-center">
              <Image
                src={"/images/reactlogo.png"}
                height={50}
                width={50}
                alt="JS"
              />
              <h1>ReactJS</h1>
            </div>
            <div className="flex flex-col justify-between gap-2 items-center">
              <Image
                src={"/images/nextjslogo.png"}
                height={50}
                width={50}
                alt="JS"
              />
              <h1>NextJS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
