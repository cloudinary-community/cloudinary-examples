import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const formData = await req.formData();

  try {
    const metadata = JSON.parse(formData.get('metadata') as string);

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      body: JSON.stringify({
        prompt: metadata.variables.prompt,
        n: metadata.variables.n || 1,
        size: metadata.variables.size || '512x512',
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
    });
    
    const data = await response.json();
    
    const imageResponse = await fetch(data.data[0].url);

    return imageResponse
  } catch (e) {
    console.log(`Failed to generate image: ${e}`)
    return new Response(
      JSON.stringify({
        error: `Error generating image: ${e}`
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        },
        
      }
    );
  }
}
