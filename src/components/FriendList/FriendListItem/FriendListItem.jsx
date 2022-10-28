import PropTypes from 'prop-types';

export const FriendListItem = ({ id, isOnline, avatar, name }) =>{
    return (
            <li key = {id} class="item">
                <span class="status">{isOnline}</span>
                <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
            </li>
     )
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};