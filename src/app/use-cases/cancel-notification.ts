import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ICancelNotificationRequest {
  notificationId: string;
}

type ICancelNotificationResponse = void

@Injectable()
export class CancelNotification {
  constructor(
    private notificationRepository: NotificationsRepository
  ) {}

  async execute(request: ICancelNotificationRequest): Promise<ICancelNotificationResponse> {
    const { notificationId } = request;
    
    const notification = await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationRepository.save(notification);

  }
}