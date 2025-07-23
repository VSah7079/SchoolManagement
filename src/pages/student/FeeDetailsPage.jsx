import React, { useEffect, useState } from 'react';
import { FaRupeeSign, FaFileInvoiceDollar, FaCheckCircle, FaExclamationCircle, FaCalendarAlt, FaTimes, FaRegCreditCard, FaQrcode } from 'react-icons/fa';
import { SiPaytm, SiGooglepay, SiPhonepe } from 'react-icons/si';

const StudentFeeDetailsPage = () => {
  // Mock fee data - now stateful
  const initialFeeData = {
    totalFees: 75000,
    paid: 60000,
    due: 15000,
    nextDueDate: '2023-11-15',
  };

  const initialPaymentHistory = [
    { date: '2023-08-10', amount: 30000, receiptId: 'R89234', status: 'Paid' },
    { date: '2023-09-12', amount: 15000, receiptId: 'R90345', status: 'Paid' },
    { date: '2023-10-14', amount: 15000, receiptId: 'R91456', status: 'Paid' },
  ];

  const [feeSummary, setFeeSummary] = useState(initialFeeData);
  const [paymentHistory, setPaymentHistory] = useState(initialPaymentHistory);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handlePayment = () => {
    if (feeSummary.due <= 0) return;

    // Simulate payment processing
    const newPayment = {
      date: new Date().toISOString().split('T')[0],
      amount: feeSummary.due,
      receiptId: `R${Math.floor(Math.random() * 90000) + 10000}`,
      status: 'Paid',
    };

    setPaymentHistory(prev => [newPayment, ...prev]);

    setFeeSummary(prev => ({
      ...prev,
      paid: prev.paid + prev.due,
      due: 0,
    }));

    setIsModalOpen(false);
  };

  const summaryCards = [
    {
      label: 'Total Fees',
      value: `₹${feeSummary.totalFees.toLocaleString('en-IN')}`,
      icon: <FaFileInvoiceDollar className="text-2xl text-blue-500" />,
      color: 'bg-blue-50',
      text: 'text-blue-700',
    },
    {
      label: 'Total Paid',
      value: `₹${feeSummary.paid.toLocaleString('en-IN')}`,
      icon: <FaCheckCircle className="text-2xl text-green-500" />,
      color: 'bg-green-50',
      text: 'text-green-700',
    },
    {
      label: 'Outstanding Due',
      value: `₹${feeSummary.due.toLocaleString('en-IN')}`,
      icon: <FaExclamationCircle className="text-2xl text-red-500" />,
      color: 'bg-red-50',
      text: 'text-red-700',
    },
    {
      label: 'Next Due Date',
      value: feeSummary.nextDueDate,
      icon: <FaCalendarAlt className="text-2xl text-yellow-500" />,
      color: 'bg-yellow-50',
      text: 'text-yellow-700',
    },
  ];
  
  const PaymentModal = () => {
    const [activeMethod, setActiveMethod] = useState('Card');

    const PaymentMethodTab = ({ method, icon, children }) => (
      <button
        onClick={() => setActiveMethod(method)}
        className={`flex-1 p-4 font-semibold text-center transition-colors rounded-t-lg flex items-center justify-center gap-2 ${
          activeMethod === method ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
        }`}
      >
        {icon}
        {children}
      </button>
    );
    
    const renderPaymentContent = () => {
      switch (activeMethod) {
        case 'UPI':
          return (
            <div className="text-center animate-fadeIn">
              <p className="text-gray-600 mb-4">Scan the QR code or enter your UPI ID</p>
              <div className="flex justify-center mb-4">
                <FaQrcode size={128} className="text-gray-700" />
              </div>
              <input type="text" placeholder="yourname@upi" className="w-full p-3 border rounded-lg text-center focus:ring-2 focus:ring-blue-500 transition" />
            </div>
          );
        case 'Wallets':
          return (
            <div className="space-y-4 animate-fadeIn">
              <button className="w-full flex items-center justify-center gap-3 p-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
                <SiPaytm size={24} /> Pay with Paytm
              </button>
              <button className="w-full flex items-center justify-center gap-3 p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <SiGooglepay size={24} /> Pay with Google Pay
              </button>
              <button className="w-full flex items-center justify-center gap-3 p-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors">
                <SiPhonepe size={24} /> Pay with PhonePe
              </button>
            </div>
          );
        case 'Card':
        default:
          return (
            <div className="space-y-4 animate-fadeIn">
              <div>
                  <label className="font-semibold text-gray-700 text-sm">Card Number</label>
                  <div className="relative">
                      <input type="text" placeholder="**** **** **** ****" className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 transition" />
                      <FaRegCreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
              </div>
              <div className="flex gap-4">
                  <div className="w-1/2">
                      <label className="font-semibold text-gray-700 text-sm">Expiry Date</label>
                      <input type="text" placeholder="MM / YY" className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                  <div className="w-1/2">
                      <label className="font-semibold text-gray-700 text-sm">CVC</label>
                      <input type="text" placeholder="***" className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
              </div>
            </div>
          );
      }
    };
    
    return (
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center transition-opacity animate-fadeIn p-4">
        <div className="bg-gray-50 rounded-2xl shadow-xl max-w-md w-full transform transition-all animate-slideIn">
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Complete Payment</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaTimes size={24} />
              </button>
            </div>
            
            <div className="text-center bg-white p-4 rounded-lg mb-6 border border-gray-200">
              <p className="text-gray-600 font-medium">Amount Due</p>
              <p className="text-4xl font-extrabold text-blue-600">₹{feeSummary.due.toLocaleString('en-IN')}</p>
            </div>
          </div>

          <div className="bg-gray-100 px-2 pt-2 rounded-t-lg">
            <div className="flex">
              <PaymentMethodTab method="Card" icon={<FaRegCreditCard />}>Card</PaymentMethodTab>
              <PaymentMethodTab method="UPI" icon={<FaQrcode />}>UPI</PaymentMethodTab>
              <PaymentMethodTab method="Wallets" icon={<SiPaytm />}>Wallets</PaymentMethodTab>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-b-2xl">
            {renderPaymentContent()}
            <div className="mt-8 flex justify-end gap-4">
              <button onClick={() => setIsModalOpen(false)} className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 font-semibold transition-colors">Cancel</button>
              <button onClick={handlePayment} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-semibold flex items-center transition-transform transform hover:scale-105 shadow-md">
                <FaCheckCircle className="mr-2" /> Confirm Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-16 font-sans">
      {isModalOpen && <PaymentModal />}
      {/* Header */}
      <div className="relative overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-400 opacity-80"></div>
        <div className="relative z-10 flex items-center px-8 py-12">
          <FaRupeeSign className="text-white text-5xl mr-6 drop-shadow-lg" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow">Fee Details</h1>
            <p className="text-white/90 text-lg">Manage your payments and view history.</p>
          </div>
        </div>
      </div>

      {/* Fee Summary Cards */}
      <div className={`max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-4 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {summaryCards.map((card, idx) => (
          <div key={idx} className={`rounded-xl shadow-md p-6 flex flex-col items-center ${card.color} hover:shadow-xl transition-shadow`}>
            <div className="mb-2">{card.icon}</div>
            <div className={`text-3xl font-bold ${card.text}`}>{card.value}</div>
            <div className="text-gray-500 mt-1 font-medium">{card.label}</div>
          </div>
        ))}
      </div>
      
      {/* Payment History and Action */}
      <div className={`max-w-4xl mx-auto transition-all duration-500 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-700 flex items-center">
              <FaFileInvoiceDollar className="mr-3" /> Payment History
            </h2>
            <button 
              onClick={() => setIsModalOpen(true)}
              disabled={feeSummary.due <= 0}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 flex items-center transition-all transform hover:scale-105 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
            >
              <FaRupeeSign className="mr-2" /> Pay Now
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-blue-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Date</th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Receipt ID</th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Amount</th>
                  <th className="py-3 px-6 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paymentHistory.map((payment, index) => (
                  <tr key={index} className="hover:bg-blue-50 transition">
                    <td className="py-4 px-6 whitespace-nowrap font-medium text-gray-700">{payment.date}</td>
                    <td className="py-4 px-6 whitespace-nowrap font-semibold text-gray-700">{payment.receiptId}</td>
                    <td className="py-4 px-6 whitespace-nowrap font-bold text-gray-800">₹{payment.amount.toLocaleString('en-IN')}</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="flex items-center text-green-600 font-semibold">
                        <FaCheckCircle className="mr-2"/> {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeeDetailsPage; 