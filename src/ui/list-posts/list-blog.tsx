import { styled } from 'styled-components';
import { CardProps } from '../cards/card-props';
import { cardArray } from '../../arrayData';
import { MiddleCard } from '../cards/middle-card';
import { SmallCard } from '../cards/small-card';
import { TabsPanel } from '#ui/tabs/tabs';
import { useState } from 'react';

type ListPostBlogProps = {
  value: CardProps[];
};
export const ListBlog: React.FC<ListPostBlogProps> = (
  props: ListPostBlogProps
) => {
  const tabItems = [
    { id: '1', name: 'All' },
    { id: '2', name: 'My favorites' },
    { id: '3', name: 'Popular' },
  ];
  const [activeTabId, setActiveTabId] = useState(tabItems[0].id);
  return (
    <div>
      <Container>
        <TabsPanel
          items={[
            { id: '1', name: 'All' },
            { id: '2', name: 'My favorites' },
            { id: '3', name: 'Popular' },
          ]}
          activeId={activeTabId}
          onTabClick={setActiveTabId}
        />
        <WraperList>
          <BigList>
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
`;
const Container = styled.div``;
const WraperList = styled.div`
  display: flex;
`;
const BigList = styled.div`
  width: 150%;
`;
const SmallList = styled.div``;
