export async function getAllCharacters(page = 1) {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    return data;
  }