import PropTypes from 'prop-types';
import { Item, Name, IsOnline } from './FriendListItem.styleg';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <IsOnline isOnline={isOnline}></IsOnline>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
