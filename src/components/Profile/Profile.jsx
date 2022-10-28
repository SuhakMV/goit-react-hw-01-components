import PropTypes from 'prop-types';
import './Profile.css';
import { ProfileStats } from './ProfileStats/ProfileStats';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  //console.log(props);
    return <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
  <ProfileStats 
    followers={stats.followers}
    views={stats.views}
    likes={stats.likes}
/>
</div>;
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};