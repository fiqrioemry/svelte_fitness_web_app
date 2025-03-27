<script lang="ts">
    import Hero from '../components/Hero.svelte';
    import Footer from '../components/Footer.svelte';
    import Features from '../components/Features.svelte';
    import Testimonials from '../components/Testimonials.svelte';
    import Pricing from '../components/Pricing.svelte';
    import FAQ from '../components/FAQ.svelte';
    import CTASection from '../components/CTASection.svelte';
    import ScrollAnimation from '../components/ScrollAnimation.svelte';

  import AOS from 'aos';
  import 'aos/dist/aos.css';

  import { onMount } from 'svelte';

  onMount(() => {
    AOS.init({
      once: true, 
      duration: 800, 
    });
  });

  </script>
  
  <Hero />
  <Features />
  <Testimonials />
  <Pricing />
  <FAQ />
  <CTASection />
  <Footer/>
