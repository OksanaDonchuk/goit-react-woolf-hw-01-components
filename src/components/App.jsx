import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
// import transactions from '../data/transaction.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <div className="title">
        <h2>1 - Профіль соціальної мережі</h2>
      </div>
      <Profile {...user} />

      <div className="title">
        <h2>2 - Секція статистики</h2>
      </div>
      <Statistics title="Upload stats" stats={data} />

      <div className="title">
        <h2>3 - Список друзів</h2>
      </div>
      <FriendList friends={friends} />
    </div>
  );
};
