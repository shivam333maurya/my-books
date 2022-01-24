export async function fetchData(endPoint: string) {
  try {
    const response = await fetch(endPoint);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("ERROR:", { error });
    return null;
  }
}
