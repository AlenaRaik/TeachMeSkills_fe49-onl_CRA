import {
  faBookmark,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { styled } from 'styled-components';
import { CardProps } from './card-props';

export type BigCardSelectProps = {
  value: CardProps;
};

export const BigCardSelect: React.FC<BigCardSelectProps> = (
  props: BigCardSelectProps
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
          <TextData>
            <p>{props.value.date}</p>
            <Header>{props.value.title}</Header>
            <ImageCard>
              <img src={props.value.image} alt="#"></img>
            </ImageCard>
            <p>{props.value.text}</p>
          </TextData>
        </CardData>
        <CommandString>
          <WrapperLike>
            <ButtonLike onClick={() => like()}>
              {isLiked ? (
                <FontAwesomeIcon icon={faThumbsUp} color="black" />
              ) : (
                <FontAwesomeIcon icon={faThumbsUp} />
              )}
            </ButtonLike>
            <ButtonDislike onClick={() => dislike()}>
              {isDisliked ? (
                <FontAwesomeIcon icon={faThumbsDown} color="black" />
              ) : (
                <FontAwesomeIcon icon={faThumbsDown} />
              )}
            </ButtonDislike>
          </WrapperLike>
          <WrapperOther>
            <ButtonBookmark>
              <FontAwesomeIcon icon={faBookmark} />
              <ButtonText>Add to favorites</ButtonText>
            </ButtonBookmark>
          </WrapperOther>
        </CommandString>
      </Card>
    </div>
  );
};

const Header = styled.h2`
  color: #000000;
`;
const WrapperLike = styled.div`
  display: flex;
  align-items: center;
`;
const WrapperOther = styled.div``;
const Card = styled.div`
  width: 70%;
  margin: auto;
`;
const CommandString = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ImageCard = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  margin-bottom: 20px;
`;
const CardData = styled.div``;

const TextData = styled.div`
  text-align: left;
  color: #989aa8;
  padding: 1% 0;
`;
const ButtonLike = styled.button`
  width: 2rem;
  height: 2rem;
  color: #b5b5b7;
  background-color: #daddea;
  margin-right: 2px;
`;
const ButtonDislike = styled.button`
  width: 2rem;
  height: 2rem;
  color: #b5b5b7;
  background-color: #daddea;
`;
const ButtonBookmark = styled.button`
  width: 150px;
  height: 2rem;
  color: #b5b5b7;
  background-color: #daddea;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &:hover {
    color: #333333;
  }
`;

const ButtonText = styled.p``;
