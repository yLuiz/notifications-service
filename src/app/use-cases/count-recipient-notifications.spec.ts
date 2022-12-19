import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(notificationRepository);

    await notificationRepository.create(makeNotification({ recipientId: 'recipient-1'}));

    await notificationRepository.create(makeNotification({ recipientId: 'recipient-1'}));

    await notificationRepository.create(makeNotification({ recipientId: 'recipient-2'}));

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1'
    });

    expect(count).toEqual(2);

  });
});