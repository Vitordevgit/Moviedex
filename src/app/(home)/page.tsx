import CardMovie from "@/components/ui/cardMovie";

export default function Home() {
  return (
    <div className="text-primary flex flex-col items-center pt-5">
      <div className="">
        <p className="text-2xl font-light">Liste seus filmes favoritos.</p>
        <p className="text-2xl font-light">
          Crie uma lista de filmes para assistir.
        </p>
        <p className="text-2xl font-light">Compartilhe seas analises.</p>
        <p className="text-2xl font-bold text-secondary">
          Tudo isso sem anúncios.
        </p>
        <CardMovie />
      </div>
    </div>
  );
}
