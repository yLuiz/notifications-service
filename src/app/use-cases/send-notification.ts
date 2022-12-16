import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notifications";
import { NotificationsRepository } from "../repositories/notification-repository";

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification
}

@Injectable()
export class SendNotification {
  constructor(
    private notificationRepository: NotificationsRepository
  ) {}

  async execute(request: ISendNotificationRequest): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;
    
    const notification = new Notification({
      recipientId, 
      content: new Content(content), 
      category
    });

    this.notificationRepository.create(notification);

    return {
      notification
    }
  }
}