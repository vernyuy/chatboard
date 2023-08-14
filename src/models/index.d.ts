import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum UserStatus {
  BLOCKED = "BLOCKED",
  DELETED = "DELETED",
  ACTIVE = "ACTIVE"
}

export enum MessageStatus {
  SENT = "SENT",
  RECEIVED = "RECEIVED"
}

export enum MessageType {
  TEXT = "TEXT",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO"
}



type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly createdOn?: number | null;
  readonly messageType?: MessageType | keyof typeof MessageType | null;
  readonly user?: User | null;
  readonly chatRooms?: (MessagechatRooms | null)[] | null;
  readonly messageStatus?: MessageStatus | keyof typeof MessageStatus | null;
  readonly messageTo?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageUserId?: string | null;
  readonly messageMessageToId?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly createdOn?: number | null;
  readonly messageType?: MessageType | keyof typeof MessageType | null;
  readonly user: AsyncItem<User | undefined>;
  readonly chatRooms: AsyncCollection<MessagechatRooms>;
  readonly messageStatus?: MessageStatus | keyof typeof MessageStatus | null;
  readonly messageTo: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly messageUserId?: string | null;
  readonly messageMessageToId?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly cognitoId: string;
  readonly profileImageUrl?: string | null;
  readonly rooms?: (chatRooms | null)[] | null;
  readonly chatroomss?: (ChatRoomsUser | null)[] | null;
  readonly createdAt?: number | null;
  readonly userStatus?: UserStatus | keyof typeof UserStatus | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly cognitoId: string;
  readonly profileImageUrl?: string | null;
  readonly rooms: AsyncCollection<chatRooms>;
  readonly chatroomss: AsyncCollection<ChatRoomsUser>;
  readonly createdAt?: number | null;
  readonly userStatus?: UserStatus | keyof typeof UserStatus | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerchatRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<chatRooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdBy?: User | null;
  readonly createAt?: string | null;
  readonly members?: (ChatRoomsUser | null)[] | null;
  readonly messages?: (MessagechatRooms | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userRoomsId?: string | null;
}

type LazychatRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<chatRooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdBy: AsyncItem<User | undefined>;
  readonly createAt?: string | null;
  readonly members: AsyncCollection<ChatRoomsUser>;
  readonly messages: AsyncCollection<MessagechatRooms>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userRoomsId?: string | null;
}

export declare type chatRooms = LazyLoading extends LazyLoadingDisabled ? EagerchatRooms : LazychatRooms

export declare const chatRooms: (new (init: ModelInit<chatRooms>) => chatRooms) & {
  copyOf(source: chatRooms, mutator: (draft: MutableModel<chatRooms>) => MutableModel<chatRooms> | void): chatRooms;
}

type EagerMessagechatRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessagechatRooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messageId?: string | null;
  readonly chatRoomsId?: string | null;
  readonly message: Message;
  readonly chatRooms: chatRooms;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessagechatRooms = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessagechatRooms, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messageId?: string | null;
  readonly chatRoomsId?: string | null;
  readonly message: AsyncItem<Message>;
  readonly chatRooms: AsyncItem<chatRooms>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MessagechatRooms = LazyLoading extends LazyLoadingDisabled ? EagerMessagechatRooms : LazyMessagechatRooms

export declare const MessagechatRooms: (new (init: ModelInit<MessagechatRooms>) => MessagechatRooms) & {
  copyOf(source: MessagechatRooms, mutator: (draft: MutableModel<MessagechatRooms>) => MutableModel<MessagechatRooms> | void): MessagechatRooms;
}

type EagerChatRoomsUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoomsUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomsId?: string | null;
  readonly user: User;
  readonly chatRooms: chatRooms;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatRoomsUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoomsUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomsId?: string | null;
  readonly user: AsyncItem<User>;
  readonly chatRooms: AsyncItem<chatRooms>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatRoomsUser = LazyLoading extends LazyLoadingDisabled ? EagerChatRoomsUser : LazyChatRoomsUser

export declare const ChatRoomsUser: (new (init: ModelInit<ChatRoomsUser>) => ChatRoomsUser) & {
  copyOf(source: ChatRoomsUser, mutator: (draft: MutableModel<ChatRoomsUser>) => MutableModel<ChatRoomsUser> | void): ChatRoomsUser;
}