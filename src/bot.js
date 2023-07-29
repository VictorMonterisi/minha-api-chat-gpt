import { Configuration, OpenAIApi } from "openai";

import * as dotenv from 'dotenv';

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export function create(prompt) {
    return openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 7,
        temperature: 0,
      });
}