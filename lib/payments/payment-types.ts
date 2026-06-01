export type PaymentStatus =
  | 'pendiente'
  | 'aprobado'
  | 'rechazado'
  | 'cancelado'
  | 'reembolsado'

export interface Pago {
  id_pago: string

  id_comprador: string
  id_vendedores: string[]

  monto: number

  estado: PaymentStatus

  creado: Date
  actualizado: Date
}