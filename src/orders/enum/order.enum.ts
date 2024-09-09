export enum OrderStatus {
    PENDING = 'PENDING' ,
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED'
}

export const OrderSatutsList = [ 
    OrderStatus.PENDING,
    OrderStatus.COMPLETED,
    OrderStatus.CANCELLED
]