import React from "react";
import Profile from "./profile/Profile";
import user from "./profile/user.json";
import Statistics from "./statistics/Statistics";
import statisticalData from "./statistics/statistical-data.json";
import FriendList from "./friendList/FriendList";
import friends from "./friendList/friends.json";
import TransactionHistory from "./transaction/TransactionHistory";
import transactions from "./transaction/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      // {...user}
    />

    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
