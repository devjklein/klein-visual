---
title: Homepage
layout: default
current: index
custom_js: https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min
custom_js_2: https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min
local_js: js/clouds
---

<main class="content  white">
  <!-- Home background & introduction -->
  <section class="splash  overflow  green" aria-label="Homepage introduction" >
      <div class="row">
        <div class="splash__intro">
        
            <div class="splash__type">
              <h1 class="splash__type--header  light">Hello!</h1>
              <p class="splash__type--content">My name is David Klein, and I am a multidisciplinary designer who specializes in branding and web development. My goal is to provide my clients with exceptional designs that excite the creative senses and instill total brand confidence.</p>
              <p class="splash__type--content"><strong>We can create something exceptional together.</strong></p>
              <a class="btn button" href="mailto:hi@kleinvisual.com">Let's Talk</a>
            </div>
            
            <div class="splash__avatar">
              {% include image.html url="img/portraits/me" alt="Portrait of David Klein" %}
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
      {% for project in site.design %}
        {% if project.featured == 1 %}
          <div class="col-4">
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              {% capture image %}{{ project.image | split: '_' | first}}{% endcapture %}
              {% capture alt %}{{ project.alt }}{% endcapture %}
              {% include image.html url=image alt=alt%}
              <div class="hover-panel__overlay  green"><h3 class="light">{{ project.title }}</h3></div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
      {% for project in site.computer-graphics %}
        {% if project.featured == 1 %}
          <div class="col-4">
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              {% capture image %}{{ project.image | split: '_' | first}}{% endcapture %}
              {% capture alt %}{{ project.alt }}{% endcapture %}
              {% include image.html url=image alt=alt%}
              <div class="hover-panel__overlay  green"><h3 class="light">{{ project.title }}</h3></div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
      
      
      {% for project in site.design %}
        {% if project.featured == 2 %}
          <div class="col-4" >
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              {% capture image %}{{ project.image | split: '_' | first}}{% endcapture %}
              {% capture alt %}{{ project.alt }}{% endcapture %}
              {% include image.html url=image alt=alt%}
              <div class="hover-panel__overlay  green"><h3 class="light">{{ project.title }}</h3></div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
      {% for project in site.computer-graphics %}
        {% if project.featured == 2 %}
          <div class="col-4" >
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              {% capture image %}{{ project.image | split: '_' | first}}{% endcapture %}
              {% capture alt %}{{ project.alt }}{% endcapture %}
              {% include image.html url=image alt=alt%}
              <div class="hover-panel__overlay  green"><h3 class="light">{{ project.title }}</h3></div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
      
      
      {% for project in site.design %}
        {% if project.featured == 3 %}
          <div class="col-4" >
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              {% capture image %}{{ project.image | split: '_' | first}}{% endcapture %}
              {% capture alt %}{{ project.alt }}{% endcapture %}
              {% include image.html url=image alt=alt%}
              <div class="hover-panel__overlay  green"><h3 class="light">{{ project.title }}</h3></div>
            </a>
          </div>
        {% endif %}
      {% endfor %}
      {% for project in site.computer-graphics %}
        {% if project.featured == 3 %}
          <div class="col-4" >
            <a href="{{ site.baseurl }}{{ project.url }}" class="hover-panel">
              {% capture image %}{{ project.image | split: '_' | first}}{% endcapture %}
              {% capture alt %}{{ project.alt }}{% endcapture %}
              {% include image.html url=image alt=alt%}
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
      <div class="col-l-3 col-6">
        <a href="{{ "/portfolio/design/" | relative_url }}" class="hover-panel  white">
          {% include image.html url="/img/llamas/llama-branding" alt="Llama in front of an easel with a color wheel painted on" type="png" %}
          <h3>Branding</h3>
        </a>
        
      </div>
      <div class="col-l-3 col-6">
        <a href="{{ "/portfolio/design/" | relative_url }}" class="hover-panel  white">
          {% include image.html url="/img/llamas/llama-web" alt="Llama in front of an computer screen with a generic website shown" type="png" %}
          <h3>Web Design</h3>
        </a>
      </div>
      <div class="col-l-3 col-6">
        <a href="{{ "/portfolio/photography/" | relative_url }}" class="hover-panel  white">
          {% include image.html url="/img/llamas/llama-photo" alt="Llama with a camera on a tripod" type="png" %}
          <h3>Photography</h3>
        </a>
      </div>
      <div class="col-l-3 col-6">
        <a href="{{ "/portfolio/design/" | relative_url }}" class="hover-panel  white">
          {% include image.html url="/img/llamas/llama-fancy" alt="Llama with an old film camera on a tripod" type="png" %}
          <h3>Video + Motion Graphics</h3>
        </a>
      </div>
  </section>
  
  
  
  
  
</main>