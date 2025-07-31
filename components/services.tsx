import { myservices } from "./constants";

export default function Services() {
  return (
    <div className="border-t bg-black/20">
      <div className="flex flex-col gap-9 items-center py-15 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">My Services</h1>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-between items-center gap-10 lg:px-50 px-7">
          {myservices.map((services) => (
            <div key={services.id}>
              <div className="flex flex-col gap-3 bg-gradient-to-r from-purple-500/80 to-purple-900 rounded-3xl text-white px-6 py-7 md:px-12 text-left shadow-sm shadow-neutral-600">
                <div className="font-semibold text-[15px] md:text-md">
                  {services.title}
                </div>
                <div className="text-sm text-neutral-300">
                  {services.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
