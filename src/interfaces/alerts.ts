export interface IAlert {
  message: string
  type?: 'success' | 'warning' | 'info' | 'danger'
  errors?: {
    field: string
    message: string
    value?: string
  }[]
}
