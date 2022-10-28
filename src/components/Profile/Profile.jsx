import PropTypes from 'prop-types';
import { ProfileStats } from './ProfileStats/ProfileStats';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  //console.log(props);
    return <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
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