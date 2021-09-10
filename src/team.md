---
title: Η Ομάδα
---

Οι πολύχρωμοι φίλοι και συνεργάτες του Φάλτσο(υ). Καλούμαστε και *Φαλτσαδόροι*.

<div class="people-list flex flex-wrap ">
{% assign people = site.people | sort: "name" %}
{% for p in people  %}
<div class="w-1/2 p-2 flex items-stretch">
<div class="p-3 {% cycle 'bg-red-600', 'bg-green-600' , 'bg-blue-600', 'bg-pink-600', 'bg-indigo-600' ,'bg-yellow-600', 'bg-purple-600' %} border-2 border-purple-100 ">
	<a href="{{ p.url }}"><img src="{{ p.image }}" alt="{{ p.title }}" /></a>
	<h3 class="m-0 mt-1 "><a class="truncate text-white visited:text-white" href="{{ p.url }}">{{ p.title }}</a></h3>
</div>
</div>
{% endfor %}
</div>
