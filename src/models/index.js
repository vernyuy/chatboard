// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserStatus = {
  "BLOCKED": "BLOCKED",
  "DELETED": "DELETED",
  "ACTIVE": "ACTIVE"
};

const MessageStatus = {
  "SENT": "SENT",
  "RECEIVED": "RECEIVED"
};

const MessageType = {
  "TEXT": "TEXT",
  "VIDEO": "VIDEO",
  "AUDIO": "AUDIO"
};

const { Message, User, chatRooms, MessagechatRooms, ChatRoomsUser } = initSchema(schema);

export {
  Message,
  User,
  chatRooms,
  MessagechatRooms,
  ChatRoomsUser,
  UserStatus,
  MessageStatus,
  MessageType
};