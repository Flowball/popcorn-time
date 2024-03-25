import Image from "next/image";

interface MovieCardProps {
  title: string;
  year: number;
  rating: string;
  actors: string[];
  genre: string;
  synopsis: string;
  thumbnail: string;
  slug: string;
}

export default function MovieCard(props: MovieCardProps) {
  const item = props;
  return (
    <div>
      <Image src={props.thumbnail} alt={props.title} width={100} height={100} />
    </div>
  );
}
