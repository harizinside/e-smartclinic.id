export interface ErrorsProps {
  received?: string
  validation?: string
  code: string
  minimum?: string
  type?: string
  inclusive?: boolean
  exact?: boolean
  options?: string[]
  message: string
  path: string[]
  field: string
  value?: string
}
