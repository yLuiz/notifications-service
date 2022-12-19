import { Notification } from "@app/entities/notifications";
import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface IGetRecipientNotificationsRequest {
  recipientId: string;
}

interface IGetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(
    private notificationRepository: NotificationsRepository
  ) {}

  async execute(request: IGetRecipientNotificationsRequest): Promise<IGetRecipientNotificationsResponse> {
    const { recipientId } = request;
    
    const notifications = await this.notificationRepository.findManyByRecipientId(recipientId);

    return {
      notifications
    }
  }
}