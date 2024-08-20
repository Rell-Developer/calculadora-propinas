// Imports
import type { TipPercentageFormProps } from "./TipPercentageForm";

// Tipos de datos para los props
type TipPercentageProps= TipPercentageFormProps & {
    option: {
        id: string,
        label: string,
        value: number
    }
}
// Componente
const TipPercentage = ({ option, setTip, tip }: TipPercentageProps) => {
    return (
        <div className="flex gap-2">
            <label htmlFor={option.id}>{option.label}</label>
            <input 
                id={option.id}
                type="radio"
                name="tip"
                value={option.value}
                onChange={ e => setTip(Number(e.target.value))}
                checked={option.value == tip}
            />
        </div>
    )
}

export default TipPercentage