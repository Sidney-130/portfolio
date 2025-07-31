export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-40 bg-neutral-950 border-b shadow-md backdrop-blur-2xl">
      <div className="flex justify-between items-center mx-auto py-4 px-4">
        <h1 className="text-2xl font-bold">Jane.dev</h1>
        <div className="bg-gradient-to-r from-purple-600 to-purple-900 px-3 py-2 rounded-sm text-sm">
          <a
            href="https://x.com/Janey_Dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
