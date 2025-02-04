export const letsFetch = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("errore generated by cami");
    }
    const data = response.json();
    return data;
  } catch (err) {
    return { error: err };
  }
};
