import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common";
import { OrderSatutsList, OrderStatus } from "../enum/order.enum";

export class OrderPaginationDto extends PaginationDto{

    @IsOptional()
    @IsEnum(OrderSatutsList, {
        message:`Valid status are ${ OrderSatutsList}`
    })
    status: OrderStatus;
}