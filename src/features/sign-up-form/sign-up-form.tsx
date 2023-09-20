import { useState } from 'react';
import { Input } from '#ui/input/input';
import { Button } from '#ui/button';
import { setName } from './sign-up-form.slice';
import { useAppDispatch, useAppSelector } from '#hooks';
import { styled } from 'styled-components';

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(({ signUpForm }) => signUpForm.name);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  return (
    <FormSignUp>
      <Input
        type="text"
        labelText="Name"
        value={name}
        onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
      />
      <Input
        type="email"
        labelText="Email"
        value={email}
        onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        error={email ? undefined : `Email shoudn't be empty`}
      />
      <Input
        type="password"
        labelText="Password"
        value={password}
        onChange={({ currentTarget }) => setPassword(currentTarget.value)}
      />
      <Input
        type="password"
        labelText="Confirm password"
        value={confirmedPassword}
        onChange={({ currentTarget }) =>
          setConfirmedPassword(currentTarget.value)
        }
      />
      <Button variant="primary" onClick={() => null}>
        Sign Up
      </Button>
    </FormSignUp>
  );
};

const FormSignUp = styled.form`
  border: 1px solid grey;
  width: 50%;
  margin: auto;
  padding: 20px;
`;