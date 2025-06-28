import { useState } from 'react'
import Accordion from './Accordion';
import { useEffect } from 'react';

const initialData = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in their original packaging. Please contact our support for a return label."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 5-7 business days depending on your location. You will receive tracking details via email once your order is shipped."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to selected countries worldwide. Shipping fees and delivery times vary based on your location."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our support team via email at support@example.com or through the contact form on our website."
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "Orders can be modified or canceled within 2 hours of placing them. Please contact support immediately to process your request."
  }
];


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(initialData);
  },[]);
  
  return (
    <>
    <Accordion data={data}/>
    </>
  )
}

export default App
