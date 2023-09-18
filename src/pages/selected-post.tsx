import { MainTemplate } from "#ui/templates/main-template";
import { Menu } from '#ui/header/menu';
import { cardArray } from "../arrayData";
import { BigCardSelect } from "#ui/cards/bid-card-select";

export const SelectPost: React.FC = () => {
    return (
      <MainTemplate
        header={<Menu />}
        body={<BigCardSelect value={cardArray[0]}></BigCardSelect>}
      />
    );
  };