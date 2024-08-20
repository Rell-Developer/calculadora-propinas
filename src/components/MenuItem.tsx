// Imports
import type { MenuItem } from "../types";
import { formatCurrency } from '../helpers/index';

// Tipado para los props
type MenuItemProps ={
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

// Componente
const MenuItem = ({ item, addItem }: MenuItemProps) => {
    return (
        <button
            className="border-2  w-full border-teal-400 p-3 flex justify-between hover:bg-teal-200 transition-all rounded"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p>{formatCurrency(item.price)}</p>
        </button>
    )
}

export default MenuItem;