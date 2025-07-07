import type { Meta, StoryObj } from '@storybook/react';
import StatsCard from './StatsCard';

const meta = {
  title: 'MyProfile/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-cyber-dark p-4">
        <Story />
      </div>
    ),
  ],
  args: {
    totalViews: '2,678,900',
    totalComments: '1,234',
    totalBookmarks: '5,678',
  },
} satisfies Meta<typeof StatsCard>;

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