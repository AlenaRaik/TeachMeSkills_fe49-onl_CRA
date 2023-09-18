import { MainTemplate } from '#ui/templates/main-template';
import { Title } from '#ui/title/title';
import { BackLink } from '#features/back-link/back-link';
import { SignUpForm } from '#features/sign-up-form/sign-up-form';
import { Menu } from '#ui/header/menu';

export const SignUp: React.FC = () => {
  return (
    <MainTemplate
      header={<Menu />}
      backLink={<BackLink />}
      title={<Title>Sign Up</Title>}
      body={<SignUpForm />}
    />
  );
};
