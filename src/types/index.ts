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

// {
//   data: {
//     AuthorWorklog:{
//       activityMeta: [{label: string, fillColor: string}],
//       rows:[
//         {
//           name: string,
//           totalActivity: [{name: string, value: string}],
//           dayWiseActivity: [
//             {
//               date: string,
//               items: {
//                 children: [
//                   {
//                     count: string,
//                     label: string,
//                     fillColor: string
//                   }
//                 ]
//               }
//             }
//           ],
//           activeDays:{
//             days: number,
//             isBurnOut: boolean,
//             insight: [string]
//           }
//         }
//       ]
//     }
//   }
// }
