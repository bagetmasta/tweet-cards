import styled from 'styled-components';
import logo from '../../images/logo.png';
import picture from '../../images/picture.png';

export const Item = styled.li`
  position: relative;
  margin: 15px;
  height: 460px;

  background: url(${logo}) no-repeat top 20px left 20px,
    url(${picture}) no-repeat top 29px left 50%,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    width: 100%;
    height: 8px;
  }

  @media (min-width: 600px) {
    flex-basis: calc((100% - 2 * 50px) / 2);
  }

  @media (min-width: 1024px) {
    flex-basis: calc((100% - 2 * 50px) / 3);
  }
`;

export const PeopleListContainer = styled.ul`
  font-family: 'Montserrat';

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 600px) and (max-width: 1023.98px) {
    justify-content: center;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;

  border: 8px solid #ebd8ff;
  border-radius: 50%;
  padding: 2px;
  z-index: 10;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const TextComponent = styled.p`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
`;

export const ElementsBox = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateY(-50%, -50%);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 431px) {
    bottom: 20px;
  }

  @media (min-width: 600px) and (max-width: 901px) {
    bottom: 26px;
  }

  @media (min-width: 1024px) and (max-width: 1339.98px) {
    bottom: 23px;
  }
`;

export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  padding: 14px 28px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;

  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FollowButton = styled(Button)`
  background: #ebd8ff;
  &:hover {
    background-color: #d5b6ff;
  }
`;

export const FollowingButton = styled(Button)`
  background: #5cd3a8;
  &:hover {
    background-color: #4bbd8d;
  }
`;
