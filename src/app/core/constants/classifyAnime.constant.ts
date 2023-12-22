export interface Classify {
  query: string;
  label: string;
  id: number;
}
export const NewClassifyConstant: Array<Classify> = [
  {
    id: 1,
    query: 'all',
    label: 'Tất cả',
  },
  { id: 2, query: 'tv/series', label: 'Anime bộ' },
  { id: 3, query: 'movie/ova', label: 'Anime lẻ' },
];

export const UpcomingClassifyConstant: Array<Classify> = [
  { id: 1, query: 'day', label: 'Ngày' },
  { id: 2, query: 'week', label: 'Tuần' },
  { id: 3, query: 'month', label: 'Tháng' },
];
