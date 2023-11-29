import { useState } from 'react'

export default function Home() {

  const [ showForm, setShowForm ] = useState(false)
  const [ showNextStep, setShowNextStep ] = useState(false)
  const [ name, setName ] = useState('')
  const [ productName, setProductName ] = useState('')
  const [ url, setUrl ] = useState('')
  const [ range, setRange ] = useState(0)

  return (
    <div className="w-full bg-gray-900 h-full py-4 absolute flex flex-col items-center justify-center">
      <h1 className="text-gray-50 font-bold text-center text-6xl">ProdPal 🛠</h1>
      <h2 className="text-gray-50 mt-4 mb-12 text-center text-4xl">
        Share The Products You Love, Explore Real User Picks
      </h2>
      {
        showForm == false &&
        <p className="text-gray-50 mt-10 text-center italic text-xl">
        ProdPal has no products submitted yet, be the first one to <button onClick={() => setShowForm(true)} type="button" className="underline italic font-bold">
          contribute your product picks now!
        </button>
      </p>
      }
      
      {
        (showForm && (showNextStep == false))&&
        <form className="rounded-lg p-4 border-2 border-gray-100 flex flex-col">
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="name" className="font-bold text-gray-50 text-xl mr-4">Name: </label>
          <input id="name" value={name} onChange={e => setName(e.target.value)} type="text" className="border-4 border-gray-50 bg-gray-800 rounded-lg p-2 text-gray-50 font-bold" required />
          </div>
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="product_name" className="font-bold text-gray-50 text-xl mr-4">Product name: </label>
          <input type="text" id="product_name" value={productName} onChange={e => setProductName(e.target.value)} className="rounded-lg p-2 text-gray-50 bg-gray-800 border-4 border-gray-50 font-bold" required />
          </div>
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="product_url" className="font-bold text-gray-50 text-xl mr-4">Product URL: </label>
          <input type="url" id="product_url" value={url} onChange={e => setUrl(e.target.value)} className="rounded-lg p-2 text-gray-50 bg-gray-800 border-4 border-gray-50 font-bold" required />
          </div>
          <label className="font-bold text-gray-50 text-xl italic mb-2">How long have you been using this product?</label>
          {
            range == 1 && <p className="font-bold text-gray-50 mb-2">Less than 1 year</p>
          }
          {
            range == 2 && <p className="font-bold text-gray-50 mb-2">Between 1 and 2 years</p>
          }
          <input type="range" min="0" max="5" value={range} onChange={e => setRange(e.target.value)} />
          <label className="font-bold text-gray-50 text-xl italic mb-2">Tell me about your experience using it:</label>
          <textarea rows="8" cols="20" maxLength={320} placeholder='What did you like about it? What did you use it for? Please be as precise and concise as possible.' className="px-3 py-1 font-bold text-lg text-gray-800 rounded-lg"></textarea>
          <button type="button" className="rounded-lg px-3 py-2 font-bold text-gray-50 hover:text-gray-900 hover:bg-gray-50 bg-gray-900 mt-4 hover:bg-gray-800 border-4 border-gray-50">Next step</button>
        </form>
      }
      {
        (showForm && (showNextStep == true))&&
        <form className="rounded-lg p-4 border-2 border-gray-100 flex flex-col">
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="name" className="font-bold text-gray-50 text-xl mr-4">Name: </label>
          <input id="name" value={name} onChange={e => setName(e.target.value)} type="text" className="border-4 border-gray-50 bg-gray-800 rounded-lg p-2 text-gray-50 font-bold" required />
          </div>
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="product_name" className="font-bold text-gray-50 text-xl mr-4">Product name: </label>
          <input type="text" id="product_name" value={productName} onChange={e => setProductName(e.target.value)} className="rounded-lg p-2 text-gray-50 bg-gray-800 border-4 border-gray-50 font-bold" required />
          </div>
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="product_url" className="font-bold text-gray-50 text-xl mr-4">Product URL: </label>
          <input type="url" id="product_url" value={url} onChange={e => setUrl(e.target.value)} className="rounded-lg p-2 text-gray-50 bg-gray-800 border-4 border-gray-50 font-bold" required />
          </div>
          <label className="font-bold text-gray-50 text-xl italic mb-2">Tell me about your experience using it:</label>
          <textarea rows="8" cols="20" maxLength={320} placeholder='What did you like about it? What did you use it for? Please be as precise and concise as possible.' className="px-3 py-1 font-bold text-lg text-gray-800 rounded-lg"></textarea>
          <button type="button" className="rounded-lg px-3 py-2 font-bold text-gray-50 hover:text-gray-900 hover:bg-gray-50 bg-gray-900 mt-4 hover:bg-gray-800 border-4 border-gray-50">Next step</button>
        </form>
      }
      <p className="mt-8 text-gray-50">This is only on test mode, no products will really be submitted yet.</p>
    </div>
  )
}
