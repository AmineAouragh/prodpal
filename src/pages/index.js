import { useState } from 'react'
import Link from 'next/link'

export default function Home() {

  const [ showForm, setShowForm ] = useState(false)
  const [ showStepTwo, setShowStepTwo ] = useState(false)
  const [ showStepThree, setShowStepThree ] = useState(false)
  const [ name, setName ] = useState('')
  const [ productName, setProductName ] = useState('')
  const [ url, setUrl ] = useState('')
  const [ range, setRange ] = useState(0)
  const [ duration, setDuration ] = useState('')
  const [ features, setFeatures ] = useState('')
  const [ productImpact, setProductImpact ] = useState('')
  const [ context, setContext ] = useState('')
  const [ submitClicked, setSubmitClicked ] = useState(false)
  const [ showSubmittedProduct, setShowSubmittedProduct ] = useState(false)

  function convertRangeToText() {
    switch(range) {
      case 1:
        setDuration('Less than 1 year')
        break
      case 2:
        setDuration('Between 1 and 2 years')
        break
      case 3:
        setDuration('Between 2 and 3 years')
        break
      case 4:
        setDuration('Between 3 and 5 years')
        break
      case 5:
        setDuration('5+ years')
        break
    }
  }
 
  function moveToStepTwo() {
    if (name.length >= 3 && productName.length >= 3 && range >= 1 && productImpact.length >= 80) {
      setShowStepTwo(true)
      convertRangeToText()
    } else {
      setShowStepTwo(false)
    }
  }

  function moveToStepThree() {
    if (features.length >= 80 && context.length >= 100) {
      setShowStepThree(true)
    } else {
      setShowStepThree(false)
    }
  }

  return (
    <div className={`w-full bg-gray-900 min-h-screen py-4 px-2 relative  flex flex-col items-center justify-center`}>
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
        (showForm && (showStepTwo == false))&&
        <form className="rounded-lg p-4 border-2 border-gray-100 flex flex-col 2xl:w-1/4">
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="name" className="font-bold text-gray-50 text-xl mr-4">Name: </label>
          <input id="name" value={name} onChange={e => setName(e.target.value)} type="text" className="border-4 border-gray-50 bg-gray-800 rounded-lg px-2 py-1 text-gray-50 font-bold" required />
          </div>
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="product_name" className="font-bold text-gray-50 text-xl mr-4">Product name: </label>
          <input type="text" id="product_name" value={productName} onChange={e => setProductName(e.target.value)} className="rounded-lg px-2 py-1 text-gray-50 bg-gray-800 border-4 border-gray-50 font-bold" required />
          </div>
          <div className="flex flex-row items-center mb-3">
          <label htmlFor="product_url" className="font-bold text-gray-50 text-xl mr-4">Product URL: </label>
          <input type="url" id="product_url" value={url} onChange={e => setUrl(e.target.value)} className="rounded-lg px-2 py-1 text-gray-50 bg-gray-800 border-4 border-gray-50 font-bold" required />
          </div>
          <label className="font-bold break-words text-gray-50 text-xl italic mb-2">How did this product positively impact your daily life or workflow?</label>
          <textarea rows="6" cols="20" maxLength={320} value={productImpact} onChange={e => setProductImpact(e.target.value)} placeholder='Please be as precise and concise as possible. 80 characters minimum required.' className="px-3 py-1 mb-2 font-bold text-lg text-gray-800 rounded-lg">
            
          </textarea>
          <label className="font-bold text-gray-50 text-xl italic mb-2">How long have you been using this product?</label>
          { range == 1 && <p className="font-bold text-lg text-yellow-300 mb-2">Less than 1 year</p> }
          { range == 2 && <p className="font-bold text-lg text-yellow-300 mb-2">Between 1 and 2 years</p> }
          { range == 3 && <p className="font-bold text-lg text-yellow-300 mb-2">Between 2 and 3 years</p> }
          { range == 4 && <p className="font-bold text-lg text-yellow-300 mb-2">Between 3 and 5 years</p> }
          { range == 5 && <p className="font-bold text-lg text-yellow-300 mb-2">5+ years 😎</p> }
          <input type="range" min="0" max="5" value={range} onChange={e => setRange(e.target.value)} className="bg-yellow-300 mb-2" />
          <button type="button" onClick={moveToStepTwo} className="rounded-lg px-3 py-2 font-bold text-gray-900 hover:text-gray-50 bg-gray-50 hover:bg-gray-900 mt-4 border-4 border-gray-50">Step 1/3</button>
        </form>
      }
      {
        (showForm && (showStepTwo == true) && (showStepThree == false))&&
        <form className="rounded-lg p-4 border-2 border-gray-100 flex flex-col 2xl:w-1/4">
          <label className="font-bold text-gray-50 text-xl italic mb-2">What specific features of the product do you find most valuable or enjoyable?</label>
          <textarea rows="6" cols="20" maxLength={320} value={features} onChange={e => setFeatures(e.target.value)} placeholder='Please be as precise and concise as possible. 80 characters minimum required.' className="px-3 py-1 mb-2 font-bold text-lg text-gray-800 rounded-lg">
            
          </textarea>
          <label className="font-bold text-gray-50 text-xl italic mb-2">In what context or situation do you primarily use this product?</label>
          <textarea rows="6" cols="20" value={context} onChange={e => setContext(e.target.value)} maxLength={320} placeholder='Please be as precise and concise as possible. 100 characters minimum required.' className="px-3 py-1 mb-2 font-bold text-lg text-gray-800 rounded-lg">
            
          </textarea>
          
          <button type="button" onClick={moveToStepThree} className="rounded-lg px-3 py-2 font-bold hover:text-gray-50 text-gray-900 bg-gray-50 hover:bg-gray-900 mt-4 border-4 border-gray-50">Step 2/3</button>
        </form>
      }
      {
        (showForm && (showStepThree == true) && (submitClicked == false))&&
        <form className="rounded-lg p-4 border-2 border-gray-100 flex flex-col 2xl:w-1/4">
          
          <label className="font-bold text-gray-50 text-xl italic mb-2">Is there anything else you would like to share about your experience with this product?(optional)</label>
          <textarea rows="8" cols="20" maxLength={320} placeholder='What did you like about it? What did you use it for? Please be as precise and concise as possible.' className="px-3 py-1 font-bold text-lg text-gray-800 rounded-lg"></textarea>
          <button type="button" onClick={() => setSubmitClicked(true)} className="rounded-lg px-3 py-2 font-bold hover:text-gray-50 text-gray-900 hover:bg-gray-900 bg-gray-50 mt-4 border-4 border-gray-50">Submit the product</button>
        </form>
      }
      {
        (submitClicked && (showSubmittedProduct == false)) &&
        <div className="border-2 flex flex-col items-center border-gray-50 rounded-lg px-3 py-2">
        <p className="text-gray-50 font-bold text-xl">The product was submitted for review. Thank you for your contribution.</p>
        <button type="button" onClick={() => setShowSubmittedProduct(true)} className="underline text-center mt-2 text-gray-50 font-bold text-xl">Check your submission</button>
        </div>
      }
      {
        showSubmittedProduct &&
        <div className="border-2 p-4 border-gray-50 rounded-lg 2xl:w-1/3">
          <p className="text-gray-50 break-words text-center mb-4 text-4xl">Hi, <span className="font-bold">{name}!</span> Thanks for submitting <span className="font-bold">{productName}</span> to ProdPal</p>
          <p className="text-gray-50 text-xl mb-2">Product URL: <Link href={`https://${url}`} className="underline">{url}</Link></p>
          <p className="text-gray-50 text-xl mb-2"><span className="font-bold">{productName}</span> is a product you&apos;ve been using for {range}</p>
          <p className="text-gray-50 text-xl">How <span className="font-bold">{productName}</span> impacted your daily life or workflow:</p>
          <p className="text-gray-50 bg-gray-800 my-2 break-words max-w-xl px-2 py-1 rounded-md italic text-xl">{productImpact}</p>
          <p className="text-gray-50 text-xl">The specific features of <span className="font-bold">{productName}</span> you find most valuable or enjoyable:</p>
          <p className="text-gray-50 bg-gray-800 my-2 break-words max-w-xl px-2 py-1 rounded-md italic text-xl">{features}</p>
          <p className="text-gray-50 text-xl">The context or situation where you primarily use <span className="font-bold">{productName}</span>:</p>
          <p className="text-gray-50 bg-gray-800 my-2 break-words max-w-xl px-2 py-1 rounded-md italic text-xl">{context}</p>
          <div className="flex flex-row justify-center">
          <button type="button" onClick={() => setShowSubmittedProduct(false)} className="rounded-lg px-3 py-2 font-bold hover:text-gray-50 text-gray-900 hover:bg-gray-900 bg-gray-50 mt-4 border-4 border-gray-50">Good!</button>
          </div>
        </div>
      }
      <p className="mt-8 text-gray-50">This is only on test mode, no products will really be submitted yet.</p>
    </div>
  )
}
