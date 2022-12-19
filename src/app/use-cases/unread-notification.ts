import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface IUnreadNotificationRequest {
  notificationId: string;
}

type IunreadNotificationResponse = void

@Injectable()
export class UnreadNotification {
  constructor(
    private notificationRepository: NotificationsRepository
  ) {}

  async execute(request: IUnreadNotificationRequest): Promise<IunreadNotificationResponse> {
    const { notificationId } = request;
    
    const notification = await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);

  }
}