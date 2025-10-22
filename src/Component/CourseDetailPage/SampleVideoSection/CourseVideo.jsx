import VideoRight from "./VideoRIght";
import LeftVideo from "./leftVideo";

export default function CourseVideoPreview() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*  Left: Video Section */}
          <LeftVideo />

          {/*  Right: Info Section */}
          <VideoRight />
        </div>
      </div>
    </section>
  );
}
