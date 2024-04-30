const REPLICATE_MODEL_VERSION="ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4";

 const startGeneration = async (prompt) => {
   const response = await fetch(
     `${process.env.REPLICATE_API_URL}/predictions`,
     {
       headers: {
         Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
         "Content-Type": "application/json",
       },
       method: "POST",
       body: JSON.stringify({
         version: REPLICATE_MODEL_VERSION,
         input: { prompt },
       }),
     }
   );

   return response.json();
 };

const getGeneration = async (url) => {
  const result = await fetch(url, {
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  return result.json();
};

export default async function handler(request, response) {
  const { prompt } = request.body;

  if (!prompt) {
    return response.status(400).json("No prompt provided");
  }

  const predictions = await startGeneration(prompt);

  await new Promise((resolve) => setTimeout(resolve,100)); 

  let generatedImage;

  while (!generatedImage) {
    const result = await getGeneration(predictions.urls.get);

    if (result.status === "succeeded") {
      [generatedImage] = result.output;
    } else if (result.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  response
    .status(200)
    .json(generatedImage ? generatedImage : "Failed to create the image");
}




