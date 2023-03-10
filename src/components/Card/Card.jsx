import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Avatar,
  TextComponent,
  ElementsBox,
  FollowButton,
  FollowingButton,
} from './Card.styled';

export const Card = ({ id, tweets, followers, avatar }) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(`followers-${id}`);
    return storedValue ? parseInt(storedValue) : followers;
  });

  useEffect(() => {
    localStorage.setItem(`followers-${id}`, value);
  }, [id, value]);

  const formattedFollowers = new Intl.NumberFormat('en-US', {
    useGrouping: true,
  }).format(value);

  return (
    <Item>
      <Avatar src={avatar} alt="User avatar" />
      <ElementsBox>
        <TextComponent>{tweets} TWEETS</TextComponent>
        <TextComponent>{formattedFollowers} FOLLOWERS</TextComponent>
        {value === followers ? (
          <FollowButton type="button" onClick={() => setValue(value + 1)}>
            FOLLOW
          </FollowButton>
        ) : (
          <FollowingButton type="button" onClick={() => setValue(value - 1)}>
            FOLLOWING
          </FollowingButton>
        )}
      </ElementsBox>
    </Item>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
