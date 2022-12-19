import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ICountRecipientNotificationsRequest {
  recipientId: string;
}

interface ICountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(
    private notificationRepository: NotificationsRepository
  ) {}

  async execute(request: ICountRecipientNotificationsRequest): Promise<ICountRecipientNotificationsResponse> {
    const { recipientId } = request;
    
    const count = await this.notificationRepository.countManyByRecipientId(recipientId);

    return {
      count
    };

  }
}