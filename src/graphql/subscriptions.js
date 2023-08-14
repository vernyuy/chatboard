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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
