import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  flex-basis: calc((100% - 2 * 50px) / 3);
  margin: 15px;
  height: 460px;

  // background-color: #471ca9;
  // background-image: url('https://cdn-icons-png.flaticon.com/512/361/361678.png');
  // background-size: 80px, cover;
  // background-repeat: no-repeat;
  // background-position: top 120px right 130px;

  // background: linear-gradient(
  //   114.99deg,
  //   #471ca9 -0.99%,
  //   #5736a3 54.28%,
  //   #4b2a99 78.99%
  // );

  // background-image: linear-gradient(
  //     114.99deg,
  //     #471ca9 -0.99%,
  //     #5736a3 54.28%,
  //     #4b2a99 78.99%
  //   ),
  //   url('https://cdn-icons-png.flaticon.com/512/361/361678.png');
  // background-repeat: no-repeat;
  // background-position: top 20px left 20px;
  // background-size: 80px, auto;

  background: url('../../images/picture.jpg') no-repeat top 20px left 20px,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-size: 80px, auto;
  // background-repeat: no-repeat;
  // background-position: top 12px right 13px;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const PeopleListContainer = styled.ul`
  font-family: 'Montserrat';
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  padding: 15px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;

export const FollowButton = styled(Button)`
  background: #ebd8ff;
`;

export const FollowingButton = styled(Button)`
  background: #5cd3a8;
`;
