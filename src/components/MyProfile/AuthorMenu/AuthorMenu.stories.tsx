import type { Meta, StoryObj } from '@storybook/react';
import AuthorMenu from './AuthorMenu';
import { BrowserRouter as Router } from 'react-router-dom';

const meta = {
  title: 'MyProfile/AuthorMenu',
  component: AuthorMenu,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        <div className="bg-cyber-dark p-4">
          <Story />
        </div>
      </Router>
    ),
  ],
  args: {},
} satisfies Meta<typeof AuthorMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};