/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateGroupMember = /* GraphQL */ `
  subscription OnCreateGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
  ) {
    onCreateGroupMember(filter: $filter) {
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
export const onUpdateGroupMember = /* GraphQL */ `
  subscription OnUpdateGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
  ) {
    onUpdateGroupMember(filter: $filter) {
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
export const onDeleteGroupMember = /* GraphQL */ `
  subscription OnDeleteGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
  ) {
    onDeleteGroupMember(filter: $filter) {
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
