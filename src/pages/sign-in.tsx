import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { Menu } from '#ui/header/menu';
import { SignInForm } from '#features/sign-in-form/sign-in-form';

export const SignIn: React.FC = () => {
  return (
    <MainTemplate
      header={<Menu />}
      backLink={<BackLink />}
      title={<Title>Sign In</Title>}
      body={<SignInForm />}
    />
  );
};