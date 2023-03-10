import { Card } from './Card/Card';
import { PeopleListContainer } from './Card/Card.styled';
import users from '../users.json';

export const App = () => {
  return (
    <PeopleListContainer>
      {users.map(({ id, tweets, followers, avatar }) => (
        <Card
          key={id}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
          id={id}
        />
      ))}
    </PeopleListContainer>
  );
};
