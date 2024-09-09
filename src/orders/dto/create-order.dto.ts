import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderItemDto } from "./order-item.dto"

export class CreateOrderDto {

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({each: true}) // para que haga la validacion de cada uno de los elementos que vienen dentro de items
    @Type( () => OrderItemDto)
    items: OrderItemDto[]

}
