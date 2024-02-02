import { useState } from "react";

export default function Player({
  namePlayer,
  symbol,
  activePlayer,
  changeName,
}) {
  const [name, setName] = useState(namePlayer);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const changeIsEditing = () => {
    setIsEditing((prev) => !prev);

    isEditing && changeName(symbol, name);
  };

  return (
    <li className={activePlayer === symbol ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            onChange={handleChange}
            className="player-name"
            value={name}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={changeIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
