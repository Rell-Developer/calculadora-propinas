// impots
import type { Dispatch, SetStateAction } from "react"
import TipPercentage from "./TipPercentage"

// Data de options
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

// Declaramos el tipo de datos de los props
export type TipPercentageFormProps ={
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

// Componente de porcentaje
const TipPercentageForm = ({ setTip, tip }:TipPercentageFormProps) => {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map( option => (
                    <TipPercentage 
                        key={option.id}
                        setTip={setTip}
                        tip={tip}
                        option={option}
                    />
                ))}
            </form>
        </div>
    )
}

export default TipPercentageForm