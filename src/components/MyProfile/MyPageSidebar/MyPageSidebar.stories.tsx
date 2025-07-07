import type { Meta, StoryObj } from '@storybook/react';
import MyPageSidebar from './MyPageSidebar';
import { BrowserRouter as Router } from 'react-router-dom';

const meta = {
  title: 'MyProfile/MyPageSidebar',
  component: MyPageSidebar,
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
  args: {
    totalViews: '2,678,900',
    totalComments: '1,234',
    totalBookmarks: '5,678',
  },
} satisfies Meta<typeof MyPageSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LowStats: Story = {
  args: {
    totalViews: '1,500',
    totalComments: '15',
    totalBookmarks: '50',
  },
};