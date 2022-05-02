<div class="max-w-screen-md mx-auto p-5">
  <div class="text-center mb-16">
    <p class="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
      Contact
    </p>
    <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
      Get In <span class="text-indigo-600">Touch</span>
    </h3>
  </div>

  <form class="w-full">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          First Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Last Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Email Address
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-email"
          type="email"
          placeholder="********@*****.**"
        />
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Your Message
        </label>
        <textarea
          rows="10"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        ></textarea>
      </div>
      <div class="flex justify-between w-full px-3">
        <div class="md:flex md:items-center">
          <label class="block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <button
          class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </div>
  </form>
</div>

          {/* Contact Start */}
          <section id="contact">
      <picture>
        <source srcset={rock6webp} type="image/webp"/>
        <img class="rellax absolute right-5 w-2/12 h-auto" alt="floating rock6" data-rellax-speed="1" src={rock6}/>
      </picture>
        <div class="w-11/12 relative max-md:h-auto md:h-screen bg-cover overflow-hidden">
          <div class="mt-20 ml-5 md:ml-20">
            <div class="bg-clip-text text-transparent bg-gradient-to-b from-white to-prometheus-gray text-center">
              <p class="max-sm:text-white text-4xl md:text-6xl 2xl:text-8xl font-display text-left">We're always</p>
              <p class="max-sm:text-white text-4xl md:text-6xl 2xl:text-8xl font-display text-left">ready for</p>
              <p class="max-sm:text-white text-4xl md:text-6xl 2xl:text-8xl font-display text-left">new stories</p>
            </div>
            <p class="text-white text-3xl xl:text-3xl 2xl:text-6xl font-visby z-10 text-left mt-10">Contact us and get a quote</p>
            <picture>
              <source srcset={rock7webp} type="image/webp"/>
              <img class="max-xl:hidden absolute bottom-0 z-0 -left-10 w-2/12 h-auto" alt="floating rock7" src={rock7}/>
            </picture>
            <Router>
              <Link onClick={openTab} target="_blank">
              <button class="bg-prometheus-gold hover:bg-white text-white hover:text-black text-xl md:text-2xl 2xl:text-4xl py-2 2xl:py-6 px-6 2xl:px-16 mt-10 mb-10">
                Click Here</button>
              </Link>
            </Router>
          </div>
        </div>      
      </section>
      {/* Contact End */}