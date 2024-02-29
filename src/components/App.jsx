import user from '../data/user.json';
// import data from '../data/data.json';
// import friends from '../data/friends.json';
// import transactions from '../data/transaction.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <div>
      <div className="title">
        <h1>1 - Профіль соціальної мережі</h1>
      </div>
      <Profile {...user} />
    </div>
  );
};
