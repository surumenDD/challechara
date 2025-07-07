import type { Meta, StoryObj } from '@storybook/react';
import WorkInfoCard from './WorkInfoCard';

const meta = {
  title: 'MyProfile/WorkInfoCard',
  component: WorkInfoCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  // このコンポーネントはLinkを使用しないため、Routerは不要
  decorators: [
    (Story) => (
      <div className="bg-cyber-dark p-4">
        <Story />
      </div>
    ),
  ],
  args: {},
} satisfies Meta<typeof WorkInfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};