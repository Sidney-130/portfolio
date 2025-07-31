import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-black to-purple-900">
      <div className="w-full max-w-screen-lg mx-auto lg:min-h-screen lg:w-[1000px] pt-20 md:pt-40 pb-20">
        <div className="flex flex-col justify-between items-center md:items-start gap-11 md:gap-7 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
            <div className="flex flex-col gap-2 md:text-left text-center">
              <h1 className="text-2xl">
                <span className="text-purple-400">I&apos;m Jane</span>
              </h1>
              <h2 className="text-2xl font-bold lg:text-4xl">
                Frontend Developer
              </h2>
              <h4 className="text-sm text-gray-400 md:pr-20">
                I create user-friendly and easy to use websites. Let me help you
                turn your ideas into interactive websites. I work with latest
                frameworks and understand figma designs.
              </h4>
            </div>
            <div className="flex justify-center md:justify-end items-center">
              <Image
                src={"/images/mainprofile.jpg"}
                width={200}
                height={200}
                alt="ProfileImage"
                priority
                className="border-2 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex md:items-left bg-gradient-to-r from-purple-600 to-purple-900 text-white px-3 py-2 rounded-sm text-sm">
            <a
              href="https://github.com/Sidney-130"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
