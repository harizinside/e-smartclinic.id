interface LabelProps {
  name: string
  href: string
  icon: string
  status: boolean
  order: number
  privilage: PrivilagesProps
}

export interface MenuProps extends LabelProps {
  children?: LabelProps[]
}

interface PrivilagesProps {
  create: boolean
  read: boolean
  update: boolean
  delete: boolean
  import: boolean
  export: boolean
}
