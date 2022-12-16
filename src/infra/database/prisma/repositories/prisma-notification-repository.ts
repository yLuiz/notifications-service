import { Injectable } from "@nestjs/common";
import { Notification } from "@app/entities/notifications";
import { NotificationsRepository } from "@app/repositories/notification-repository";
import { PrismaService } from "../prisma.service";
import { PrismNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {

  constructor(
    private prismaService: PrismaService
  ) {}

  async create(notification: Notification) {

    const raw = PrismNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw
    })
  }
  
  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error("Method not implemented.");
  }

  async save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }
}