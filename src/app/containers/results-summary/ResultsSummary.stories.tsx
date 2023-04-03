import ResultsSummary from '@/app/containers/results-summary'
import { Meta } from '@storybook/react';

export default {
  title: 'Example/Header',
  component: ResultsSummary,
} as Meta<typeof ResultsSummaryPage>;

export const ResultsSummaryPage = () => <ResultsSummary/>
