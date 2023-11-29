
export default function Home() {
  return (
    <div className="w-full bg-gray-900 h-full py-4 absolute flex flex-col items-center justify-center">
      <h1 className="text-gray-50 font-bold text-center text-6xl">ProdPal 🛠</h1>
      <h2 className="text-gray-50 mt-4 text-center text-4xl">
        Share The Products You Love, Explore Real User Picks
      </h2>
      <p className="text-gray-50 mt-10 text-center italic text-xl">
        ProdPal has no products submitted yet, be the first one to <button type="button" className="underline italic font-bold">
          contribute your product picks now!
        </button>
      </p>
      <p className="absolute bottom-10 text-gray-50">This is only on test mode, no products will really be submitted yet.</p>
    </div>
  )
}
