import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum UserStatus {
  BLOCKED = "BLOCKED",
  DELETED = "DELETED",
  ACTIVE = "ACTIVE"
}

export enum MessageType {
  TEXT = "TEXT",
  IMAGE = "IMAGE"
}

export enum Receiver {
  GROUP = "GROUP",
  USER = "USER"
}



type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly created_at?: number | null;
  readonly messageType?: MessageType | keyof typeof MessageType | null;
  readonly user?: User | null;
  readonly receiver?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMessageId?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly created_at?: number | null;
  readonly messageType?: MessageType | keyof typeof MessageType | null;
  readonly user: AsyncItem<User | undefined>;
  readonly receiver?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userMessageId?: string | null;
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
  readonly room?: (ChatRoom | null)[] | null;
  readonly ChatRoom?: (GroupMember | null)[] | null;
  readonly createdAt?: number | null;
  readonly userStatus?: UserStatus | keyof typeof UserStatus | null;
  readonly message?: (Message | null)[] | null;
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
  readonly room: AsyncCollection<ChatRoom>;
  readonly ChatRoom: AsyncCollection<GroupMember>;
  readonly createdAt?: number | null;
  readonly userStatus?: UserStatus | keyof typeof UserStatus | null;
  readonly message: AsyncCollection<Message>;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly User?: User | null;
  readonly createAt?: string | null;
  readonly members?: (GroupMember | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userRoomId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly User: AsyncItem<User | undefined>;
  readonly createAt?: string | null;
  readonly members: AsyncCollection<GroupMember>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userRoomId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerGroupMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: User;
  readonly chatRoom: ChatRoom;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: AsyncItem<User>;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupMember = LazyLoading extends LazyLoadingDisabled ? EagerGroupMember : LazyGroupMember

export declare const GroupMember: (new (init: ModelInit<GroupMember>) => GroupMember) & {
  copyOf(source: GroupMember, mutator: (draft: MutableModel<GroupMember>) => MutableModel<GroupMember> | void): GroupMember;
}