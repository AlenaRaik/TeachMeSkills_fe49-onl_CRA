import {
  faBookmark,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { styled } from 'styled-components';
import { CardProps } from './card-props';

export type SearchResultCardProps = {
  value: CardProps;
};

export const SearchResultCard: React.FC<SearchResultCardProps> = (
  props: SearchResultCardProps
) => {
  const [isLiked, setLiked] = useState<boolean>(false);
  const [isDisliked, setDisliked] = useState<boolean>(false);

  function dislike() {
    if (isLiked) {
      props.value.like--;
    }
    setDisliked(!isDisliked);
    setLiked(false);
    if (isDisliked) {
      props.value.dislike--;
    } else props.value.dislike++;
  }
  function like() {
    if (isDisliked) {
      props.value.dislike--;
    }
    setLiked(!isLiked);
    setDisliked(false);
    if (isLiked) {
      props.value.like--;
    } else props.value.like++;
  }
  return (
    <div>
      <Card>
        <CardData>
          <ImageCard>
            <img src={props.value.image} alt="#"></img>
          </ImageCard>
          <TextData>
            <HeaderDate>{props.value.date}</HeaderDate>
            <Header>{props.value.title}</Header>
          </TextData>
        </CardData>
        <CommandString>
          <WrapperLike>
            <ButtonLike onClick={() => like()}>
              {isLiked ? (
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  color="var(--like-secondery-color)"
                />
              ) : (
                <FontAwesomeIcon icon={faThumbsUp} />
              )}
            </ButtonLike>
            <p>{props.value.like}</p>
            <ButtonDislike onClick={() => dislike()}>
              {isDisliked ? (
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  color="var(--like-secondery-color)"
                />
              ) : (
                <FontAwesomeIcon icon={faThumbsDown} />
              )}
            </ButtonDislike>
            <p>{props.value.dislike}</p>
          </WrapperLike>
          <WrapperOther>
            <ButtonPoints>...</ButtonPoints>
            <ButtonBookmark>
              <FontAwesomeIcon icon={faBookmark} />
            </ButtonBookmark>
          </WrapperOther>
        </CommandString>
      </Card>
      <FooterDelimiter />
    </div>
  );
};
const WrapperLike = styled.div`
  display: flex;
  align-items: center;
`;
const WrapperOther = styled.div``;
const Card = styled.div``;
const CommandString = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImageCard = styled.div`
  width: 100px;
  height: 100px;
`;
const CardData = styled.div`
  max-height: 100px;
  display: flex;
`;
const Header = styled.p`
  color: var(--text-primary-color);
  font-size: 18px;
  text-decoration: none;
  padding: 2% 0;
`;

const TextData = styled.div`
  text-align: left;
  width: 90%;
  color: #989aa8;
  padding: 0 1%;
`;
const ButtonLike = styled.button`
  width: 2rem;
  height: 2rem;
  color: #c7c9d5;
`;
const ButtonDislike = styled.button`
  width: 2rem;
  height: 2rem;
  color: #c7c9d5;
`;
const ButtonBookmark = styled.button`
  width: 2rem;
  height: 2rem;
  color: #c7c9d5;
  &:hover {
    color: #333333;
  }
`;

const ButtonPoints = styled.button`
  width: 2rem;
  height: 2rem;
  color: #c7c9d5;
  font-size: 28px;
  &:hover {
    color: #333333;
  }
`;
const FooterDelimiter = styled.hr``;

const HeaderDate = styled.p`
  color: gray;
`;
