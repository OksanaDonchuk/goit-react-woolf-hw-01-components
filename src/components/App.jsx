import user from '../data/user.json';
import data from '../data/data.json';
// import friends from '../data/friends.json';
// import transactions from '../data/transaction.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <div className="title">
        <h1>1 - Профіль соціальної мережі</h1>
      </div>
      <Profile {...user} />
      <div className="title">
        <h1>2 - Секція статистики</h1>
      </div>
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
