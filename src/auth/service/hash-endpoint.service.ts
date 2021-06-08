import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashEndpointService {
  private readonly dictionary: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  async getHashEndpoing(wordLength: number): Promise<string | undefined> {
    try {
      let randomWord = '';
      for (let i = 0; i < wordLength; i++) {
        const index = Math.floor(
          Math.random() * (this.dictionary.length - 1 - 0) + 0,
        );
        randomWord += this.dictionary[index];
      }
      const saltRounds = await bcrypt.genSalt();
      const hashed = await bcrypt.hash(randomWord, saltRounds);
      return hashed;
    } catch (error) {
      return error.message;
    }
  }
}
