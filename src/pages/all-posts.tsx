import { MainTemplate } from '#ui/templates/main-template';
import { Menu } from '#ui/header/menu';

import { Title } from '#ui/title/title';
import { cardArray } from '../arrayData';
import { ListBlog } from '#ui/list-posts/list-blog';
import { useEffect, useState } from 'react';
import { CardProps } from '#ui/cards/card-props';

export const Blog: React.FC = () => {
   const [apiModels, setApiModels] = useState<CardProps[] | null>(null);
   useEffect(()=>{
    const TimerId =setTimeout(()=>{setApiModels(cardArray)}, 3000); return () => {
      clearTimeout(TimerId);
    };
   }, [])
  return (
    <MainTemplate
      header={<Menu />}
      title={<Title>Blog</Title>}
      body={apiModels? <ListBlog value={cardArray}></ListBlog>:null}
    />
  );
};
