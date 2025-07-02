import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GrDeliver } from "react-icons/gr";
import API from "../../../api/API";
import { toast } from 'react-toastify';

const OrderDetailNew = () => {

   const { id } = useParams(); // URL param like /orders/31
   const [order, setOrder] = useState(null);
   console.log(order?.status || 'NO')
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   const [invoiceGenerated, setInvoiceGenerated] = useState(false);
   const [pdfUrl, setPdfUrl] = useState('');
   const [generatingInvoice, setGeneratingInvoice] = useState(false);

   useEffect(() => {
      const fetchOrder = async () => {
         try {
            const response = await API.get(`/api/order/${id}`);
            setOrder(response.data.data);
         } catch (err) {
            console.error("Error fetching order:", err);
            setError("Failed to fetch order.");
         } finally {
            setLoading(false);
         }
      };
      fetchOrder();
   }, [id]);


   const [invoiceId, setInvoiceId] = useState(null);

   const handleGenerateInvoice = async () => {
      if (!order) return;
      setGeneratingInvoice(true);
      try {
         const payload = {
            order_id: order?.id,
            invoice_date: new Date().toISOString().split('T')[0],
            due_date: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0],
            billing_address_snapshot: {
               address_line1: order?.billing_address?.address_line1 || 'NO',
               address_line2: order?.billing_address?.address_line2 || 'NO',
               city: order?.billing_address?.city || 'NO',
               postal_code: order?.billing_address?.postal_code || 'NO',
               country: order?.billing_address?.country || 'NO'
            },
            shipping_address_snapshot: {
               address_line1: order?.shipping_address?.address_line1 || 'NO',
               address_line2: order?.shipping_address?.address_line2 || 'NO',
               city: order?.shipping_address?.city || 'NO',
               postal_code: order?.shipping_address?.postal_code || 'NO',
               country: order?.shipping_address?.country || 'NO',
            },
            total_amount: order?.total_amount,
            order_discount_amount: order?.order_discount_amount,
            vat_amount: order?.vat_amount,
            delivery_amount: order?.delivery_amount,
            payable_amount: order?.payable_amount,
            status: "draft",
            pdf_url: null,
            created_by: order.created_by || 1
         };

         const response = await API.post('/api/create-invoice-new', payload);

         const pdf = response.data?.invoice?.pdf_url;
         const id = response.data?.invoice?.id;
       
         if (pdf && id) {
            setPdfUrl(pdf);
            setInvoiceId(id); // Save invoice ID
            setInvoiceGenerated(true);
            toast.success('PDF Generated.')
         } else {
            toast.error('Invoice created, but missing PDF or ID.')
          }
      } catch (error) {
         console.error('Invoice generation error:', error);
         toast.error('Failed to generate invoice')
       } finally {
         setGeneratingInvoice(false);
      }
   };

   const handleDownloadInvoice = () => {
      if (!pdfUrl) return toast.error('PDF not available yet.');
      window.open(pdfUrl, '_blank');
   };

   const handleViewInvoice = () => {
      if (!invoiceId) return toast.error("Invoice not available yet.");
      window.open(pdfUrl, '_blank');
   };

   const handleSendInvoiceEmail = async () => {
      if (!invoiceId) return toast.error("Invoice not available to email.");
      try {
         await API.get(`/api/send-invoice-email/${invoiceId}`);
         toast.success('Invoice email sent to customer.');
      } catch (err) {
         console.error("Error sending invoice email:", err);
          toast.error("Failed to send invoice email.");
      }
   };

   if (loading) return <p className="pl-[330px] mt-20">Loading...</p>;
   if (error) return <p className="pl-[330px] mt-20">{error}</p>;
   if (!order) return <p className="pl-[330px] mt-20">No order found with ID {id}</p>;

   return (
      <>
       

         <div className="p-6 pl-[330px]">
            <div className="flex items-center  justify-between">
               <h2 className="text-[24px] font-[500] mb-4">Order Details</h2>
               <Link to="" className="px-4 p-2 bg-[#4B215F] rounded-[6px] text-white">Edit</Link>
            </div>
            <div className="bg-white shadow  rounded-[7px] pb-5">
               <div className="flex justify-between items-center mt-5 border-b-[1px] border-gray-300 p-5">
                  <div className="text-[19px] font-[700] flex  items-center gap-2 "> <span className="text-[13px] text-gray-500 font-[500]">Order ID:</span>{order.id}</div>
                  <select
                     value={order?.status}
                     className={`
                      rounded-full px-2 p-3 py-[5px] text-[14px]  outline-none 
                    ${order.status === "completed"
                           ? "bg-green-100 text-green-600"
                           : order.status === "pending"
                              ? "bg-yellow-100 text-yellow-600"
                              : order.status === "cancel"
                                 ? "bg-red-100 text-red-600"
                                 : ""
                        }
                  `} >
                     <option value="pending" className="bg-yellow-100 text-yellow-700" > Pending </option>
                     <option value="completed" className="bg-green-100 text-green-700" > Completed </option>
                     <option value="cancel" className="bg-red-100 text-red-700"> Cancel </option>
                  </select>
               </div>
               <div className="p-10 m-5 rounded-[10px] border-[1px] border-gray-300 bg-[#fffff9]">
                  <div className="flex items-center">
                     <div className="w-[25%] order-status-line">
                        <button className="bg-yellow-100 p-5 rounded-[20px] text-center font-[600] text-[15px]">
                           <GrDeliver className="w-[25px] h-[25px] mx-auto" />
                           Order Placed
                        </button>
                     </div>
                     <div className="w-[25%] order-status-line">
                        <button className="bg-yellow-100 p-5 rounded-[20px] text-center font-[600] text-[15px]">
                           <GrDeliver className="w-[25px] h-[25px] mx-auto" />
                           Dispatched
                        </button>
                     </div>
                     <div className="w-[25%] order-status-line">
                        <button className="bg-yellow-100 p-5 rounded-[20px] text-center font-[600] text-[15px]">
                           <GrDeliver className="w-[25px] h-[25px] mx-auto" />
                           In Transit
                        </button>
                     </div>
                     <div className="w-[25%] order-status-line">
                        <button className="bg-yellow-100 p-5 rounded-[20px] text-center font-[600] text-[15px]">
                           <GrDeliver className="w-[25px] h-[25px] mx-auto" />
                           Delivered
                        </button>
                     </div>
                  </div>
               </div>

               <div className="p-5 m-5 rounded-[10px] border-[1px] border-gray-300">
                  <h2 className="text-[28px] font-[600]">Order Summery</h2>
                  {order.items.map((item) => (
                     <div className="grid grid-cols-3 gap-3 mt-4 shadow p-4 rounded-[10px]">
                        <div className="flex gap-2">
                           <h2 className="font-[600] text-gray-600">Product:</h2>
                           <h3 className="font-[600]"> {item.product_name}</h3>
                        </div>
                        <div className="flex gap-2">
                           <h2 className="font-[600] text-gray-600">Description:</h2>
                           <h3 className="font-[600]">{item.product_description}</h3>
                        </div>
                        <div className="flex gap-2">
                           <h2 className="font-[600] text-gray-600">Size:</h2>
                           <h3 className="font-[600]">{item.size_label}</h3>
                        </div>
                        <div className="flex gap-2 mt-1">
                           <h2 className="font-[600] text-gray-600">Quantity:</h2>
                           <h3 className="font-[600]">{item.quantity}</h3>
                        </div>
                        <div className="flex gap-2  mt-1">
                           <h2 className="font-[600] text-gray-600">Price per Unit:</h2>
                           <h3 className="font-[600]">£{item.price_per_unit}</h3>
                        </div>
                        <div className="flex gap-2  mt-1">
                           <h2 className="font-[600] text-gray-600">Total Price:</h2>
                           <h3 className="font-[600]">£{item.total_price}</h3>
                        </div>
                     </div>
                  ))}
                  <div className="mt-4 p-4">
                     <div className="flex justify-between">
                        <h3 className="text-[16px] text-gray-500 font-[500]">Sub- Total</h3>
                        <h3 className="font-[600] text-[18px]">£{order.total_amount}</h3>
                     </div>
                     <div className="flex justify-between mt-4">
                        <h3 className="text-[16px] text-gray-500 font-[500]">Discount</h3>
                        <h3 className="font-[600] text-[18px]">{order?.order_discount_amount || '00'}</h3>
                     </div>
                     <div className="flex justify-between mt-4">
                        <h3 className="text-[16px] text-gray-500 font-[500]">VAT</h3>
                        <h3 className="font-[600] text-[18px]">£{order.vat_amount || '00'}</h3>
                     </div>
                     <div className="flex justify-between mt-4">
                        <h3 className="text-[16px] text-gray-500 font-[500]">Delivery Fee</h3>
                        <h3 className="font-[600] text-[18px]">£{order?.delivery_amount || '00'}</h3>
                     </div>
                     <div className="flex justify-between mt-6">
                        <h3 className="text-[18px]  font-[500]">Total Cost</h3>
                        <div>
                           <h3 className="font-[600] text-[18px] text-end">£{order.payable_amount}</h3>
                           {order?.payment_status === 'pending'
                              ? <span className="rounded-[10px] font-[500] justify-center flex items-center w-[130px] h-[24px]  text-[12px] bg-[#ffa50094] text-orange-700 relative top-1 ">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#da5000" d="M17.385 21q-1.672 0-2.836-1.164Q13.385 18.67 13.385 17t1.164-2.835T17.384 13q1.672 0 2.836 1.165q1.165 1.164 1.165 2.835t-1.165 2.836T17.385 21m1.655-1.798l.546-.546l-1.817-1.818v-2.722H17v3.046zM5.615 20q-.67 0-1.143-.472Q4 19.056 4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h4.636q.14-.586.623-.985q.483-.4 1.125-.4q.654 0 1.134.4q.48.398.62.985h4.63q.672 0 1.144.472T20 5.616v6.019q-.258-.133-.488-.233T19 11.223V5.615q0-.23-.192-.423T18.384 5H16v2.23H8V5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .269.173.442t.443.173h6.126q.08.28.189.521q.11.24.28.479zM12 5.23q.348 0 .578-.229q.23-.23.23-.578t-.23-.578t-.578-.23t-.578.23t-.23.578t.23.578t.578.23" /></svg>
                                 Payment Pending</span>
                              : order?.payment_status === 'completed'
                                 ? <span className="rounded-[10px] font-[500] text-center justify-center flex items-center w-[130px] h-[24px]  text-[12px] bg-[#b4ffd9] text-[#2c9f65] relative top-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#2c9f65" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" /></svg> Payment Completed</span>

                                 : order?.payment_status === 'cancel'
                                    ? <span className="rounded-[10px] font-[500] text-center justify-center flex items-center w-[130px] h-[24px]  text-[12px] bg-[#ff0000] text-[#ff0000] relative top-1 ">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="64" stroke-dashoffset="64" d="M5.64 5.64c3.51 -3.51 9.21 -3.51 12.73 0c3.51 3.51 3.51 9.21 0 12.73c-3.51 3.51 -9.21 3.51 -12.73 0c-3.51 -3.51 -3.51 -9.21 -0 -12.73Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" /></path><path stroke-dasharray="20" stroke-dashoffset="20" d="M6 6l12 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="20;0" /></path></g></svg>
                                       Payment Cancelled</span>
                                    : 'Status Unknown'}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="p-7 m-5 rounded-[10px] border-[1px] border-gray-300 bg-[#fffefb]">
                  <h2 className="text-[32px] font-[600] border-b-[2px] border-gray-400 inline">SAMPLE BUSINESS NAME</h2>
                  <div className="mt-5">
                     <h2 className="text-[18px] font-[600] text-black/80">{order.customer?.name}</h2>
                     <Link>{order.customer?.email}</Link>
                     <h2 className="text-[16px] font-[500] text-black/80">{order.customer?.phone}</h2>
                  </div>
                  <div className="mt-6 flex justify-between">
                     <div className="mt-2">
                        <h2 className="text-[17px] text-gray-500 font-[500]">Billing Address</h2>
                        <h2 className="text-[18px] font-[700] text-black/80">{order.billing_address?.address_line1 || "N/A"}, {order.billing_address?.address_line2 || "N/A"}, {order.billing_address?.city || "N/A"}, {order.billing_address?.postal_code || "N/A"}, <br /> {order.billing_address?.country || "N/A"}</h2>
                     </div>
                     <div className="mt-2">
                        <h2 className="text-[17px] text-gray-500 font-[500]">Delivery Address</h2>
                        <h2 className="text-[18px] font-[700] text-black/80">{order.shipping_address?.address_line1 || "N/A"}, {order.shipping_address?.address_line2 || "N/A"}, {order.shipping_address?.city || "N/A"}, {order.shipping_address?.postal_code || "N/A"}, <br /> {order.shipping_address?.country || "N/A"}</h2>
                     </div>
                  </div>
               </div>
               <div className="mt-4 p-6">
                  <div className="flex flex-col justify-center sm:flex-row gap-4 mt-4">
                  {!invoiceId && (   
                     <button 
                        onClick={handleGenerateInvoice}
                        className="text-[17px] text-white cursor-pointer p-3 px-3 rounded-[10px] bg-[#4f1b5c] w-full sm:w-[33.3%]"
                        disabled={generatingInvoice}
                     >
                        {generatingInvoice ? "Generating..." : "Generate Invoice"}
                     </button>
                  )}
                   {invoiceId && (   
                     <button
                        onClick={handleViewInvoice}
                        disabled={!invoiceId}
                        className={`text-[17px] text-white cursor-pointer p-3 px-3 rounded-[10px] w-full sm:w-[33.3%] ${invoiceId ? "bg-[#4f1b5c]" : "bg-gray-400 cursor-not-allowed"}`}
                     >
                        View Invoice
                     </button>
                  )}
                     <button
                        onClick={handleDownloadInvoice}
                        disabled={!pdfUrl}
                        className={`text-[17px] text-white cursor-pointer p-3 px-3 rounded-[10px] w-full sm:w-[33.3%] ${pdfUrl ? "bg-[#4f1b5c]" : "bg-gray-400 cursor-not-allowed"}`}
                     >
                        Download Invoice
                     </button>

                     <button
                        onClick={handleSendInvoiceEmail}
                        disabled={!invoiceId}
                        className={`text-[17px] text-white cursor-pointer p-3 px-3 rounded-[10px] w-full sm:w-[33.3%] ${invoiceId ? "bg-[#4f1b5c]" : "bg-gray-400 cursor-not-allowed"}`}
                     >
                        Send Email
                     </button>
                  </div>

               </div>
            </div>
         </div>
      </>
   );
};

export default OrderDetailNew;

