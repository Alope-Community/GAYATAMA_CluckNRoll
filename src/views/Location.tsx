import Header from "../components/header";
import LocationMapSection from "../section/Location/map";
import Review from "../components/review";

export default function LocationView() {
  return (
    <>
      <Header />
      <main className="xl:px-20 md:px-10 px-5">
        <LocationMapSection />
      </main>
      <div className="bg-light-dark">
        <Review />
      </div>
    </>
  );
}
