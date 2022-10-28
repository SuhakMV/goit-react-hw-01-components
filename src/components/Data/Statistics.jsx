import PropTypes from 'prop-types';

export const Statistics = ({ title, stats}) => {
    return (<section class="statistics">
    <h2 class="title">{title}</h2>
  
    <ul class="stat-list">
      {stats.map(({ id, label, percentage}) => (
        <li key ={id} class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
      ))}
    </ul>
  </section>
    );
};  

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.string.isRequired,
      })
  ),
}