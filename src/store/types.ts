export type People = {
  name: string;
};

export interface ApplicationState {
  data: People[];
  loading: boolean;
  error: string | null;
}
