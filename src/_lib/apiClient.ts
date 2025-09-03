export async function getAllSimpleTravels() {
  const res = await fetch("/mock/Data/tours-simple.json");
  const simpleTravelsData = await res.json();

  return simpleTravelsData;
}
