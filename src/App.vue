<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a href="#" class="text-xl font-bold text-gray-900 dark:text-white">RV.dev</a>
          <div class="flex items-center gap-6">
            <nav class="hidden md:flex space-x-8">
              <a v-for="item in navigation" 
                 :key="item.name" 
                 :href="item.href"
                 class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                {{ item.name }}
              </a>
            </nav>
            <button @click="toggleDarkMode" 
                    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section with Parallax Background -->
    <section id="hero" class="relative pt-32 pb-20 overflow-hidden">
      <div class="parallax-bg absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-900/30 dark:to-purple-900/30"></div>
      <div class=" max-w-6xl mx-auto text-center px-8 relative z-10">
        <img src="./1x1Suit.png?height=150&width=150" 
             alt="Profile picture" 
             class="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white dark:border-gray-800 shadow-lg transform hover:scale-105 transition-transform duration-300" />
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          Ralph Visco
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
          Computer Science Graduate
        </p>
        <div class="flex justify-center gap-4 animate-fade-in-up">
          <a href="#contact" 
             class="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105">
            Contact Me
          </a>
          <a href="#projects" 
             class="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105 text-gray-900 dark:text-white">
            View Projects
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white dark:bg-gray-800">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div class="prose dark:prose-invert max-w-none text-justify">
          <p class="text-gray-600 dark:text-gray-300">
            <!-- I'm a passionate frontend developer with 5+ years of experience building modern web applications. 
            I specialize in Vue.js, React, and TypeScript, with a strong focus on creating performant and 
            accessible user interfaces. When I'm not coding, you can find me contributing to open source 
            projects or writing technical articles on my blog. -->
            I am a graduate in the program of Computer Science at AMA Computer College East-Rizal. I specialize in
            web-development, data analysis, and data science. I am passionate about working with data and transforming
            data into meaningful insights through visualizations. I am also interested in machine learning and artificial
            intelligence in data analysis.
          </p>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12">Experience</h2>
        <div class="space-y-12">
          <div v-for="(job, index) in experience" 
               :key="index"
               class="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700"></div>
            <div class="mb-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ job.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ job.company }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-500">{{ job.period }}</p>
            </div>
            <p class="text-gray-600 dark:text-gray-300">{{ job.description }}</p>
            <p class="text-gray-600 dark:text-gray-300">{{ job.description2 }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-white dark:bg-gray-800">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="skill in skills" 
               :key="skill.name"
               class="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div class="text-center">
              <component :is="skill.icon" class="h-8 w-8 mx-auto mb-2 text-gray-700 dark:text-gray-300" />
              <h3 class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</h3>
            </div>
            <div class="p-4">
              <p class="font-small text-gray-900 dark:text-white">{{ skill.description }}</p>
              <p class="font-small text-gray-900 dark:text-white">{{ skill.description2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12">Projects</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="project in projects" 
               :key="project.name"
               class="group relative overflow-hidden rounded-lg">
            <img :src="project.image" 
                 :alt="project.name"
                 class="w-full aspect-video object-cover" />
            <div class="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div class="text-center p-4">
                <h3 class="text-xl font-bold text-white mb-2">{{ project.name }}</h3>
                <p class="text-gray-300 mb-4">{{ project.description }}</p>
                <a :href="project.link" 
                   target="_blank"
                   class="inline-flex items-center text-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors">
                  View Project
                  <ExternalLinkIcon class="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white dark:bg-gray-800">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12">Get in Touch</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to new opportunities and interesting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            <div class="space-y-4">
              <a href="mailto:ralphvisco38@gmail.com" 
                 class="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <MailIcon class="h-5 w-5 mr-2" />
                ralphvisco38@gmail.com
              </a>
              <a href="https://github.com/reVisco" 
                 target="_blank"
                 class="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <GithubIcon class="h-5 w-5 mr-2" />
                @reVisco
              </a>
            </div>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" 
                     id="name" 
                     v-model="contactForm.name"
                     class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" 
                     id="email" 
                     v-model="contactForm.email"
                     class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" 
                        v-model="contactForm.message"
                        rows="4"
                        class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"></textarea>
            </div>
            <button type="submit" 
                    class="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

import { 
  SunIcon, 
  MoonIcon, 
  MailIcon, 
  ExternalLinkIcon,
  CodeIcon,
  LayersIcon,
  PaintbrushIcon,
  DatabaseIcon,
  GithubIcon,
} from 'lucide-vue-next'

const isDark = ref(false);
const contactForm = ref({
  name: '',
  email: '',
  message: ''
});

import emailjs from '@emailjs/browser';

const handleSubmit = async () => {
  try {
    // Check email rate limit
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    // Get stored email data
    const storedData = JSON.parse(localStorage.getItem('emailData') || '{ "count": 0, "month": null, "year": null }');
    
    // Reset counter if it's a new month
    if (storedData.month !== currentMonth || storedData.year !== currentYear) {
      storedData.count = 0;
      storedData.month = currentMonth;
      storedData.year = currentYear;
    }
    
    // Check if limit exceeded
    if (storedData.count >= 200) {
      alert('Monthly email limit reached. Please try again next month.');
      return;
    }

    const templateParams = {
      from_name: contactForm.value.name,
      from_email: contactForm.value.email,
      message: contactForm.value.message,
      to_name: 'Ralph Visco',
    };

    await emailjs.send(
      'service_yu4d3u9',
      'template_6ad8xyb',
      templateParams,
      'U22WXzTOtQftQ9FhI'
    );

    // Increment counter and save
    storedData.count++;
    localStorage.setItem('emailData', JSON.stringify(storedData));

    alert('Message sent successfully!');
    contactForm.value = { name: '', email: '', message: '' };
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Failed to send message. Please try again.');
  }
};
const navigation = ref([
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]);

const experience = [
  {
    title: 'Software Engineer (OJT)',
    company: 'Astoria Plaza Pasig',
    period: 'March 2024 - April 2024',
    description: 'Designed and developed a web-based Inventory Management System with QR code capabilities for the ICT Assets Management Department increasing productivity by 35%.',
    description2: 'Tech stack: HTML, CSS (Bootstrap 5), JavaScript, PHP, MySQL.' 
  },
  {
    title: 'Freelance Tutor',
    company: 'Independent',
    period: '2022 - 2024',
    description: 'Taught subjects online, including web development (JavaScript), and Mathematics to junior and senior high students.'
  },
  {
    title: 'Online English as second Language (ESL) Teacher',
    company: 'Acadsoc',
    period: '2020 - 2022',
    description: 'Taught English as a second language to Chinese students of all ages and levels.'
  },
]

const skills = [
  { name: 'Frontend Dev', description: 'HTML', description2: 'CSS', CodeIcon, level: 95 },
  { name: 'UI/UX Design', icon: PaintbrushIcon, level: 85 },
  { name: 'Backend Dev', icon: DatabaseIcon, level: 75 }, 
  { name: 'Architecture', icon: LayersIcon, level: 80 }
]

const projects = [
  {
    name: 'Inventory Management System',
    description: 'A full-featured online shopping platform built with Vue.js and Node.js',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    name: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  }
]

// Initialize dark mode from localStorage and system preference
onMounted(() => {
  // Dark mode initialization
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    isDark.value = savedMode === 'true';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  updateTheme();

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden-section');
    observer.observe(section);
  });

  // Parallax effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxBg = document.querySelector('.parallax-bg');
    const parallaxContent = document.querySelector('.parallax-content');
    
    if (parallaxBg && parallaxContent) {
      parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      parallaxContent.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
  });
});

// Watch for dark mode changes
watch(isDark, () => {
  updateTheme();
  localStorage.setItem('darkMode', isDark.value);
});

// Toggle dark mode
function toggleDarkMode() {
  isDark.value = !isDark.value;
}

// Update theme
function updateTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

html {
  scroll-behavior: smooth;
}

/* Scroll reveal animations */
.hidden-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

/* Project card hover effects */
.group:hover img {
  transform: scale(1.05);
  transition: transform 0.6s ease-out;
}

/* Skill item hover effects */
.skills-grid > div {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skills-grid > div:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Parallax styles */
.parallax-bg {
  transform: translateZ(0);
  will-change: transform;
}

.parallax-content {
  transform: translateZ(0);
  will-change: transform;
}

/* Add custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.8);
}
</style>
