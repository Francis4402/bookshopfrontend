import { Collapse } from "antd";


const text = `A bookshop offers a curated selection of books across various genres, providing readers with access to new releases, classics, and rare finds. It's a place where you can explore literary treasures, get personalized recommendations, and enjoy a welcoming atmosphere for book lovers.`;

const text2 = `Could you clarify what "none BD countries" refers to? Are you asking about shipping fees for non-Bangladesh (BD) countries from a bookshop, or something else? Let me know so I can give you the right information!`;

const text3 = `Are you asking about the fees for international orders from a specific bookshop? If so, let me know which bookshop you’re referring to, or if you’re looking for general information on international shipping fees for books.`;

const text4 = `International order fees for a bookshop should account for shipping costs, customs duties, and regional variations. Common mistakes include underestimating shipping fees, not informing customers about import taxes, using flat rates that don’t match actual costs, and failing to offer multiple shipping options. Transparent pricing and accurate cost calculations help avoid unexpected charges and improve customer satisfaction.`;

const text5 = `Bookshops offer various shipping methods for international orders, including standard, expedited, and express shipping. Costs depend on package weight, destination, and carrier rates. Some services provide tracking and insurance, while others offer budget-friendly economy shipping. Customers should check estimated delivery times and potential customs fees before ordering.`;

const text6 = `The billing address is the address associated with the customer's payment method, typically their credit or debit card. It is used for payment verification and must match the address on file with the card issuer. A correct billing address ensures successful transactions and prevents payment issues or fraud.`;



const FAQPage = () => {
  return (
    <div>
        <div className="lg:h-[400px] md:h-[200px] w-full bg-[url('/eventstopimage.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="text-white lg:h-[400px] md:h-[200px] bg-black/40 flex flex-col gap-5 justify-center items-center">
              <p className="text-xl font-semibold">INFO</p>
              <h1  className="md:text-4xl text-2xl font-serif">FAQ Page</h1>
          </div>
        </div>

        <div className="container mx-auto items-center justify-center md:px-0 px-5">
            <div className="flex lg:flex-row flex-col justify-between lg:gap-20">
                <div className="flex flex-col gap-5 mt-28 font-serif max-w-5xl">
                    <p className="text-gray-500">OUR SERVICES</p>

                    <h1 className="text-4xl">Latest Books Online</h1>

                    <p className="text-gray-500">Discover the latest books online with ease, exploring a wide selection of new releases, bestsellers, and hidden gems. Browse, shop, and enjoy your next great read from the comfort of your home.</p>
                </div>

                <div className="flex flex-col gap-2 my-10 font-serif w-full">

                    <Collapse expandIconPosition="end" size="large" ghost items={[{key: '1', label: (
                        <p className="text-xl font-serif border-b border-gray-500 pb-5">
                        Important information
                        </p>
                    ), children: <p className="text-gray-500">{text}</p>}]} />
                    
                    <Collapse expandIconPosition="end" size="large" ghost items={[{key: '1', label: (
                        <p className="text-xl font-serif border-b border-gray-500 pb-5">
                        Fees for none BD countries
                        </p>
                    ), children: <p className="text-gray-500">{text2}</p>}]} />

                    <Collapse expandIconPosition="end" size="large" ghost items={[{key: '1', label: (
                        <p className="text-xl font-serif border-b border-gray-500 pb-5">
                        International orders
                        </p>
                    ), children: <p className="text-gray-500">{text3}</p>}]} />

                    <Collapse expandIconPosition="end" size="large" ghost items={[{key: '1', label: (
                        <p className="text-xl font-serif border-b border-gray-500 pb-5">
                        Common mistakes
                        </p>
                    ), children: <p className="text-gray-500">{text4}</p>}]} />

                    <Collapse expandIconPosition="end" size="large" ghost items={[{key: '1', label: (
                        <p className="text-xl font-serif border-b border-gray-500 pb-5">
                        Shipping method
                        </p>
                    ), children: <p className="text-gray-500">{text5}</p>}]} />

                    <Collapse expandIconPosition="end" size="large" ghost items={[{key: '1', label: (
                        <p className="text-xl font-serif border-b border-gray-500 pb-5">
                        Billing address
                        </p>
                    ), children: <p className="text-gray-500">{text6}</p>}]} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQPage