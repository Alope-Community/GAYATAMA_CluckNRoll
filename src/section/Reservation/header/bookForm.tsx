import CalendarIcon from "../../../components/icons/calendar";
import PhoneIcon from "../../../components/icons/phone";
import UserIcon from "../../../components/icons/user";

export default function HeaderBookFormReservation({ lang }: { lang: string }) {
  return (
    <div className="bg-[#191f25] z-20 absolute -bottom-full  md:-bottom-[250px] left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 text-white rounded w-[90%] lg:w-5/6 xl:w-4/5">
      <h3 className="text-2xl font-medium text-center">
        {lang == "en" ? "Book a Table For" : "Booking Meja Untuk"}
      </h3>

      <hr className="w-1/2 mx-auto mt-3 border-primary" />

      <form action="">
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          <div className="relative">
            <input
              type="text"
              className="py-4 px-3 rounded w-full bg-gray-700 text-gray-300"
              placeholder={lang == "en" ? "Your Name" : "Nama Anda"}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <UserIcon myClass="size-6 text-primary" />
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              className="py-4 px-3 rounded w-full bg-gray-700 text-gray-300"
              placeholder={lang == "en" ? "Your Phone" : "No Telepon Anda"}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <PhoneIcon myClass="size-6 text-primary" />
            </span>
          </div>
          <div className="relative">
            <input
              type="date"
              className="py-4 px-3 rounded w-full bg-gray-700 text-gray-300"
              placeholder="Your Name"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2">
              <CalendarIcon myClass="size-6 text-primary" />
            </span>
          </div>
        </div>

        <div className="text-center mt-5">
          <button
            title="Booking Now"
            aria-label="Booking Now"
            type="button"
            className="px-5 py-3 rounded-md text-white  border-2 border-primary/80 bg-primary/80 hover:bg-primary hover:text-white font-medium"
          >
            {lang == "en" ? "BOOK NOW" : "BOOKING SEKARANG"}
          </button>
        </div>
      </form>
    </div>
  );
}
