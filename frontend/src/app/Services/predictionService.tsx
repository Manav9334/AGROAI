export async function predictDisease(file: File) {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(
    import.meta.env.VITE_API_URL + "/predict",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  return response.json();
}