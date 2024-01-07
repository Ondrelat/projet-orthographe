import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import * as AWS from 'aws-sdk';

@Injectable()
export class PollyService {
    private readonly polly: AWS.Polly;

    constructor() {
        // Configure AWS avec les informations d'identification et la région
        AWS.config.update({
            region: 'us-west-2'
        });

        // Créer une instance de AWS Polly
        this.polly = new AWS.Polly();
    }

    async synthesizeSpeech(text: string): Promise<Buffer> {

        const modifiedText = text
            .replace(/,/g, " virgule <break time='300ms'/>")
            .replace(/\./g, "<break time='200ms'/> point <break time='700ms'/>");

        const ssmlText = `<speak>${modifiedText}</speak>`;

        // Paramètres pour la synthèse vocale
        const params = {
            Text: ssmlText,
            OutputFormat: 'mp3', // Format de sortie (mp3, ogg_vorbis, etc.)
            VoiceId: 'Lea',
            TextType: 'ssml',  // ID de la voix (Joanna, Matthew, etc.)
            // Autres paramètres optionnels...
        };


        // Appeler AWS Polly pour synthétiser le texte
        const { AudioStream } = await this.polly.synthesizeSpeech(params).promise();

        // AudioStream est un Buffer contenant l'audio synthétisé
        return AudioStream as Buffer;
    }

    async saveAudioFile(audioStream: Buffer, fileName: string) {
        //const directoryPath = join(__dirname, 'C:\Users\avril\Desktop\projet-orthographe\client\public\audios');
        const filePath = join('..\\client\\public\\audios', fileName);
        writeFile(filePath, audioStream);
        return filePath;
    }




}
