// Imports
import { useMemo } from 'react';
import { OrderItem } from '../types/index';
import { formatCurrency } from '../helpers';

// Tipo de dato para el prop
type OrderTotalProps ={
    order: OrderItem[]
    tip: number,
    placeOrder: ()=> void
}

// Componente de total
const OrderTotal = ({order, tip, placeOrder}: OrderTotalProps) => {

    // Creamos una funcion para el subtotal
    const subtotalAmount = useMemo(()=> order.reduce( (total, item) => total + (item.quantity * item.price), 0),[order]);

    // Creamos una funcion para el total de propina
    const tipAmount = useMemo(()=> subtotalAmount * tip,[tip,order]);

    // Creamos una funcion para el total
    const totalAmount = useMemo(()=> subtotalAmount + tipAmount, [tipAmount,subtotalAmount]);
    
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">
                    Totales y Propinas:
                </h2>

                <p>
                    Subtotal a pagar: {""}
                    <span className="font-bold">{ formatCurrency(subtotalAmount) }</span>
                </p>

                <p>
                    Propina: {""}
                    <span className="font-bold">{ formatCurrency(tipAmount) }</span>
                </p>

                <p>
                    Total a Pagar: {""}
                    <span className="font-bold">{ formatCurrency(totalAmount) }</span>
                </p>
            </div>

            <button 
                className='w-full bg-black p-3 uppercase text-white rounded font-bold mt-10 disabled:opacity-10'
                disabled={totalAmount == 0}
                onClick={()=> placeOrder()}
                >
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotal