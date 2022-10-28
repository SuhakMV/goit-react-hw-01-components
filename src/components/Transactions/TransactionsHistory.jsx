import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ items }) => {
    return (
    <table className={css.transaction_history}>
    <thead className={css.transaction_head}>
      <tr className={css.table_item}>
        <th className={css.title}>Type</th>
        <th className={css.title}>Amount</th>
        <th className={css.title}>Currency</th>
      </tr>
    </thead>
  
    <tbody className={css.table}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key = {id} className={css.table_item}>
          <td className={css.table_item_cell}>{type}</td>
          <td className={css.table_item_cell}>{amount}</td>
          <td className={css.table_item_cell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string,
          type: PropTypes.string,
          amount: PropTypes.string,
          currency: PropTypes.string,
      })
  ),
}