import React, { useEffect, useState } from 'react';
import HomeFooter from '../Components/Footer2';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-sm font-medium">{question}</h3>
        <span className="text-xl font-bold">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const Faq2 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  const faqData = [
    {
      question: "When Do I Receive My Order?",
      answer: "When Placing The Order, A Day Of Shipment Is Indicated. After The Order Has Been Placed, The Same Delivery Time Will Also Be Stated On The Order Confirmation. It Is Therefore Never Possible That During The Order, The Shipping Day On The Website, Is Different Than On The Order Confirmation."
    },
    {
      question: "I Now See The Longer Delivery Time Of (A Part Of) My Order. How Can I Cancel It?",
      answer: "If the order has a longer delivery time than you had previously seen, it is of course possible to cancel (a part of) the order. For this you can contact our customer service. They will cancel the order for you. The purchase amount will be back on your bank account within two working days. When an order has already been shipped, it can no longer be cancelled."
    },
    {
      question: "When Will I Receive The Invoice For My Order?",
      answer: "When you have paid for the order, you will not automatically receive an invoice for your order. If you wish to receive an invoice, this can be done in two ways. The first way is through your account at our store. When you log in to your account you can see your orders and download the invoice."
    },
    {
      question: "How Long Will My Order Take To Be Delivered?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut pretium libero, non viverra nisl. Maecenas rhoncus erat eget vehicula tempor. Mauris sollicitudin, tellus nec feugiat elementum, ante sapien sagittis sapien, non convallis velit orci quis nisi. In egestas, mauris sit amet pellentesque sollicitudin."
    },
    {
      question: "Do I Need To Create An Account To Place An Order?",
      answer: "Vestibulum in risus dui. Donec malesuada fringilla dui, sed porttitor lacus venenatis vel. Integer laoreet lacus ut lacus condimentum aliquet. Pellentesque placerat cursus eleifend. Donec sed facilisis felis. Praesent lacinia non leo non tristique. Proin interdum risus nec tincidunt interdum."
    },
    {
      question: "Can I Choose My Currency I Pay In?",
      answer: "For UAE, KSA, Kuwait & Qatar: You can choose your country and your currency on top of any page to make your navigation easy as well as at the checkout point."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={`max-w-2xl mx-auto my-8 ${isPageLoaded ? 'fade-in' : ''}`}>
        <h1 className="text-4xl font-bold font-serif mb-4">Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      <HomeFooter />
    </>
  );
};

export default Faq2;
