const GET = async () => {
  try {
    // Calcular a data de um ano atrás
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const formattedDate = oneYearAgo.toISOString().split("T")[0];

    // Parâmetros da API
    const apiKey = process.env.TMDB_API_KEY;
    const language = "pt-BR";
    const sortBy = "popularity.desc"; // Ordenar por popularidade descendente
    const releaseDateGte = formattedDate; // Data de lançamento maior ou igual a um ano atrás

    // Montar a URL com os parâmetros
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=${sortBy}&release_date.gte=${releaseDateGte}`;

    // Realizar a requisição
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro ao buscar dados");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Erro na solicitação:", error);
    return new Response(JSON.stringify({ error: "Erro na solicitação" }), {
      status: 500,
    });
  }
};

export { GET };
