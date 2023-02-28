export const fetcher = async (path) => {
  const response = await fetch(path, {
    method: "GET",
    credentials: "include",
  });

  console.log("res", response);

  if (!response.ok) {
    throw new Error("Fetch request failed");
  }

  return await response.json();
};
