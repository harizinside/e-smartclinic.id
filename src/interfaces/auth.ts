import type { ErrorsProps } from './errors'

export interface AuthProps<T> {
  status: boolean
  message: string
  result?: T
  errors?: ErrorsProps[]
}

export interface ResponseProps {
  company: string | null
  id: number
  roleId: number
  role: string
  sessions: SessionsProps[]
  token: string
  validPassword: boolean
}

export interface UserProps {
  avatar: string
  citizenCard: string | null
  darkMode: number
  fullname: string
  id: number
  lang: string
  roleId: number
  role: string
  sip: string | null
  spkk: string | null
}

export interface SessionsProps {
  id: string;
  site: string | null;
  ip: string;
  ua: string | null;
  browser: {
    name: string;
    version: string;
    major: string;
  };
  cpu: {
    architecture: string | null;
  };
  device: {
    kind: string;
    model: string;
    vendor: string;
  };
  engine: {
    name: string;
    version: string;
  };
  os: {
    name: string;
    version: string;
  };
}

