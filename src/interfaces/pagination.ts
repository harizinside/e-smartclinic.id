export interface IPagination {
  from: number
  to: number
  total: number
  per_page: number
  current_page: number
  last_page: number
  first_page_url: string
  last_page_url: string
  next_page_url: string | null
  prev_page_url: string | null
  links?: ILink[]
  path: string
}

export interface ILink {
    url: string
    label: string
    active: boolean
    disable: boolean
}
