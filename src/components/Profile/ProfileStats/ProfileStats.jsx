import PropTypes from 'prop-types';
export const ProfileStats = ({followers, views, likes}) => {
    return   <ul className="stats">
    <li className='profile-item'>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className='profile-item'>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className='profile-item'>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
};

ProfileStats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};