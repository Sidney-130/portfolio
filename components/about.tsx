import { CheckSquare } from "lucide-react";

export default function About() {
  return (
    <div className="py-10 px-5">
      <div className="flex flex-col gap-5 justify-between items-center">
        <h1 className="text-2xl font-bold pb-7">About Me</h1>
        <div className="flex flex-col gap-5 justify-start px-4 text-sm">
          <div className="flex items-center space-x-3">
            <CheckSquare /> <p>Open to growth and learning.</p>
          </div>
          <div className="flex items-center space-x-3">
            <CheckSquare /> <p>Ship fast and clean websites.</p>
          </div>
          <div className="flex items-center space-x-3">
            <CheckSquare /> <p>Open to collaborations.</p>
          </div>
          <div className="flex items-center space-x-3">
            <CheckSquare /> <p>Work well in teams.</p>
          </div>
        </div>
        <div className="bg-white flex items-center text-center mt-10 text-sm px-3 py-2 rounded-sm text-black">
          <a
            href="https://prompt-pal2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my work
          </a>
        </div>
      </div>
    </div>
  );
}
