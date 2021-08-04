---
layout: default
title: Καλως ήλθατε στο Φάλτσο
---

{% include quote_papert.html %}

Η ομάδα Φάλτσο σχεδιάζει και υλοποιεί εκπαιδευτικά προγράμματα και παραστάσεις μουσικής, θεάτρου και τεχνολογίας για παιδιά. 

{% comment %}{% include projects.html %}{% endcomment %}


{% include fancy_cta.html url="projects/" text="Ενημερωθείτε για τις δράσεις μας" label="LES ACTIONS" emoji=127928 bg="bg-yellow-600" %}

Το Φάλτσο δημιουργήθηκε από την [Δάφνη Καμμένου] και τον [Δημήτρη Χρυσομάλλη] με στόχο να συμπεριλάβει [φίλους και συνεργάτες] που μοιράζονται την ίδια αγάπη για την καλλιτεχνική εκπαίδευση και τις παραστατικές τέχνες.    

[Δάφνη Καμμένου]: {% link about.md %}#daphne
[Δημήτρη Χρυσομάλλη]: {% link about.md %}#dimitris
[φίλους και συνεργάτες]: {% link about.md %}

{% include fancy_cta.html url="about" text="Γνωρίστε την ομάδα" label="LE TEAM" emoji=127804 bg="bg-blue-600" %}

Από το 2018 έχουμε οργανώσει χορωδίες και μουσικά σχήματα σε Δημοτικά σχολεία, καθώς και κύκλους μαθημάτων μουσικής με υπολογιστές σε παιδιά 8 ως 10 ετών.

{% include fancy_cta.html url="about" text="Δείτε εικόνες" label="LES PHOTOS" emoji=127917 bg="bg-green-600" %}

Μας αρέσει να πηγαίνουμε όπου μας καλούνε και να οργανώνουμε ομάδες μουσικής και αυτοσχεδιασμού. Χρησιμοποιούμε ό,τι όργανα έχουμε στη διάθεσή μας, κιθάρες ηλεκτρικές, κρουστά, φωνές, πνευστά, μπάσσο, τύμπανα και ενισχυτές. 

{% include fancy_cta.html url="about" text="Μάθετε περισσότερα για την προσέγγισή μας" label="LA PHILOSOPHIE" emoji=128007 bg="bg-yellow-400" %}

Στο [μπλοργκ μας]({% link blog.html %}) Θα βρείτε εκπαιδευτικό υλικό, οδηγούς, λογισμούς και παραλογισμούς.


{% include fancy_cta.html url="blog" text="Διαβάστε το μπλοργκ" label="LE BLORG" emoji=127752 bg="bg-purple-600" %}

<hr/>

<div markdown="1" class="pt-5 pb-5 px-5  mb-5 bg-green-200">

{% assign latest = site.posts.first %}
## [{{ latest.title }}]({{ latest.url }}) 
{{ latest.excerpt }}

</div>


![kuku](/assets/img/kuku.gif)
