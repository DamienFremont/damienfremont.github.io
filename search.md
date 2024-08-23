---
layout: default
title: Search Results
permalink: /search/
---

<!-- REF: https://www.stephanmiller.com/static-site-search/ -->

<div class="pt-3">
  <p> </p>
  <h2>Search</h2>
  <p>Search for an article among all publications.</p>
  <!-- Search form -->
  {% include search-box.html %}
  <!-- List where search results will be rendered -->
  <ul id="search-results"></ul>
</div>

<script>
  // Template to generate the JSON to search
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<!-- Import lunr.js from unpkg.com -->
<script src="/assets/js/lunr-2.3.9.js"></script>
<!-- Custom search script which we will create below -->
<script src="/assets/js/search.js"></script>
