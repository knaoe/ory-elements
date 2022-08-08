import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import {
  SelfServiceAuthCard,
  SelfServiceAuthCardProps
} from '../../react/ory/self-service-auth-card';
import { Container } from '../storyhelper';

import loginFlow from './login-flow.json';
import registrationFlow from './register-flow.json';

import { SelfServiceLoginFlow, SelfServiceRegistrationFlow } from '@ory/client';

export default {
  title: 'Ory/SelfServiceFlowCard',
  component: SelfServiceAuthCard,
  argTypes: {
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof SelfServiceAuthCard>;

export type SelfServiceAuthCardStoryProps = SelfServiceAuthCardProps & {
  theme: 'light' | 'dark';
};

const Template: Story<SelfServiceAuthCardStoryProps> = (
  args: SelfServiceAuthCardStoryProps
) => (
  <Container theme={args.theme || 'light'}>
    <SelfServiceAuthCard {...args} />
  </Container>
);

export const LoginAuthCard = Template.bind({});

LoginAuthCard.args = {
  title: 'Sign in to your Acme account',
  flow: loginFlow as SelfServiceLoginFlow,
  additionalProps: {
    signupUrl: 'https://acme.com/login',
    forgotPasswordUrl: 'https://acme.com/forgot-password',
    logoutUrl: 'https://acme.com/logout'
  }
};

export const RegistrationAuthCard = Template.bind({});

RegistrationAuthCard.args = {
  title: 'Create an account for Acme',
  flow: registrationFlow as SelfServiceRegistrationFlow,
  additionalProps: {
    loginUrl: 'https://acme.com/login'
  }
};
