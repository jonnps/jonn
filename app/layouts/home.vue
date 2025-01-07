<template>
  <div class="flex flex-col text-center md:text-left gap-8 py-4">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col items-center md:items-start md:flex-row gap-8">
        <ProfileAvatar />

        <div class="flex flex-col gap-4">
          <h1 class="text-4xl">Jonnatha <span class="font-bold">Santos</span></h1>
          <p class="text-xl">WordPress Full Stack Developer</p>
          <p>
            I blend web performance and creative development to craft digital experiences that stand out. My passion
            lies in building efficient, scalable solutions where code quality meets thoughtful design.
          </p>
          <p>
            As a Full Stack Developer, I thrive on transforming complex challenges into clean, performant applications.
            My approach combines technical expertise with a keen eye for optimization and user experience.
          </p>
          <p>
            When not immersed in programming, I'm trying to learn music or understand how things work. After all,
            technology is just a tool to enhance our real-world experiences and bring our ideas to life. It's the impact
            on people's lives that truly matters.
          </p>
        </div>
      </div>
    </div>

    <TechStack />

    <Contact />
  </div>

  <ContentDoc />
</template>
