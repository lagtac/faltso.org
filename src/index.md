---
layout: default
title: Καλως ήλθατε στο Φάλτσο
---

<section class="prologue flex flex-wrap flex-col md:flex-row justify-between items-stretch space-y-10 md:space-y-0  md:space-x-10  mb-10">

<div class="flex-1 border-0 flex items-stretch ">

<div class="flex flex-col">
<p>Η ομάδα Φάλτσο σχεδιάζει και υλοποιεί εκπαιδευτικά προγράμματα και παραστάσεις μουσικής, θεάτρου και τεχνολογίας για παιδιά. </p>

{% include quote_papert.html %}

</div>
</div>

<div class="flex-1 p-5 bg-purple-50 border-4 border-purple-400 border-double shadow-lg">
	<h3 class="text-purple-600 text-sm mt-0">Πρόγραμμα 2021-2022</h3>
	<div style="">
		<a href="{% post_url 2021-08-05-rock-hotel %}"><img src="/projects/rock-hotel/hauntedhotel-384.png" /></a>
		<div style="" class="py-3">
			<h4 class="inline-block mt-0 bg-white ring-0 ring-gray-200 p-1"><a href="{% post_url 2021-08-05-rock-hotel %}">Ροκ Ξενοδοχείο</a></h4>
			<span class="block bg-white  ring-0 ring-gray-200  p-1">Μια μουσική παράσταση φτιαγμένη από παιδιά, για μικρούς και μεγάλους.</span>
		</div>
	</div>
</div>
</section>


Το Φάλτσο δημιουργήθηκε από την [Δάφνη Καμμένου] και τον [Δημήτρη Χρυσομάλλη] με στόχο να συμπεριλάβει [φίλους και συνεργάτες] που μοιράζονται την ίδια αγάπη για την καλλιτεχνική εκπαίδευση και τις παραστατικές τέχνες.    

[Δάφνη Καμμένου]: {% link _people/daphne-kammenou.md %}
[Δημήτρη Χρυσομάλλη]: {% link _people/dimitris-chrysomallis.md %}
[φίλους και συνεργάτες]: {% link about.md %}#team

{% include fancy_cta.html url="projects/" text="Ενημερωθείτε για τις δράσεις μας" label="ΔΡΑΣΕΙΣ" emoji=127928 bg="bg-yellow-600" %}

Από το 2018 έχουμε οργανώσει χορωδίες και μουσικά σχήματα σε Δημοτικά σχολεία, καθώς και κύκλους μαθημάτων μουσικής με υπολογιστές σε παιδιά 8 ως 10 ετών.

{% include fancy_cta.html url="team.html" text="Γνωρίστε την ομάδα" label="ΟΜΑΔΑ" emoji=127804 bg="bg-blue-600" %}

{% comment %}{% include fancy_cta.html url="gallery" text="Δείτε εικόνες" label="ΕΙΚΟΝΕΣ" emoji=127917 bg="bg-green-600" %}
{% endcomment %}

Μας αρέσει να πηγαίνουμε όπου μας καλούνε και να οργανώνουμε ομάδες μουσικής και αυτοσχεδιασμού. Χρησιμοποιούμε ό,τι όργανα έχουμε στη διάθεσή μας, κιθάρες ηλεκτρικές, κρουστά, φωνές, πνευστά, μπάσσο, τύμπανα και ενισχυτές. 

{% include fancy_cta.html url="about.html" text="Μάθετε περισσότερα για την προσέγγισή μας" label="ΦΑΛΤΣΟ;" emoji=128007 bg="bg-yellow-400" %}

Στο [μπλοργκ μας]({% link blog.html %}) Θα βρείτε εκπαιδευτικό υλικό, οδηγούς, λογισμούς και παραλογισμούς.


{% include fancy_cta.html url="blog.html" text="Διαβάστε το μπλοργκ" label="ΜΠΛΟ(ρ)ΓΚ" emoji=127752 bg="bg-purple-600" %}

<hr/>

<section class="recent-posts">

{% assign recent = site.posts %}
{% for p in recent limit: 5  %}

<h3><a href="{{ p.url }}">{{ p.title }}</a></h3>
{% if p.description %}
{{ p.description }}
{% else %}
{{ p.excerpt }}
{% endif %}
<!--{{ p.tags | array_to_sentence_string }}-->
{% endfor %}

</section>

![kuku](/assets/img/kuku.gif)
