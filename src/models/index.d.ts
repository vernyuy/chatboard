import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messageFrom?: User | null;
  readonly messageTo?: User | null;
  readonly createAt?: string | null;
  readonly body?: string | null;
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
  readonly messageFrom: AsyncItem<User | undefined>;
  readonly messageTo: AsyncItem<User | undefined>;
  readonly createAt?: string | null;
  readonly body?: string | null;
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
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly image?: string | null;
  readonly message?: (Message | null)[] | null;
  readonly rooms?: (chatRooms | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomsMembersId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly image?: string | null;
  readonly message: AsyncCollection<Message>;
  readonly rooms: AsyncCollection<chatRooms>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomsMembersId?: string | null;
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
  readonly members?: (User | null)[] | null;
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
  readonly members: AsyncCollection<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userRoomsId?: string | null;
}

export declare type chatRooms = LazyLoading extends LazyLoadingDisabled ? EagerchatRooms : LazychatRooms

export declare const chatRooms: (new (init: ModelInit<chatRooms>) => chatRooms) & {
  copyOf(source: chatRooms, mutator: (draft: MutableModel<chatRooms>) => MutableModel<chatRooms> | void): chatRooms;
}