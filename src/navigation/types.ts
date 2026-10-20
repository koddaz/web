export type RootTabParamList = {
  Home: undefined;
  Projects: undefined;
  About: undefined;
  Contact: undefined;
};

export type RouteName = keyof RootTabParamList;

export const ROUTE_ORDER: RouteName[] = ['Home', 'Projects', 'About', 'Contact'];

export const ROUTE_LABELS: Record<RouteName, string> = {
  Home: 'Home',
  Projects: 'Projects',
  About: 'About',
  Contact: 'Contact',
};
