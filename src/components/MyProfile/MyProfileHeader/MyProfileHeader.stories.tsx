import type { Meta, StoryObj } from '@storybook/react';
import MyProfileHeader from './MyProfileHeader';
import { BrowserRouter as Router } from 'react-router-dom';

const meta = {
  title: 'MyProfile/MyProfileHeader',
  component: MyProfileHeader,
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
    novelTitle: 'サイバーパンク・ラプソディ',
    novelStatus: '連載中',
  },
} satisfies Meta<typeof MyProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CompletedNovel: Story = {
  args: {
    novelTitle: '電脳世界の探偵',
    novelStatus: '完結',
  },
};