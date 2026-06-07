import Image from "next/image";

export default function PhoneMockup({ src, alt = "App screen", className = "" }) {
  return (
    <div
      className={`relative mx-auto w-[230px] rounded-[2.4rem] border-[7px] border-slate-900 bg-slate-900 p-1 shadow-[0_28px_60px_-18px_rgba(37,99,235,0.4)] sm:w-[250px] ${className}`}
    >
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" />
      <div className="overflow-hidden rounded-[1.95rem] bg-white">
        <Image
          src={src}
          alt={alt}
          width={520}
          height={1100}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}