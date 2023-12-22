export interface Filter {
  label: string;
  value: string;
}
export const CategoryFilter: Array<Filter> = [
  { label: 'Action', value: 'Action' },
  { label: 'Adventure', value: 'Adventure' },
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Drama', value: 'Drama' },
  { label: 'Ecchi', value: 'Ecchi' },
  { label: 'Harem', value: 'Harem' },
  { label: 'School', value: 'School' },
  { label: 'Shoujo', value: 'Shoujo' },
  { label: 'Romance', value: 'Romance' },
  { label: 'Samurai', value: 'Samurai' },
  { label: 'Music', value: 'Music' },
  { label: 'Mecha', value: 'Mecha' },
  { label: 'Yuri', value: 'Yuri' },
  { label: 'Yaoi', value: 'Yaoi' },
  { label: 'Shounen', value: 'Shounen' },
  { label: 'LiveAction', value: 'LiveAction' },
  { label: 'Game', value: 'Game' },
  { label: 'Isekai', value: 'Isekai' },
  { label: 'Magic', value: 'Magic' },
];
export const YearFilter: Array<number> = [
  2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
];
export const TypeFilter: Array<Filter> = [
  { label: 'Anime bộ', value: 'AnimeBo' },
  { label: 'Anime lẻ', value: 'AnimeLe' },
  { label: 'Anime sắp chiếu', value: 'AnimeSapChieu' },
];
