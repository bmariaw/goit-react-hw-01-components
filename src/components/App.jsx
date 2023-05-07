import user from '../data/user.json';

import { Wrapper } from './App.styled';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Wrapper>
  );
};
