// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Message, User, chatRooms } = initSchema(schema);

export {
  Message,
  User,
  chatRooms
};