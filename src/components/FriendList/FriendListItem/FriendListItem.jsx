import PropTypes from 'prop-types';
import css from '../Friendlist.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) =>{
    return (
            <li key = {id} className={css.item}>
                <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
     )
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};