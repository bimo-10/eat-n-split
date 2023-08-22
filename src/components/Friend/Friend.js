import Button from "../Button/Button";

export default function Friend({ friend, onSelectedFriend, selectedFriend }) {
  // console.log(selectedFriend.id);

  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you ${friend.balance}
        </p>
      )}

      {friend.balance === 0 && (
        <p className="">{friend.name} and you are even</p>
      )}

      <Button onClick={() => onSelectedFriend(friend)} className="button">
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
