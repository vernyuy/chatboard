/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      message
      messageType
      user {
        id
        username
        email
        cognitoId
        profileImageUrl
        userStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      receiver
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userMessageId
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
        messageType
        receiver
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userMessageId
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
        messageType
        receiver
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userMessageId
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
      room {
        nextToken
        startedAt
        __typename
      }
      ChatRoom {
        nextToken
        startedAt
        __typename
      }
      userStatus
      message {
        nextToken
        startedAt
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
        userStatus
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
        userStatus
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
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      name
      User {
        id
        username
        email
        cognitoId
        profileImageUrl
        userStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      members {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userRoomId
      __typename
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userRoomId
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
    $filter: ModelChatRoomFilterInput
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userRoomId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getGroupMember = /* GraphQL */ `
  query GetGroupMember($id: ID!) {
    getGroupMember(id: $id) {
      id
      userId
      chatRoomId
      user {
        id
        username
        email
        cognitoId
        profileImageUrl
        userStatus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      chatRoom {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userRoomId
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
export const listGroupMembers = /* GraphQL */ `
  query ListGroupMembers(
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        chatRoomId
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
export const syncGroupMembers = /* GraphQL */ `
  query SyncGroupMembers(
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGroupMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        chatRoomId
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
export const groupMembersByUserId = /* GraphQL */ `
  query GroupMembersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupMembersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomId
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
export const groupMembersByChatRoomId = /* GraphQL */ `
  query GroupMembersByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupMembersByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomId
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
