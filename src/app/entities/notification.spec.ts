import { Content } from "./content";
import { Notification } from "./notifications";

describe("Notification", () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new Content('Nova Solicitação'),
      recipientId: 'example-recipient-id'
    });
  
    expect(notification).toBeTruthy();
  });
}); 