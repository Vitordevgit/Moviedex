const GET = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=pt-BR`
  );
  const data = await response.json();
  return Response.json(data);
};

export { GET };
