import Image from "next/image";
import { title } from "process";

const CardMovie = () => {
  const data = {
    title: "O Poderoso Chefão",
    releaseDate: "1972",
    voteAverage: 9.2,
    posterPath: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  };
  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.posterPath}`}
        alt="O Poderoso Chefão"
        width={150}
        height={225}
      />

      <p className="font-light">{data.title}</p>
      <p className="font-light">{data.releaseDate}</p>
      <p className="font-light">Nota: {data.voteAverage}/10</p>
    </div>
  );
};

export default CardMovie;
