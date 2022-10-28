import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import { FriendListItem } from "./FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(({ id, avatar, name, isOnline }) =>(
                <FriendListItem 
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    ); 
};

FriendListItem.protoType = {
    friends: PropTypes.arrayOf({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }),
};