import { styled } from "styled-components";
import { CardProps } from "../cards/card-props";
import { cardArray } from "../../arrayData";
import { MiddleCard } from "../cards/middle-card";
import { SmallCard } from "../cards/small-card";
import { TabsPanel } from "#ui/tabs/tabs";
import { useState } from "react";

type ListPostBlogProps = {
  value: CardProps[];
};
export const ListBlog: React.FC<ListPostBlogProps> = (
  props: ListPostBlogProps
) => {
    const tabItems = [
        { id: "1", name: "All" },
        { id: "2", name: "My favorites" },
        { id: "3", name: "Popular" },
      ];
      const [activeTabId, setActiveTabId] = useState(tabItems[0].id);
  return (
    <div>
      <Container>
      <TabsPanel
        items={[
          { id: "1", name: "All" },
          { id: "2", name: "My favorites" },
          { id: "3", name: "Popular" },
        ]}
        activeId={activeTabId}
        onTabClick={setActiveTabId}
      />
        <WraperList>
          <BigList>
            
            <MiddleList>
              <MiddleCard value={cardArray[1]}></MiddleCard>
              <MiddleCard value={cardArray[2]}></MiddleCard>
              <MiddleCard value={cardArray[3]}></MiddleCard>
              <MiddleCard value={cardArray[4]}></MiddleCard>
            </MiddleList>
          </BigList>
          <SmallList>
            <SmallCard value={cardArray[5]}></SmallCard>
            <SmallCard value={cardArray[6]}></SmallCard>
            <SmallCard value={cardArray[7]}></SmallCard>
            <SmallCard value={cardArray[8]}></SmallCard>
            <SmallCard value={cardArray[9]}></SmallCard>
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