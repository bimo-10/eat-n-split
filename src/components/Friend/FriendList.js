import Friend from "./Friend";

export default function FriendList({
  friends,
  onSelectedFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            onSelectedFriend={onSelectedFriend}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
