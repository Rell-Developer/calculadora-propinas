// Imports
import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

// Hook del orden
const useOrder = () => {
    // States
    const [ order, setOrder ] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    // Metodo para agregar una orden
    const addItem = (item: MenuItem)=>{
        // Buscamos si la orden ya existe
        const itemExist = order.find( orderItem => orderItem.id == item.id)

        // Si ya existe
        if (itemExist){
            // Obtenemos un array con la lista actualizada de los registros
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
                { ...orderItem, quantity: orderItem.quantity + 1 }:
                orderItem
            )

            // Guardamos las ordenes
            setOrder(updatedOrder);
        }else{
            //Agregamos el nuevo item
            setOrder([...order, {...item, quantity: 1}]);
        }
    }

    // Metodo para eliminar una orden
    const removeItem = (itemId: MenuItem["id"]) => {
        // Filtramos
        const newOrder = order.filter( item => item.id !== itemId);
        // Establecemos la nueva lista
        setOrder(newOrder);
    }

    // Metodo para guardar la orden
    const placeOrder = ()=>{
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        setOrder,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}

export default useOrder