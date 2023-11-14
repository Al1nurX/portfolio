import HeroContent from "../sub/HeroContent";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <video
        className="absolute left-0 top-[-340px] z-[1] h-full w-full rotate-180 object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
}
 