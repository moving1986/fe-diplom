import { Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/fonts.css';
import Home from './pages/Home';
import SelectTrain from './pages/SelectTrain';
import SelectSeat from './pages/SelectSeat';
import Passengers from './pages/Passengers';
import Payment from './pages/Payment';
import OrderConfirm from './pages/OrderCofirm';
import SuccessOrder from './pages/SuccessOrder';

function App() {
  return (
    <div className="App">
              <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/select-train" element={<SelectTrain />} />
                    <Route path="/select-seat" element={<SelectSeat />} />
                    <Route path="/passengers" element={<Passengers />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/order-confirm" element={<OrderConfirm />} />
                    <Route path="/success-order" element={<SuccessOrder />} />
                              
                    <Route path="*" element={<div>Страница не найдена</div>} />
                </Routes>
              </main>
        </div>
  );
}

export default App;
