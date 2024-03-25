import { BookmarkIcon } from "lucide-react";
import Image from "next/image";

interface MovieCardProps {
  year: number;
  rating: string;
  thumbnail: string;
  title: string;
}

export default function MovieCard(props: MovieCardProps) {
  return (
    <div className="flex justify-center">
      <div className="relative shadow rounded-lg">
        <Image
          src={props.thumbnail}
          alt={props.thumbnail}
          width={300}
          height={300}
          className="object-contain w-full  md:max-w-lg rounded-t-lg"
        />
        <div className="absolute bg-yellow-400 top-0 right-0 p-4 rounded-bl-lg rounded-tr-lg">
          <BookmarkIcon width={45} height={45} />
        </div>
        <div className=" py-4 px-2">
          <p className="text-2xl">{props.title}</p>
          <p>Hej</p>
          <p>{props.year}</p>
        </div>
      </div>
    </div>
  );
}
