import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={css.status}
      style={{ backgroundColor: isOnline ? '#33d51a' : '#a74646' }}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
