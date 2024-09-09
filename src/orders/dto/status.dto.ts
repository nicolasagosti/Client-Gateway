import { IsEnum, IsOptional } from "class-validator";
import { OrderSatutsList, OrderStatus } from "../enum/order.enum";

export class StatusDto {

    @IsOptional()
    @IsEnum(OrderSatutsList,{
        message: `Valid status are ${OrderSatutsList}`
    })
    status: OrderStatus;
}