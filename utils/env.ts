import fs from 'fs';

export class Env {
  static setEnvVariable(key: string, value: string) {
    const envLine = `${key}=${value}\n`;
    fs.appendFileSync('.env', envLine); // Appends or creates file
  }

  static clearEnv() {
    fs.writeFileSync('.env', ''); // Optional: clears existing env
  }

  static getEnvVariable(key: string): string | undefined {
    return process.env[key];
  }
}
