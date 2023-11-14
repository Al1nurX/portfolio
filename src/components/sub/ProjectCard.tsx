import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

export default function ProjectCard({ src, title, description }: Props) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <div className="text-2xl font-semibold text-white">{title}</div>
        <div className="mt-2 text-gray-300">{description}</div>
      </div>
    </div>
  );
}
