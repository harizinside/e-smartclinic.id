export interface ResponseProps {
  status: boolean
  message: string
  errors?: {
    field: string
    message: string
    value: string
  }[]
  result?: {
    company: string | null
    id: number
    roleId: number
    role: string
    sessions: SessionsProps[]
    token: string
    validPassword: boolean
  }
}

interface SessionsProps {
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

export interface UserProps {
  status: boolean
  message: string
  result: {
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
}
