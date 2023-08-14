/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
          startedAt
          __typename
        }
        createdAt
        userStatus
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      chatRooms {
        items {
          id
          messageId
          chatRoomsId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
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
          startedAt
          __typename
        }
        createdAt
        userStatus
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      messageUserId
      messageMessageToId
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chatRooms {
          nextToken
          startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageUserId
        messageMessageToId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chatRooms {
          nextToken
          startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        messageUserId
        messageMessageToId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      userStatus
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          startedAt
          __typename
        }
        createdAt
        userStatus
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          startedAt
          __typename
        }
        createdAt
        userStatus
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getChatRooms = /* GraphQL */ `
  query GetChatRooms($id: ID!) {
    getChatRooms(id: $id) {
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
          startedAt
          __typename
        }
        createdAt
        userStatus
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      messages {
        items {
          id
          messageId
          chatRoomsId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRoomsId
      __typename
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createAt
        members {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userRoomsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createAt
        members {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userRoomsId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMessagechatRooms = /* GraphQL */ `
  query GetMessagechatRooms($id: ID!) {
    getMessagechatRooms(id: $id) {
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chatRooms {
          nextToken
          startedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createAt
        members {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userRoomsId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMessagechatRooms = /* GraphQL */ `
  query ListMessagechatRooms(
    $filter: ModelMessagechatRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagechatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
        chatRoomsId
        message {
          id
          message
          createdOn
          messageType
          messageStatus
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          messageUserId
          messageMessageToId
          __typename
        }
        chatRooms {
          id
          name
          createAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRoomsId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessagechatRooms = /* GraphQL */ `
  query SyncMessagechatRooms(
    $filter: ModelMessagechatRoomsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessagechatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        messageId
        chatRoomsId
        message {
          id
          message
          createdOn
          messageType
          messageStatus
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          messageUserId
          messageMessageToId
          __typename
        }
        chatRooms {
          id
          name
          createAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRoomsId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getChatRoomsUser = /* GraphQL */ `
  query GetChatRoomsUser($id: ID!) {
    getChatRoomsUser(id: $id) {
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
          startedAt
          __typename
        }
        createdAt
        userStatus
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        createAt
        members {
          nextToken
          startedAt
          __typename
        }
        messages {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userRoomsId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listChatRoomsUsers = /* GraphQL */ `
  query ListChatRoomsUsers(
    $filter: ModelChatRoomsUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomsUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        chatRoomsId
        user {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chatRooms {
          id
          name
          createAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRoomsId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChatRoomsUsers = /* GraphQL */ `
  query SyncChatRoomsUsers(
    $filter: ModelChatRoomsUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRoomsUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        chatRoomsId
        user {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chatRooms {
          id
          name
          createAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRoomsId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const messagechatRoomsByMessageId = /* GraphQL */ `
  query MessagechatRoomsByMessageId(
    $messageId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessagechatRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagechatRoomsByMessageId(
      messageId: $messageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
        chatRoomsId
        message {
          id
          message
          createdOn
          messageType
          messageStatus
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          messageUserId
          messageMessageToId
          __typename
        }
        chatRooms {
          id
          name
          createAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRoomsId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const messagechatRoomsByChatRoomsId = /* GraphQL */ `
  query MessagechatRoomsByChatRoomsId(
    $chatRoomsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessagechatRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagechatRoomsByChatRoomsId(
      chatRoomsId: $chatRoomsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageId
        chatRoomsId
        message {
          id
          message
          createdOn
          messageType
          messageStatus
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          messageUserId
          messageMessageToId
          __typename
        }
        chatRooms {
          id
          name
          createAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRoomsId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const chatRoomsUsersByUserId = /* GraphQL */ `
  query ChatRoomsUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomsUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomsUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomsId
        user {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chatRooms {
          id
          name
          createAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRoomsId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const chatRoomsUsersByChatRoomsId = /* GraphQL */ `
  query ChatRoomsUsersByChatRoomsId(
    $chatRoomsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomsUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomsUsersByChatRoomsId(
      chatRoomsId: $chatRoomsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomsId
        user {
          id
          username
          email
          cognitoId
          profileImageUrl
          createdAt
          userStatus
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        chatRooms {
          id
          name
          createAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userRoomsId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
