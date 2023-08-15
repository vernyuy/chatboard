/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      message
      createdOn
      messageType
      user {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      chatRooms {
        items {
          id
          messageId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messageStatus
      messageTo {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      messageUserId
      messageMessageToId
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      message
      createdOn
      messageType
      user {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      chatRooms {
        items {
          id
          messageId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messageStatus
      messageTo {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      messageUserId
      messageMessageToId
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      message
      createdOn
      messageType
      user {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      chatRooms {
        items {
          id
          messageId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messageStatus
      messageTo {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      messageUserId
      messageMessageToId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      cognitoId
      profileImageUrl
      rooms {
        items {
          id
          name
          createAt
          createdAt
          updatedAt
          userRoomsId
          __typename
        }
        nextToken
        __typename
      }
      chatroomss {
        items {
          id
          userId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      userStatus
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      cognitoId
      profileImageUrl
      rooms {
        items {
          id
          name
          createAt
          createdAt
          updatedAt
          userRoomsId
          __typename
        }
        nextToken
        __typename
      }
      chatroomss {
        items {
          id
          userId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      userStatus
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      cognitoId
      profileImageUrl
      rooms {
        items {
          id
          name
          createAt
          createdAt
          updatedAt
          userRoomsId
          __typename
        }
        nextToken
        __typename
      }
      chatroomss {
        items {
          id
          userId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      userStatus
      updatedAt
      __typename
    }
  }
`;
export const createChatRooms = /* GraphQL */ `
  mutation CreateChatRooms(
    $input: CreateChatRoomsInput!
    $condition: ModelChatRoomsConditionInput
  ) {
    createChatRooms(input: $input, condition: $condition) {
      id
      name
      createdBy {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      createAt
      members {
        items {
          id
          userId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          messageId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userRoomsId
      __typename
    }
  }
`;
export const updateChatRooms = /* GraphQL */ `
  mutation UpdateChatRooms(
    $input: UpdateChatRoomsInput!
    $condition: ModelChatRoomsConditionInput
  ) {
    updateChatRooms(input: $input, condition: $condition) {
      id
      name
      createdBy {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      createAt
      members {
        items {
          id
          userId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          messageId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userRoomsId
      __typename
    }
  }
`;
export const deleteChatRooms = /* GraphQL */ `
  mutation DeleteChatRooms(
    $input: DeleteChatRoomsInput!
    $condition: ModelChatRoomsConditionInput
  ) {
    deleteChatRooms(input: $input, condition: $condition) {
      id
      name
      createdBy {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      createAt
      members {
        items {
          id
          userId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          messageId
          chatRoomsId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userRoomsId
      __typename
    }
  }
`;
export const createMessagechatRooms = /* GraphQL */ `
  mutation CreateMessagechatRooms(
    $input: CreateMessagechatRoomsInput!
    $condition: ModelMessagechatRoomsConditionInput
  ) {
    createMessagechatRooms(input: $input, condition: $condition) {
      id
      messageId
      chatRoomsId
      message {
        id
        message
        createdOn
        messageType
        user {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        chatRooms {
          nextToken
          __typename
        }
        messageStatus
        messageTo {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        messageUserId
        messageMessageToId
        __typename
      }
      chatRooms {
        id
        name
        createdBy {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createAt
        members {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userRoomsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMessagechatRooms = /* GraphQL */ `
  mutation UpdateMessagechatRooms(
    $input: UpdateMessagechatRoomsInput!
    $condition: ModelMessagechatRoomsConditionInput
  ) {
    updateMessagechatRooms(input: $input, condition: $condition) {
      id
      messageId
      chatRoomsId
      message {
        id
        message
        createdOn
        messageType
        user {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        chatRooms {
          nextToken
          __typename
        }
        messageStatus
        messageTo {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        messageUserId
        messageMessageToId
        __typename
      }
      chatRooms {
        id
        name
        createdBy {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createAt
        members {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userRoomsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMessagechatRooms = /* GraphQL */ `
  mutation DeleteMessagechatRooms(
    $input: DeleteMessagechatRoomsInput!
    $condition: ModelMessagechatRoomsConditionInput
  ) {
    deleteMessagechatRooms(input: $input, condition: $condition) {
      id
      messageId
      chatRoomsId
      message {
        id
        message
        createdOn
        messageType
        user {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        chatRooms {
          nextToken
          __typename
        }
        messageStatus
        messageTo {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        messageUserId
        messageMessageToId
        __typename
      }
      chatRooms {
        id
        name
        createdBy {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createAt
        members {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userRoomsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChatRoomsUser = /* GraphQL */ `
  mutation CreateChatRoomsUser(
    $input: CreateChatRoomsUserInput!
    $condition: ModelChatRoomsUserConditionInput
  ) {
    createChatRoomsUser(input: $input, condition: $condition) {
      id
      userId
      chatRoomsId
      user {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      chatRooms {
        id
        name
        createdBy {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createAt
        members {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userRoomsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateChatRoomsUser = /* GraphQL */ `
  mutation UpdateChatRoomsUser(
    $input: UpdateChatRoomsUserInput!
    $condition: ModelChatRoomsUserConditionInput
  ) {
    updateChatRoomsUser(input: $input, condition: $condition) {
      id
      userId
      chatRoomsId
      user {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      chatRooms {
        id
        name
        createdBy {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createAt
        members {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userRoomsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteChatRoomsUser = /* GraphQL */ `
  mutation DeleteChatRoomsUser(
    $input: DeleteChatRoomsUserInput!
    $condition: ModelChatRoomsUserConditionInput
  ) {
    deleteChatRoomsUser(input: $input, condition: $condition) {
      id
      userId
      chatRoomsId
      user {
        id
        username
        email
        cognitoId
        profileImageUrl
        rooms {
          nextToken
          __typename
        }
        chatroomss {
          nextToken
          __typename
        }
        createdAt
        userStatus
        updatedAt
        __typename
      }
      chatRooms {
        id
        name
        createdBy {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          __typename
        }
        createAt
        members {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userRoomsId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
