const Newsletter = () => {
  return (
    <section className="relative">
      <div className="container absolute left-1/2 top-8 -translate-x-1/2 md:top-14">
        <div className="max-w-[700px] mx-auto rounded-lg bg-slate-100 px-8 py-8 text-center border border-slate-200 shadow-sm">
          <div className="mb-8 space-y-4">
            <h2 className="text-2xl font-bold">Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremly generous. If you have any questions, our support team would be happy to help you</p>
          </div>
          <form action="#">
            <div className="flex items-center justify-between gap-4">
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@example.com"
                  className="h-10 w-full rounded-lg pl-4 text-slate-800 placeholder:text-black/25 outline-none md:mb-0 border border-black/60"
                />
                <p className="hidden text-accent-300 text-xs font-bold absolute bottom-4 left-4 md:bottom-[-1.3rem]">Please eneter a valid email address</p>
              </div>
              <button
                type="submit"
                className="relative bg-linear-to-br from-bprimary to-bsecondary text-white px-4 py-2 rounded-full cursor-pointer hover:from-accent-200 hover:to-accent-100 font-semibold whitespace-nowrap"
              >
                Get started for free
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter