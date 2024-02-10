<template>
  <main class="">
    <SketchBoard />
    <!-- <div class="bg-black px-4 py-3 text-white">
      <div
        class="md:flex justify-center items-center space-y-3 md:space-y-0 gap-x-3 text-white"
        v-if="timeRemaining > 0"
      >
        <p class="text-xs md:text-sm">🔥 Count down to Induction:</p>
        <div class="flex justify-center items-center gap-x-3 text-white">
          <p
            class="text-white font-black text-xs md:text-sm flex items-center gap-x-2"
          >
            {{ weeks }} Weeks
          </p>
          <p
            class="text-white font-black text-xs md:text-sm flex items-center gap-x-2"
          >
            {{ days }} Days
          </p>
          <p
            class="text-white font-black text-xs md:text-sm flex items-center gap-x-2"
          >
            {{ hours }} Hours
          </p>
          <p
            class="text-white font-black text-xs md:text-sm flex items-center gap-x-2"
          >
            {{ minutes }} Minutes
          </p>
          <p
            class="text-white font-black text-xs md:text-sm flex items-center gap-x-2"
          >
            {{ seconds }} Seconds 🔥
          </p>
        </div>
      </div>
      <div v-else>
        <p class="text-white text-sm hidden">Countdown has ended!</p>
      </div>
    </div> -->
    <div
      class="animate__animated animate__rotateIn bg-gray-100 lg:text-2xl leading-relaxed tracking-wider p-6 lg:p-10 lg:px-20"
    >
      <span class="font-bold text-gray-900"
        >The Nigerian Medical Laboratory Science Students Association (NIMELSSA)
      </span>
      is the student body Association of the department of Medical Laboratory
      Science and is one of the departments of the University of Lagos (UNILAG)
      under the College of Medicine.
    </div>
    <section class="md:my-10">
      <div class="text-center mb-10">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          Our Activities
        </h1>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <ssr-carousel loop :slides-per-page="1" :autoplay-delay="3">
        <section
          class="bg-cover bg-top bg-no-repeat relative"
          v-for="(itm, idx) in carousels"
          :key="idx"
        >
          <img
            :src="require(`@/assets/images/${itm.img}`)"
            alt=""
            class="h-[800px] w-full object-center object-cover"
          />
          <div class="absolute inset-0 bg-black/75"></div>
        </section>
      </ssr-carousel>
    </section>
    <!-- <div>
      <LatestProducts />
    </div> -->

    <section class="py-10">
      <upcoming-events />
    </section>

    <section class="hidden">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yGLAGdjMCDQ?si=iyYJobRb0rnlp3_Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </section>

    <section>
      <our-classes></our-classes>
    </section>

    <section
      class="bg-[url('@/assets/images/extra3.jpg')] bg-cover bg-top bg-no-repeat relative py-20"
    >
      <div class="absolute inset-0 bg-black/30"></div>
      <h1
        class="lg:text-8xl lg:max-w-7xl text-3xl font-semibold leading-loose tracking-wider lg:px-20 text-center md:text-left"
        data-aos="flip-left"
      >
        BUILD THE SKILLS
      </h1>
      <p
        class="text-xl text-justify md:text-2xl leading-loose text-gray-900 tracking-wider p-6 md:p-10 lg:px-20"
        data-aos="flip-left"
      >
        Building skills as a medical laboratory science student involves
        mastering technical procedures, honing analytical thinking, and
        developing strong attention to detail. Effective communication, time
        management, and adherence to safety protocols are crucial. Continuous
        learning and staying updated on advancements in the field are essential,
        along with fostering interpersonal and teamwork skills. These skills
        collectively contribute to success in a fast-paced and demanding
        laboratory environment, ensuring accurate and timely diagnostic results
        for patient care.
      </p>
      <div class="px-20" data-aos="flip-left">
        <button
          class="bg-black text-white uppercase flex items-center gap-x-2 py-3 px-6"
        >
          <p>How we do it</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>

    <section
      class="bg-[url('@/assets/images/shapes.jpg')] bg-cover bg-top bg-no-repeat relative py-20"
    >
      <div class="absolute inset-0 bg-black/30"></div>
      <h1
        data-aos="zoom-in-up"
        class="lg:text-8xl lg:max-w-7xl text-3xl font-semibold leading-loose tracking-wider lg:px-20 text-center md:text-left"
      >
        BUILD YOURSELF
      </h1>
      <p
        class="text-xl text-justify md:text-2xl leading-loose text-black tracking-wider p-6 md:p-10 lg:px-20"
        data-aos="flip-left"
      >
        Embark on the journey of self-building with unwavering determination and
        a positive mindset. Embrace challenges as stepping stones, learn from
        failures as lessons, and celebrate successes as milestones. Cultivate
        resilience, set ambitious goals, and continuously strive for personal
        growth. Fuel your journey with passion, curiosity, and a relentless
        commitment to becoming the best version of yourself. Remember, the
        process is as valuable as the destination, so enjoy the transformative
        ride of self-discovery and improvement. Your potential knows no bounds –
        build the resilient, empowered, and remarkable individual you aspire to
        be. The power to shape your destiny lies within you. Go, build the
        extraordinary you!
      </p>
      <div data-aos="zoom-in-up" class="px-20">
        <button
          class="bg-black text-white uppercase flex items-center gap-x-2 py-3 px-6"
        >
          <p>How we do it</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
    <section
      class="bg-[url('@/assets/images/shape2.jpg')] bg-cover bg-top bg-no-repeat relative py-20"
    >
      <div class="absolute inset-0 bg-black/30"></div>
      <h1
        data-aos="zoom-in-up"
        class="lg:text-8xl lg:max-w-7xl text-3xl font-semibold leading-loose tracking-wider lg:px-20 text-center md:text-left"
      >
        BUILD THE WORLD
      </h1>
      <p
        class="text-xl text-justify md:text-2xl leading-loose text-black tracking-wider p-6 md:p-10 lg:px-20"
        data-aos="flip-left"
      >
        Building a world in the context of a medical laboratory science student
        involves mastering technical skills, enhancing analytical thinking, and
        developing attention to detail. By prioritizing effective communication,
        time management, and strict adherence to safety protocols, students can
        contribute to a reliable and efficient laboratory environment.
        Continuous learning and staying updated on advancements in the field are
        key to making a positive impact. Fostering interpersonal and teamwork
        skills is essential for collaboration within the healthcare community.
        This comprehensive skill set not only ensures personal success but also
        contributes to the broader goal of providing accurate and timely
        diagnostic results, ultimately making a meaningful difference in patient
        care. This motivation encourages students to work harder to excel in
        their studies and contribute significantly to the healthcare field.
      </p>
      <div data-aos="zoom-in-up" class="px-20">
        <button
          class="bg-black text-white uppercase flex items-center gap-x-2 py-3 px-6"
        >
          <p>How we do it</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
    <section class="mx-auto py-16 space-y-10 md:px-16 px-1">
      <div class="space-y-6 px-6 md:px-0">
        <div class="h-1 w-full p-1 rounded-full bg-neutral-800"></div>
        <div class="space-y-4 md:space-y-0">
          <h1
            class="text-4xl font-medium"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            THIS COULD BE YOU
          </h1>
          <P
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            class="max-w-xl font-normal leading-relaxed"
          >
            NIMELSSA Unilag is an association, which plans and arranges some
            academic, social, non-academic activities, career fairs, and a
            Department in the University of Lagos.</P
          >
        </div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-10/12 px-6 md:px-0"
      >
        <a href="#" class="block">
          <img
            alt="Art"
            src="@/assets/images/user1.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
          />

          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Paul Sobers
          </h3>

          <p class="mt-1 max-w-sm text-gray-700">Associate Software Engineer</p>
          <p class="mt-1 max-w-sm text-gray-700">Interswitch</p>
        </a>
        <a href="#" class="block">
          <img
            alt="Art"
            src="@/assets/images/user2.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
          />

          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Stephanie Smith
          </h3>

          <p class="mt-1 max-w-sm text-gray-700">Senior Software Engineer</p>
          <p class="mt-1 max-w-sm text-gray-700">Goodle</p>
        </a>
        <a href="#" class="block">
          <img
            alt="Art"
            src="@/assets/images/user3.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
          />

          <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Mark Griffith
          </h3>

          <p class="mt-1 max-w-sm text-gray-700">Mobile Engineer</p>
          <p class="mt-1 max-w-sm text-gray-700">Amazon</p>
        </a>
      </div>
    </section>
    <section class="bg-yellow-500 px-6 md:px-20 py-32 space-y-8">
      <h1
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="md:text-4xl font-semibold text-gray-700 text-xl leading-relaxed tracking-wider md:tracking-widest md:leading-loose"
      >
        "An unknown profession to some and not so important to many. It's
        because we just remain quiet and unseen but we see things beyond the
        capacity of the naked eye and we know the condition of patients without
        seeing them. We may not take cate of patients but we care about what's
        wrong with them. We may not charm doctors but they rely on us. We play
        an essential part as backbone of the diagnostic team. We are proud
        Medical Laboratory Scientist. Proud to be one ❤️"
      </h1>
      <p class="text-sm font-semibold">NIMELSSA Unilag.</p>
    </section>
    <section
      class="bg-[url('@/assets/images/outreach.jpg')] bg-cover bg-top bg-no-repeat relative py-[500px]"
    >
      <div class="absolute inset-0 bg-black/75"></div>
    </section>
    <section class="mx-auto py-16 space-y-10 md:px-16 px-1">
      <div class="space-y-6 px-6 md:px-0">
        <div class="h-1 w-full p-1 rounded-full bg-neutral-800"></div>
        <div class="space-y-4 md:space-y-0">
          <h1 class="md:text-4xl text-2xl font-medium" data-aos="zoom-in-right">
            NIMELSSA IN THE MEDIA
          </h1>
          <P
            class="max-w-xl font-normal leading-relaxed"
            data-aos="zoom-in-right"
          >
            NIMELSSA Unilag is an association, which plans and arranges some
            academic, social, non-academic activities, career fairs, and a
            Department in the University of Lagos.</P
          >
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-0"
        data-aos="zoom-in-right"
      >
        <a href="#" class="block">
          <img
            alt="Art"
            src="@/assets/images/user1.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
          />

          <h3
            class="mt-4 text-sm lg:text-lg font-bold text-gray-900 sm:text-xl"
          >
            Documentary offers empowered approach to dementia and Alzheimer’s
            disease
          </h3>

          <p class="mt-2 max-w-sm text-gray-700">
            “Why” is a documentary created by the KU Alzheimer’s Disease
            Research Center that puts forth a positive perspective on the lives
            of people living with cognitive decline and dementia.
          </p>
          <p class="mt-1 max-w-sm text-sm font-bold text-gray-700">
            November 21, 2023
          </p>
        </a>
        <a href="#" class="block">
          <img
            alt="Art"
            src="@/assets/images/user2.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
          />

          <h3
            class="mt-4 text-sm lg:text-lg font-bold text-gray-900 sm:text-xl"
          >
            KU undergraduate nursing program rises to No. 17 in the nation among
            public schools in U.S. News rankings
          </h3>

          <p class="mt-2 max-w-sm text-gray-700">
            KU’s Bachelor of Science in Nursing program also ranked 23rd among
            all schools in the 2024 “Best Colleges” rankings released by U.S.
            News & World Report.
          </p>
          <p class="mt-1 max-w-sm text-sm font-bold text-gray-700">
            September 19, 2023
          </p>
        </a>
        <a href="#" class="block">
          <img
            alt="Art"
            src="@/assets/images/user3.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
          />

          <h3
            class="mt-4 text-sm lg:text-lg font-bold text-gray-900 sm:text-xl"
          >
            KU Medical Center announces four-state Heartland Consortium as part
            of the All of Us Research Program to advance precision medicine
          </h3>

          <p class="mt-2 max-w-sm text-gray-700">
            Part of the National Institutes of Health, the All of Us Research
            Program is working to collect data from a
          </p>
          <p class="mt-1 max-w-sm text-sm font-bold text-gray-700">
            September 13, 2023
          </p>
        </a>
        <a href="#" class="block">
          <img
            alt="Art"
            src="@/assets/images/outreach.jpg"
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
          />

          <h3
            class="mt-4 text-sm lg:text-lg font-bold text-gray-900 sm:text-xl"
          >
            Rural Kansas Photo Contest accepting entries to showcase the state
          </h3>

          <p class="mt-2 max-w-sm text-gray-700">
            Rural Health Education and Services at KU Medical Center invites
            entries to highlight the unique beauty of Kansas and its people
          </p>
          <p class="mt-1 max-w-sm text-sm font-bold text-gray-700">
            September 11, 2023
          </p>
        </a>
      </div>
    </section>
    <section>
      <our-entreprenures></our-entreprenures>
    </section>
    <section>
      <SponsorSection />
    </section>
    <OutGoingTestimonials />
    <FrequentlyAskedQuestions />
    <section class="text-gray-600 body-font relative">
      <div
        class="container px-5 py-24 mx-auto lg:flex sm:flex-nowrap flex-wrap"
      >
        <div
          class="lg:w-2/3 md:w-1/2 bg-gray-300 w-full rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
          ></iframe>
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
                ADDRESS
              </h2>
              <p class="mt-1">
                College of Medicine of the University of Lagos, Private Mail Bag
                12003, Lagos, Nigeria.
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
                EMAIL
              </h2>
              <a class="text-indigo-500 leading-relaxed"
                >nimelssaunilag@email.com</a
              >
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
              >
                PHONE
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          @submit.prevent="handleFeedback"
          class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Let us know what you think about NIMELSSA.
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600"
              >Name</label
            >
            <input
              v-model="form.name"
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="matric" class="leading-7 text-sm text-gray-600"
              >Matric Number</label
            >
            <input
              v-model="form.matric"
              type="number"
              id="email"
              name="matric"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            :class="[!isFormEmpty ? 'opacity-25 cursor-not-allowed' : '']"
            :disabled="!isFormEmpty"
            class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            {{ loading ? "processing..." : "Submit" }}
          </button>
        </form>
      </div>
    </section>
    <footer class="bg-gray-100">
      <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="flex justify-center text-teal-600">
          <img src="@/assets/images/logo.png" class="h-20 w-20" alt="" />
        </div>

        <p
          class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500"
        >
          My Nimelssa. Your Nimelssa. Our Nimelssa
        </p>

        <ul
          class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
        >
          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              About
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              Alumni
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              NIMELSSA Quiz
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              NIMELSSA Records
            </nuxt-link>
          </li>

          <li>
            <nuxt-link
              to="/auth/login"
              class="text-gray-700 transition hover:text-gray-700/75"
              href="https://nimelssaunilag.wordpress.com/"
            >
              Blog
            </nuxt-link>
          </li>
        </ul>

        <ul class="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/nimelssaunilageb/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-gray-700 transition hover:text-gray-700/75"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </main>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
