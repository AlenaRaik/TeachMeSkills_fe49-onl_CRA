import { CardProps } from '#ui/cards/card-props';
import styled from 'styled-components';
import { cardArray } from '../../arrayData';
import { SearchResultCard } from '#ui/cards/search-result-card';

type ListSearchResultsProps = {
  value: CardProps[];
};
export const ListSearchResults: React.FC<ListSearchResultsProps> = (
  props: ListSearchResultsProps
) => {
  return (
    <div>
      <Container>
        {cardArray.map((element, id) => (
          <SearchResultCard key={id} value={element}></SearchResultCard>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div``;
