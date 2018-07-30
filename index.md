---
title: Homepage
layout: default
current: index
---

<main class="content  white">
  <!-- Home background & introduction -->
  <section class="splash  overflow  green" aria-label="Homepage introduction" >
      <div class="row">
        <div class="splash__intro">
        
            <div class="splash__type">
              <h1 class="splash__type--header  light">Hello!</h1>
              <p class="splash__type--content">My name is David Klein, and I am a multidisciplinary digital designer who specializes in branding and web development. My goal is to provide my clients with exceptional designs that excite the creative senses and instill total brand confidence.</p>
              <p class="splash__type--content"><strong>We can create something exceptional together.</strong></p>
              <a class="btn button" href="mailto:hi@kleinvisual.com">Let's Talk</a>
            </div>
            
            <div class="splash__avatar">
              <img src="{{ "/img/portraits/me-light.jpg" | relative_url }}" alt="avatar">
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
  
  
  
  
  
  <section class="row  white  full" aria-label="Design Samples">
    
      <h2>Featured Projects</h2>
      
      {% for project in site.portfolio %}
        {% if project.featured == 1 %}
          <div class="col-4 col-s-nopadding" >
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              <img class="hover-panel__img" src="{{ project.image | relative_url }}" alt="{{ project.alt }}">
              <div class="hover-panel__overlay  green"><h3 class="light">{{ project.title }}</h3></div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
      
      {% for project in site.portfolio %}
        {% if project.featured == 2 %}
          <div class="col-4 col-s-nopadding" >
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              <img class="hover-panel__img" src="{{ project.image | relative_url }}" alt="{{ project.alt }}">
              <div class="hover-panel__overlay  green"><h3 class="light">{{ project.title }}</h3></div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
      
      {% for project in site.portfolio %}
        {% if project.featured == 3 %}
          <div class="col-4 col-s-nopadding" >
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              <img class="hover-panel__img" src="{{ project.image | relative_url }}" alt="{{ project.alt }}">
              <div class="hover-panel__overlay  green"><h3 class="light">{{ project.title }}</h3></div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
      
      <div class="col-12">
        <a class="btn  btn--center  btn--large" href="{{ "/portfolio" | relative_url }}">See More</a>
      </div>
      
  </section>
  
  
  
  
    <section class="row  white  full" aria-label="Capabilities">
    <h2>My Capabilities</h2>
      <div class="col-l-3 col-6 col-s-nopadding">
        <a href="{{ "/portfolio/design/" | relative_url }}" class="hover-panel">
          <img class="hover-panel__img" src="{{ "/img/llamas/llama-branding.png" | relative_url }}" alt="A view">
          <h3>Branding</h3>
        </a>
        
      </div>
      <div class="col-l-3 col-6 col-s-nopadding">
        <a href="{{ "/portfolio/design/" | relative_url }}" class="hover-panel">
          <img class="hover-panel__img" src="{{ "/img/llamas/llama-web.png" | relative_url }}" alt="A view">
          <h3>Web Design</h3>
        </a>
      </div>
      <div class="col-l-3 col-6 col-s-nopadding">
        <a href="{{ "/portfolio/design/" | relative_url }}" class="hover-panel">
          <img class="hover-panel__img" src="{{ "/img/llamas/llama-photo.png" | relative_url }}" alt="A view">
          <h3>Photography</h3>
        </a>
      </div>
      <div class="col-l-3 col-6 col-s-nopadding">
        <a href="{{ "/portfolio/design/" | relative_url }}" class="hover-panel">
          <img class="hover-panel__img" src="{{ "/img/llamas/llama-fancy.png" | relative_url }}" alt="A view">
          <h3>Video + Motion Graphics</h3>
        </a>
      </div>
  </section>
  
  
  
  
  
</main>