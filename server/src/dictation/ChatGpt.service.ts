/*
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChatGptService {
  private readonly apiUrl = 'https://api.openai.com/v1/messages';

  async getHelpBubble(text: string): Promise<string> {
    // Configuration de la requête
    const response = await axios.post(this.apiUrl, {  Paramètres de la requête  });
    // Traitement de la réponse
    return response.data.choices[0].message.content;
  }
}
*/