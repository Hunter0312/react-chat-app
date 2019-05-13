import {IUserInfo} from "../../../types/Types";
import {IActionFriends, TypeActionFriends} from "./actionFriends";

export interface IReducerFriends {
    friends: Array<IUserInfo>;
    pendingFriends: Array<IUserInfo>;
    searchedFriends: Array<IUserInfo>;
    selectedFriend?: IUserInfo;
}

const initialFriendsState: IReducerFriends = {
    friends: [],
    pendingFriends: [],
    searchedFriends: []
};

export default (state: IReducerFriends = initialFriendsState, action: IActionFriends) => {
    switch (action.type) {
        case TypeActionFriends.UpdateFriendlist:
            return reducerUpdateFriendsList(state, action);
        case TypeActionFriends.Search:
            return reducerFriendsSearched(state, action);
        case TypeActionFriends.Select:
            return reducerSelectFriend(state, action);
        default:
            return state;
    }
}

const reducerUpdateFriendsList = (state: IReducerFriends, action: IActionFriends): IReducerFriends => ({
    ...state,
    friends: [...action.friendList!]
});

const reducerSelectFriend = (state: IReducerFriends, action: IActionFriends): IReducerFriends => ({
    ...state,
    selectedFriend: action.friend
});

const reducerFriendsSearched = (state: IReducerFriends, action: IActionFriends): IReducerFriends => ({
    ...state,
    searchedFriends: action.friendList!
});
