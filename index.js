import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.ASI_ONE_API_KEY,
  baseURL: 'https://api.asi1.ai/v1',
});

const response = await client.chat.completions.create({
  model: 'asi1',
  messages: [{ role: 'user', content: 'whats ypur token details' }],
});

console.log(response.choices[0].message.content);
