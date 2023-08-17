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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createGroupMember = /* GraphQL */ `
  mutation CreateGroupMember(
    $input: CreateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    createGroupMember(input: $input, condition: $condition) {
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
export const updateGroupMember = /* GraphQL */ `
  mutation UpdateGroupMember(
    $input: UpdateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    updateGroupMember(input: $input, condition: $condition) {
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
export const deleteGroupMember = /* GraphQL */ `
  mutation DeleteGroupMember(
    $input: DeleteGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    deleteGroupMember(input: $input, condition: $condition) {
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
