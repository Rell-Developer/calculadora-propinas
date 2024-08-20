// imports
import type { OrderItem } from "../types";
import OrderCard from "./OrderCard";

// Tipado para los props
type OrderContentProp = {
    orders: OrderItem[],
    removeItem: (id:OrderItem["id"])=> void;
}

// Component
const OrderContents = ({orders, removeItem}: OrderContentProp) => {
    return (
        <div>
            <h2 className="font-black text-4xl"> Consumo</h2>

            <div className="space-y-3 mt-5 overflow-scroll max-h-96">
                {
                    orders.map( item => 
                        <OrderCard 
                            key={item.id}
                            order={item}
                            removeItem={removeItem}
                        />
                    )
                
                }
            </div>
        </div>
    )
}

export default OrderContents;