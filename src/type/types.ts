import { Dispatch, ReactNode, SetStateAction } from "react";

export interface UserType {
  id: number;
  name: string;
  email: string;
}

export interface LoginUserDataType {
  user: UserType;
  token: string;
}

export interface UserContextType {
  user?: UserType | null;
  setUser?: Dispatch<SetStateAction<UserType | null>>;
}

interface Stats {
  active_users: number | undefined;
  clicks: number | undefined;
  appearance: number | undefined;
  title?: string;
}

export interface StatsDataType {
  current: Stats;
  previous: Stats;
}
