---
layout: default
title: Blogs
---

# Blogs

Here you'll find a collection of my thoughts and articles on various cybersecurity topics.

<ul class="blog-list">
    {% for post in site.posts %}
        <li>
            <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
            {% if post.last_modified_at %}
                <p class="last-updated"><em>Last updated on {{ post.last_modified_at | date: "%B %d, %Y" }}</em></p>
            {% endif %}
        </li>
    {% endfor %}
</ul>
