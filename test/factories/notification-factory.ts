import { Content } from "@app/entities/content";
import { INotificationProps, Notification } from "@app/entities/notifications";

type Override = Partial<INotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova soliciatação de amizade!'),
    recipientId: 'recipient-2',
    ...override
  });
}