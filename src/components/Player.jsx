export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symnbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
