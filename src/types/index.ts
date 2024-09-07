export interface ActivityMeta {
  label: string;
  fillColor: string;
}

export interface TotalActivityItem {
  name: string;
  value: string;
}

export interface DayWiseActivityItem {
  count: string;
  label: string;
  fillColor: string;
}

export interface DayWiseActivity {
  date: string;
  items: {
    children: DayWiseActivityItem[];
  };
}

export interface RowData {
  name: string;
  totalActivity: TotalActivityItem[];
  dayWiseActivity: DayWiseActivity[];
}

export interface AuthorWorklogData {
  activityMeta: ActivityMeta[];
  rows: RowData[];
}
