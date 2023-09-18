import { MainTemplate } from '#ui/templates/main-template';
import { Menu } from '#ui/header/menu';

import { Title } from '#ui/title/title';
import { cardArray } from '../arrayData';
import { ListBlog } from '#ui/list-posts/list-blog';

export const Blog: React.FC = () => {
  return (
    <MainTemplate
      header={<Menu />}
      title={<Title>Blog</Title>}
      body={<ListBlog value={cardArray}></ListBlog>}
    />
  );
};
