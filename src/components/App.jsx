import { Profile } from './Profile/Profile';
import { Statistics } from './Data/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/TransactionsHistory';

import user from '../components/Profile/user.json';
import data from '../components/Data/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/Transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title='Upload stats'
        stats = {data} 
      />
      <FriendList friends = {friends}/>
      <Transactions items = {transactions}/>
    </div>
  );
};
