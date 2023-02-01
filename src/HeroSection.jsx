import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-teal-50">
    <div className="max-w-7xl flex-1 flex items-center justify-between">
      <div className="space-y-5 px-20 py-10">
        <h1 className="max-w-xl text-[2.5rem] mb-5">
          “Nothing happens in the ‘real’ world unless it first happens in the
          images in our heads”
        </h1>
        <Link href="/about">
          <button className="bg-black text-white py-2 px-4 rounded-full">
            Learn More
          </button>
        </Link>
      </div>
      <Image className="hidden h-96 md:inline-flex object-contain flex-1" src="/hero_image.svg" alt="hero_image"  width={500} height={400}/>
      </div>
      </div>
  );
};
export default HeroSection;
