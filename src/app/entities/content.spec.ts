import { Content } from "./content";

describe("Notification Content", () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu um soliciatação de amizade.');
  
    expect(content).toBeTruthy();
  });
  
  it('not should be able to create a notification content with less than 5 characters', () => {
    // const content = new Content('Você recebeu um soliciatação de amizade.');
  
    expect(() => new Content('aaa')).toThrowError();
  });
  
  it('not should be able to create a notification content with more than 240 characters', () => {
    // const content = new Content('Você recebeu um soliciatação de amizade.');
  
    expect(() => new Content('a'.repeat(241))).toThrowError();
  });
});