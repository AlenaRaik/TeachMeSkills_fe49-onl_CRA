import { styled } from 'styled-components';
import { CardProps } from '../cards/card-props';
import { BigCard } from '../cards/big-card';
import { cardArray } from '../../arrayData';
import { MiddleCard } from '../cards/middle-card';
import { SmallCard } from '../cards/small-card';

type ListPostCardProps = {
  value: CardProps[];
};
export const ListCard: React.FC<ListPostCardProps> = (
  props: ListPostCardProps
) => {
  return (
    <div>
      <Container>
        <WraperList>
          <BigList>
            <BigCard value={cardArray[0]}></BigCard>
            <MiddleList>
              {cardArray.slice(1, 5).map((element, id) => (
                <MiddleCard key={id} value={element}></MiddleCard>
              ))}
            </MiddleList>
          </BigList>
          <SmallList>
            {cardArray.slice(5, 10).map((element, id) => (
              <SmallCard key={id} value={element}></SmallCard>
            ))}
          </SmallList>
        </WraperList>
      </Container>
    </div>
  );
};

const MiddleList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 3%;
`;
const Container = styled.div``;
const WraperList = styled.div`
  display: flex;
`;
const BigList = styled.div`
  width: 150%;
`;
const SmallList = styled.div``;
