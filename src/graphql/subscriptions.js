/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      message
      createdOn
      messageType
      user {
        id
        username
        email
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      message
      createdOn
      messageType
      user {
        id
        username
        email
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      message
      createdOn
      messageType
      user {
        id
        username
        email
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
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
export const onCreateChatRooms = /* GraphQL */ `
  subscription OnCreateChatRooms(
    $filter: ModelSubscriptionChatRoomsFilterInput
  ) {
    onCreateChatRooms(filter: $filter) {
      id
      name
      createdBy {
        id
        username
        email
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
export const onUpdateChatRooms = /* GraphQL */ `
  subscription OnUpdateChatRooms(
    $filter: ModelSubscriptionChatRoomsFilterInput
  ) {
    onUpdateChatRooms(filter: $filter) {
      id
      name
      createdBy {
        id
        username
        email
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
export const onDeleteChatRooms = /* GraphQL */ `
  subscription OnDeleteChatRooms(
    $filter: ModelSubscriptionChatRoomsFilterInput
  ) {
    onDeleteChatRooms(filter: $filter) {
      id
      name
      createdBy {
        id
        username
        email
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
export const onCreateMessagechatRooms = /* GraphQL */ `
  subscription OnCreateMessagechatRooms(
    $filter: ModelSubscriptionMessagechatRoomsFilterInput
  ) {
    onCreateMessagechatRooms(filter: $filter) {
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
export const onUpdateMessagechatRooms = /* GraphQL */ `
  subscription OnUpdateMessagechatRooms(
    $filter: ModelSubscriptionMessagechatRoomsFilterInput
  ) {
    onUpdateMessagechatRooms(filter: $filter) {
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
export const onDeleteMessagechatRooms = /* GraphQL */ `
  subscription OnDeleteMessagechatRooms(
    $filter: ModelSubscriptionMessagechatRoomsFilterInput
  ) {
    onDeleteMessagechatRooms(filter: $filter) {
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
export const onCreateChatRoomsUser = /* GraphQL */ `
  subscription OnCreateChatRoomsUser(
    $filter: ModelSubscriptionChatRoomsUserFilterInput
  ) {
    onCreateChatRoomsUser(filter: $filter) {
      id
      userId
      chatRoomsId
      user {
        id
        username
        email
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
export const onUpdateChatRoomsUser = /* GraphQL */ `
  subscription OnUpdateChatRoomsUser(
    $filter: ModelSubscriptionChatRoomsUserFilterInput
  ) {
    onUpdateChatRoomsUser(filter: $filter) {
      id
      userId
      chatRoomsId
      user {
        id
        username
        email
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
export const onDeleteChatRoomsUser = /* GraphQL */ `
  subscription OnDeleteChatRoomsUser(
    $filter: ModelSubscriptionChatRoomsUserFilterInput
  ) {
    onDeleteChatRoomsUser(filter: $filter) {
      id
      userId
      chatRoomsId
      user {
        id
        username
        email
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
