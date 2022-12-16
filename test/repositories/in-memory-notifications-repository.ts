import { Notification } from "@app/entities/notifications";
import { NotificationsRepository } from "@app/repositories/notification-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository {
  findById(notificationId: string): Promise<Notification | null> {
    throw new Error("Method not implemented.");
  }
  save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public notifications: Notification[] = [];
  
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
};