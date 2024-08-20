// imports
import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContents from './components/OrderContents';
import OrderTotal from './components/OrderTotal';
import TipPercentageForm from './components/TipPercentageForm';
import Footer from "./components/Footer";


function App() {
  // Instancia del hook de order
  const { order, addItem, tip, setTip, removeItem, placeOrder} = useOrder();

  return (
    <>
      <Header/>
      <main className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black ">Menu</h2>

          <div className="space-y-3 mt-10">
            { menuItems.map( item => <MenuItem key={item.id} addItem={addItem} item={item}/>) }
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 shadow-lg">
          {
            order.length > 0 ? (
              <>
                <OrderContents 
                  orders={order} 
                  removeItem={removeItem}
                />
      
                <TipPercentageForm 
                  setTip={setTip}
                  tip={tip}
                />
      
                <OrderTotal 
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ):(
              <p className="text-center">La orden esta vacia</p>
            )
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
