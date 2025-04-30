function Hero(){
    return (
        <section className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">


                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Grab upto 50% Off on  Selected Products</h1>
                    <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
              Buy now
            </button>
                </div>

                <div className="flex-1">
                    <img src="/images/hero.png" alt="" width="400" height="400" className="rounded-lg mx-auto md:mx-0" />
                </div>
            </div>
        </section>
    )

}
export default Hero;