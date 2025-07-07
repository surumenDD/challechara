import type { Meta, StoryObj } from '@storybook/react';
import EpisodeManagement from './EpisodeManagement';
import { BrowserRouter as Router } from 'react-router-dom';

const meta = {
  title: 'MyProfile/EpisodeManagement',
  component: EpisodeManagement,
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
    bookId: 1, // ダミーの作品ID
    publishedEpisodes: [
      { id: 45, title: 'ネオン街の出会い', status: 'published', lastUpdated: '2025/01/20 12:00' },
      { id: 44, title: '電脳空間への侵入', status: 'published', lastUpdated: '2025/01/19 10:30' },
      { id: 43, title: '記憶の断片', status: 'published', lastUpdated: '2025/01/18 09:00' },
      { id: 42, title: '企業の陰謀', status: 'published', lastUpdated: '2025/01/17 14:15' },
      { id: 41, title: '仲間との出会い', status: 'published', lastUpdated: '2025/01/16 16:45' },
    ],
    draftEpisodes: [
      { id: 99, title: '次のエピソード (下書き)', status: 'draft', lastUpdated: '2025/01/21 08:00' },
      { id: 98, title: 'プロット検討 (下書き)', status: 'draft', lastUpdated: '2025/01/20 23:00' },
    ],
  },
} satisfies Meta<typeof EpisodeManagement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoDrafts: Story = {
  args: {
    draftEpisodes: [],
  },
};

export const NoPublishedEpisodes: Story = {
  args: {
    publishedEpisodes: [],
  },
};

export const EmptyAll: Story = {
  args: {
    publishedEpisodes: [],
    draftEpisodes: [],
  },
};