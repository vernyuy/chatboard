// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserStatus = {
  "BLOCKED": "BLOCKED",
  "DELETED": "DELETED",
  "ACTIVE": "ACTIVE"
};

const MessageType = {
  "TEXT": "TEXT",
  "IMAGE": "IMAGE"
};

const { Message, User, ChatRoom, GroupMember } = initSchema(schema);

export {
  Message,
  User,
  ChatRoom,
  GroupMember,
  UserStatus,
  MessageType
};