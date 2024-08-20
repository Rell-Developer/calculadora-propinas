// Imports
import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

// Tipado para los props
type OrderCardType ={
    order: OrderItem,
    removeItem: (id:OrderItem["id"])=> void;
}
// Component
const OrderCard = ({ order, removeItem }: OrderCardType) => {
    return (
        <div className="w-full flex justify-between border-t border-gray-200 py-5 last-of-type:border-b">
            <div>
                <p className="text-lg">
                    {order.name} - {formatCurrency(order.price)}
                </p>
                <p className="font-black">
                    Cantidad: {order.quantity} - {formatCurrency(order.price * order.quantity)}
                </p>
            </div>

            <button 
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={()=> removeItem(order.id)}
            >
                X
            </button>
        </div>
    )
}

export default OrderCard