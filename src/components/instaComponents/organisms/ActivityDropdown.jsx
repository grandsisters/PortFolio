import styled from "styled-components";

const ActivityDropdown = ({ onClose }) => {
  const ActivityData = [
    { date: "이번 주", img: "https://i.pinimg.com/736x/20/87/dc/2087dc617106100ab0716039317d3db8.jpg", name: "tomhardy" },
    {
      date: "이번 달",
      img: "data:image/jpeg;base64,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",
      name: "Thomas_Shelby",
    },
    { date: "이전 활동", img: "http://file3.instiz.net/data/cached_img/upload/2019/05/08/19/4862433a9fbdfa9bbb56c14e937eff17.jpg", name: "tomholland2013" },
  ];

  return (
    <>
      <BackDrop onClick={onClose} />
      <DropdownWrapper>
        <ActivityLists>
          {ActivityData.map((e, i) => (
            <ActivityWrapper key={i}>
              <ActivityDate>{e.date}</ActivityDate>
              <EachActivity>
                <EachWrapper>
                  <ActivityImg src={e.img} />
                  <TextWrapper>
                    <ActicityText>{e.name}님이 회원님을 팔로우하기 시작했습니다.</ActicityText>
                  </TextWrapper>
                </EachWrapper>
                <ActivityBtn>팔로우</ActivityBtn>
              </EachActivity>
            </ActivityWrapper>
          ))}
        </ActivityLists>
        <LittleThis />
      </DropdownWrapper>
    </>
  );
};

const DropdownWrapper = styled.div`
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  position: absolute;
  top: 40px;
  right: -8px;
  z-index: 0;
  border-radius: 10px;
`;

const ActivityLists = styled.ul`
  background: #fff;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
`;
const ActivityWrapper = styled.div`
  padding: 3px 10px;

  &:last-child {
    border-top: 1px solid #dbdbdb;
  }
`;
const ActivityDate = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
const EachActivity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const EachWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ActivityImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 15px;
`;

const TextWrapper = styled.div`
  width: 338px;
  height: 37px;
  white-space: normal;
`;

const ActicityText = styled.span`
  font-size: 14px;
`;
const ActivityBtn = styled.button`
  width: 62px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #0095f6;
  color: white;
  font-weight: bolder;
  margin: 0 10px;
`;

const LittleThis = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  top: -8px;
  right: 77px;
  background: #fff;
`;
const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: default;
`;

export default ActivityDropdown;