import ssrCarouselCss from "vue-ssr-carousel/index.css";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
import OurClasses from "@/components/OurClasses.vue";
import OutGoingTestimonials from "@/components/OutGoingTestimonials.vue";
import OurEntreprenures from "@/components/OurEntreprenures.vue";
import AboutUs from "@/components/AboutUs.vue";
import SponsorSection from "@/components/SponsorSection.vue";
// import LatestProducts from '@/components/LatestProducts.vue'
import SketchBoard from "@/components/SketchBoard.vue";
export default {
  layout: "landing",
  components: {
    SsrCarousel,
    UpcomingEvents,
    OurClasses,
    OutGoingTestimonials,
    OurEntreprenures,
    AboutUs,
    SketchBoard,
    SponsorSection,
    // LatestProducts
  },
  data() {
    return {
      loading: false,
      startDate: new Date(),
      endDate: new Date("2023-12-22"),
      timeRemaining: 0,
      form: {
        name: "",
        matric: "",
        message: "",
      },
      carousels: [
        {
          img: "add18.jpg",
          title: "",
          description: "",
        },
        {
          img: "hero1.jpg",
          title: "",
          description: "",
        },
        {
          img: "hero2.jpg",
          title: "",
          description: "",
        },
        {
          img: "hero3.jpg",
          title: "",
          description: "",
        },
        {
          img: "hero4.jpg",
          title: "",
          description: "",
        },
        {
          img: "add1.jpg",
          title: "",
          description: "",
        },
        {
          img: "add2.jpg",
          title: "",
          description: "",
        },
        {
          img: "add3.jpg",
          title: "",
          description: "",
        },
        {
          img: "add4.jpg",
          title: "",
          description: "",
        },
        {
          img: "add5.jpg",
          title: "",
          description: "",
        },
        {
          img: "add6.jpg",
          title: "",
          description: "",
        },
        {
          img: "add7.jpg",
          title: "",
          description: "",
        },
        {
          img: "add8.jpg",
          title: "",
          description: "",
        },
        {
          img: "add8.jpg",
          title: "",
          description: "",
        },
        {
          img: "add9.jpg",
          title: "",
          description: "",
        },
        {
          img: "add10.jpg",
          title: "",
          description: "",
        },
        {
          img: "add11.jpg",
          title: "",
          description: "",
        },
        {
          img: "add12.jpg",
          title: "",
          description: "",
        },
        {
          img: "add13.jpg",
          title: "",
          description: "",
        },
        {
          img: "add14.jpg",
          title: "",
          description: "",
        },
        {
          img: "add15.jpg",
          title: "",
          description: "",
        },
        {
          img: "add16.jpg",
          title: "",
          description: "",
        },
        {
          img: "add17.jpg",
          title: "",
          description: "",
        },
        {
          img: "add19.jpg",
          title: "",
          description: "",
        },
        {
          img: "add20.jpg",
          title: "",
          description: "",
        },
        {
          img: "add21.jpg",
          title: "",
          description: "",
        },
        {
          img: "add22.jpg",
          title: "",
          description: "",
        },
        {
          img: "add23.jpg",
          title: "",
          description: "",
        },
        {
          img: "add24.jpg",
          title: "",
          description: "",
        },
        {
          img: "add25.jpg",
          title: "",
          description: "",
        },
        {
          img: "add26.jpg",
          title: "",
          description: "",
        },
        {
          img: "add27.jpg",
          title: "",
          description: "",
        },
        {
          img: "add28.jpg",
          title: "",
          description: "",
        },
        {
          img: "add29.jpg",
          title: "",
          description: "",
        },
        {
          img: "add30.jpg",
          title: "",
          description: "",
        },
        {
          img: "add31.jpg",
          title: "",
          description: "",
        },
        {
          img: "add32.jpg",
          title: "",
          description: "",
        },
        {
          img: "add33.jpg",
          title: "",
          description: "",
        },
        {
          img: "add34.jpg",
          title: "",
          description: "",
        },
        {
          img: "add35.jpg",
          title: "",
          description: "",
        },
        {
          img: "add36.jpg",
          title: "",
          description: "",
        },
        {
          img: "add37.jpg",
          title: "",
          description: "",
        },
        {
          img: "add38.jpg",
          title: "",
          description: "",
        },
        {
          img: "add39.jpg",
          title: "",
          description: "",
        },
        {
          img: "add40.jpg",
          title: "",
          description: "",
        },
        {
          img: "add41.jpg",
          title: "",
          description: "",
        },
        {
          img: "add42.jpg",
          title: "",
          description: "",
        },
        {
          img: "add43.jpg",
          title: "",
          description: "",
        },
        {
          img: "add44.jpg",
          title: "",
          description: "",
        },
        {
          img: "add45.jpg",
          title: "",
          description: "",
        },
        {
          img: "add46.jpg",
          title: "",
          description: "",
        },
        {
          img: "add47.jpg",
          title: "",
          description: "",
        },
        {
          img: "add48.jpg",
          title: "",
          description: "",
        },
        {
          img: "add49.jpg",
          title: "",
          description: "",
        },
        {
          img: "add50.jpg",
          title: "",
          description: "",
        },
        {
          img: "add51.jpg",
          title: "",
          description: "",
        },
        {
          img: "add52.jpg",
          title: "",
          description: "",
        },
        {
          img: "add53.jpg",
          title: "",
          description: "",
        },
        {
          img: "add54.jpg",
          title: "",
          description: "",
        },
        {
          img: "add55.jpg",
          title: "",
          description: "",
        },
        {
          img: "add56.jpg",
          title: "",
          description: "",
        },
        {
          img: "add57.jpg",
          title: "",
          description: "",
        },
        {
          img: "add58.jpg",
          title: "",
          description: "",
        },
        {
          img: "add59.jpg",
          title: "",
          description: "",
        },
        {
          img: "add60.jpg",
          title: "",
          description: "",
        },
        {
          img: "add61.jpg",
          title: "",
          description: "",
        },
        {
          img: "add62.jpg",
          title: "",
          description: "",
        },
        {
          img: "add63.jpg",
          title: "",
          description: "",
        },
        {
          img: "add64.jpg",
          title: "",
          description: "",
        },
        {
          img: "add51.jpg",
          title: "",
          description: "",
        },
        {
          img: "add65.jpg",
          title: "",
          description: "",
        },
        {
          img: "add66.jpg",
          title: "",
          description: "",
        },
        {
          img: "add67.jpg",
          title: "",
          description: "",
        },
        {
          img: "add68.jpg",
          title: "",
          description: "",
        },
        {
          img: "add69.jpg",
          title: "",
          description: "",
        },
        {
          img: "add70.jpg",
          title: "",
          description: "",
        },
        {
          img: "add71.jpg",
          title: "",
          description: "",
        },
        {
          img: "add72.jpg",
          title: "",
          description: "",
        },
        {
          img: "add73.jpg",
          title: "",
          description: "",
        },
        {
          img: "add74.jpg",
          title: "",
          description: "",
        },
        {
          img: "add75.jpg",
          title: "",
          description: "",
        },
        {
          img: "add76.jpg",
          title: "",
          description: "",
        },
        {
          img: "add77.jpg",
          title: "",
          description: "",
        },
        {
          img: "add78.jpg",
          title: "",
          description: "",
        },
        {
          img: "add79.jpg",
          title: "",
          description: "",
        },
        {
          img: "add80.jpg",
          title: "",
          description: "",
        },
        {
          img: "add81.jpg",
          title: "",
          description: "",
        },
        {
          img: "add82.jpg",
          title: "",
          description: "",
        },
        {
          img: "add83.jpg",
          title: "",
          description: "",
        },
        {
          img: "add84.jpg",
          title: "",
          description: "",
        },
      ],
    };
  },
  head: {
    title: "NIMELSSA Unilag Official website",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "NIMELSSA Unilag Official website",
      },
    ],
  },
  methods: {
    setArrayLength(newLength) {
      if (newLength >= 0) {
        this.myArray.length = newLength;
      } else {
        console.error("Invalid array length");
      }
    },
    handleFeedback() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$toastr.s("Thanks for your feedback!");
        this.form.matric = "";
        this.form.name = "";
        this.form.message = "";
      }, 2000);
    },
    updateTimer() {
      const now = new Date();
      this.timeRemaining = Math.max(0, Math.floor((this.endDate - now) / 1000));
    },
    shuffleImages() {
      for (let i = this.carousels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.carousels[i], this.carousels[j]] = [
          this.carousels[j],
          this.carousels[i],
        ];
      }
    },
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.name && this.form.matric && this.form.message);
    },
    weeks() {
      return Math.floor(this.timeRemaining / (7 * 24 * 60 * 60));
    },
    days() {
      return Math.floor(
        (this.timeRemaining % (7 * 24 * 60 * 60)) / (24 * 60 * 60)
      );
    },
    hours() {
      return Math.floor((this.timeRemaining % (24 * 60 * 60)) / 3600);
    },
    minutes() {
      return Math.floor((this.timeRemaining % 3600) / 60);
    },
    seconds() {
      return this.timeRemaining % 60;
    },
  },
  mounted() {
    this.shuffleImages();
    this.updateTimer();
    this.timerInterval = setInterval(this.updateTimer, 1000);
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.timerInterval);
  },
};
</script>

<style></style>

