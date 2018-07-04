---
title: Homepage
layout: default
current: index
---

<main>
  <!-- Home background & introduction -->
  <section class="row  splash  overflow  green" aria-label="Homepage introduction" >
      <div class="row">
        <div class="splash__intro">
        
            <div class="splash__type">
              <h1 class="splash__type--header  light">Hello!</h1>
              <p class="splash__type--content">My name is David Klein, and I am a multidisciplinary digital designer who specializes in branding and web development. My goal is to provide my clients with exceptional designs that excite the creative senses and instill total brand confidence.</p>
              <p class="splash__type--content"><strong>We can create something exceptional together.</strong></p>
              <a class="btn button" href="mailto:hi@kleinvisual.com">Let's Talk</a>
            </div>
            
            <div class="splash__avatar">
              <img src="{{ "/img/dk.jpg" | relative_url }}" alt="avatar">
            </div>
        </div>
        
        
        <!-- Parallax Background -->
        <div class="mtn-scene" id="js-mtn-scene" data-hover-only="false" relative-input="true" data-scalar-x="10" data-scalar-y="25">
        
          <div data-depth="0.05" class="mtn-scene__layer" id="js-mtn-clouds-sm"></div>
          
          <div data-depth="0.1" class="mtn-scene__layer mtn-center">
            <img src="{{ "/img/mtn-scene/mountains.svg" | relative_url }}" alt="An ilustrated mountain, tinted green, rises in the distance as clouds float by.">
          </div>
          
          <div data-depth="0.15" class="mtn-scene__layer" id="js-mtn-clouds-md"></div>
          
          <div data-depth="0.2" class="mtn-scene__layer" id="js-mtn-clouds-lg"></div>
          
        </div>
        
        <div class="mtn-scene--fallback">
        </div>
      </div>
  </section>
  
  
  
  
  
  <section class="row content" aria-label="Design Samples">
    
      <h2>Explore exceptional.</h2>
      
      <div class="col-6 col-s-nopadding" >
        <a href="/showcase/roaming-wild" class="hover-panel">
          <div class="hover-panel__unit">
            <img class="hover-panel__img" src="{{ "/img/proj/roaming-wild-hero-m.jpg" | relative_url }}" alt="A view of Mount Godwin-Austen, the second highest mountain in the world, with the Roaming Wild logo mark overlayed in white. Mountain photo source credit: Flickr user Maria Ly">
          </div>
          <span class="green">View Project</span>
        </a>
      </div>
      
      <div class="col-6  col-s-nopadding" >
        <a href="/showcase/ttw" class="hover-panel">
        <div class="hover-panel__unit">
          <img class="hover-panel__img" src="{{ "/img/proj/teaching-the-word-hero-m.jpg" | relative_url }}" alt="The blue and orange Teaching the Word shield and sword logo on a tan, backlit background.">
        </div>
        <span class="green">View Project</span>
        </a>
      </div>
      
      <div class="col-6  col-s-nopadding">
        <a href="/showcase/ccc" class="hover-panel">
          <div class="hover-panel__unit">
            <img class="hover-panel__img" src="{{ "/img/proj/ccc-registration-hero-m.jpg" | relative_url }}" alt="A poster which reads STOP, REGISTER, and PAY LATER next to a illustrated traffic light. Below this, colorful yellow, green, and red text states student registration resources at Carroll Community College.">
          </div>
          <span class="green">View Project</span>
        </a>
      </div>
      
      <div class="col-12">
        <h3>Want to see more?</h3>
        <a class="btn  btn--center  btn--large" href="#">View My Work.</a>
      </div>
      
  </section>
</main>