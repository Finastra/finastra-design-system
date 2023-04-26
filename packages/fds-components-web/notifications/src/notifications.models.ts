export interface UserNotification {
  type: UserNotificationType;
  state: 'new' | 'read';
  /**
   * @minLength 8
   * @maxLength 340
   */
  message: string;
  /**
   * @minLength 8
   * @maxLength 128
   */
  link?: string;
  /**
   * @minLength 8
   * @maxLength 128
   */
  extraId?: string;
  unDeletable?: boolean;

  id: string;
  createdOn?: Date;
  source: UserPortal;
}

export enum UserNotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info'
}

export type UserPortal = 'all' | 'devPortal' | 'adminPortal' | 'orgPortal';
