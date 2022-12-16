import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { Notification } from "../entities/notifications"
import { Content } from "../entities/content";
import { randomUUID } from "crypto";

describe('Cancel Notification', () => {
  it('should be able to cancel the notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content("Canceled Notification."),
      recipientId: randomUUID()
    });

    await notificationRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
  });
})