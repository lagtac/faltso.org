---
title: Από το χαρτί στην οθόνη - Μέρος Β'
tags: web, coding, html
categories: tutorials
image: "/assets/img/web/HTML-Icon-Final.png"
---


Αυτό είναι το δεύτερο μέρος μιας εισαγωγής στην κατασκευή ιστοσελίδων για απλούς θνητούς, όπως εγώ.

<!--more-->

Το προηγούμενο ποστάκι μπορείτε να το διαβάσετε εδώ: [Από το χαρτί στην οθόνη]({% link _posts/2020-10-20-intro-to-webpages.md %}).

## Εικόνες

Ας δούμε τώρα πως μπορούμε να βάλουμε εικόνες σε μια σελίδα. Το tag που χρησιμοποιούμε για να φορτώσουμε μια εικόνα είναι το <code class="ihighlight">img</code>. Πως το χρησιμοποιούμε;

``` html
<img src="https://mysite/myimage.jpg">
``` 

Στο παράδειγμα αυτό δηλώνουμε ένα <code class="ihighlight">img</code> tag και την εικόνα που θέλουμε. Όλα τα tags έχουν όνομα και παραμέτρους. Το *img* είναι το όνομα, το *src* είναι μια παράμετρος που παίρνει μια τιμή. Η τιμή του *src* είναι η διεύθυνση ενός αρχείου εικόνας, στο παραπάνω παράδειγμα το "https://mysite/myimage.jpg".

Η εικόνα που φορτώνουμε με το img μπορεί να είναι μια οποιαδήποτε διεύθυνση εικόνας στο internet, δεν απαιτείται να βρίσκεται στον ίδιο υπολογιστή με τις σελίδες μας. Αυτό είναι ένα από το συναρπαστικά χαρακτηριστικά του web: ότι μπορείς να βρεις ο,τιδήποτε αν γνωρίζεις της διεύθυνσή του, και να το χρησιμοποιήσεις όπως θέλεις, μέσα στα όρια του σεβασμού των άλλων, για να φτιάξεις και να μοιραστείς ιστορίες, εικόνες, μουσική, βίντεο και συνδυασμούς αυτών.

Για παράδειγμα, για τις εικόνες μας θα χρησιμοποιήσουμε ένα site που κάνει ακριβώς αυτό: σου δίνει εικόνες που τις χρησιμοποιείς όταν σχεδιάζεις το site σου για ευκολία. Πηγαίνετε στη διεύθυνση https://placeholder.com/ και δείτε μόνοι σας πως δουλεύει.

``` html
<img src="https://via.placeholder.com/200">
``` 

<img src="https://via.placeholder.com/200/f00?text=(o . o)">


## Διευθύνσεις

Οι ιστοσελίδες που βλέπουμε στο internet είναι αποθηκευμένες σε υπολογιστές που είναι μονίμως συνδεδεμένοι στο δίκτυο. 
Οι υπολογιστές αυτοί τρέχουν ένα πρόγραμμα που είναι γνωστό ως *server*. Ο server λειτουργεί στο παρασκήνιο 
και η δουλειά του είναι να δέχεται αιτήματα από τους χρήστες του δικτύου και να τους στέλνει τις κατάλληλες απαντήσεις.  
Μπορούμε να το παρομοιάσουμε με έναν ευγενικό νεαρό που εργάζεται στα Goodies και παίρνει τις παραγγελίες των πελατών. 

	-Γεια σας
	-Γεια σας κύριε, τι θα θέλατε;
	-Εεε, θα ήθελα ένα cheese και μια πατάτες.
	-Βεβαίως! ΕΝΑ ΤΣΙΖ ΜΙΑ ΠΑΤΑΤΕΣ ΚΑΙ ΓΡΗΓΟΡΑ!!!
	-...
	-Είναι 5 ευρώ και 70 λεπτά.
	-Ορίστε
	-Ευχαριστούμε πολύ. Καθήστε και θα σας φωνάξουμε.

	...3 δευτερόλεπτα αργότερα

	-Η παραγγελία σας είναι έτοιμη!
	-Ευχαριστώ!

<img src="/assets/img/web/burger-4955630_640.png" title="Image by https://pixabay.com/users/brightlynx-11842624">


Κάπως έτσι δουλεύει το internet: 

	Πελάτης: Θέλω τσιζ
	Server: πάρε τσιζ

Αν καθόμασταν στη μέση του δρόμου και φωνάζαμε: "Θέλω τσιζ!", δεν θα πέρναμε την επιθυμητή απάντηση. Όταν θέλουμε
να δούμε την εικόνα μιας γάτας στο ίντερνετ... 

**"Δημήτρη, αρκετά με τις γάτες! κάτι άλλο έχεις να μας πεις;"**

Φυσικά! Ας πούμε ότι θέλουμε να δούμε εικόνες από φανταστικά διαστημόπλοια. Αν γκουγκλαρουμε την λέξη *spaceships* θα δυσκολευτούμε
να βρούμε κάτι αξιόλογο. Καμιά φορά η αναζήτηση στο google είναι σαν να βρίσκεσαι στην μέση του δρόμου και να φωνάζεις "Διαστημόπλοια!".
Μπορεί να σε πλησιάσει κάποιος και να σου προσφέρει ένα καλαμπόκι. 
Γι αυτό θα πάμε κατευθείαν στο καταπληκτικό [deviantart.com](https://deviantart.com) και θα ερευνήσουμε εκεί το θέμα. 

Ροή:

- Γράφουμε τη διεύθυνση (URL) [https://deviantart.com](https://deviantart.com) στη γραμμή διευθύνσεων του browser μας.
- Ο browser συνδέεται με μια μηχανή που λέγεται DNS server.
- Ο DNS server ελέγχει ότι το όνομα deviantart.com υπάρχει και ότι αντιστοιχεί σε μια διέυθυνση IP που έχει τη μορφή ΧΧΧ.ΧΧΧ.ΧΧΧ.ΧΧΧ.
- Ο DNS server επιστρέφει στον browser την διέυθυνση IP.
- Ο browser συνδέεται με τον server που βρίσκεται στη διεύθυνση IP.
- Ο server διαβάζει το URL και απαντάει στον browser στέλνοντάς ένα σορό δεδομένα: HTML.

η παραπάνω διαδικασία επαναλαμβάνεται ξανά και ξανά και ξανά, μέχρι να βρούμε αυτό που θέλουμε, διαστημόπλοια ή γάτες.
Από το deviantart μπορούμε να ψάξουμε και να βρούμε το διαστημόπλοιό μας. 


# Εικόνες και ιστορίες

Πίσω στο θέμα μας που είναι η HTML. Ως τώρα έχουμε μάθει τα παρακάτω tags:

- BR 
	νέα γραμμή
- P 
	παράγραφος
- H{1-6}
	επικεφαλίδες
- UL>LI 
	λίστα
- IMG 
	εικόνα 

Με αυτά τα tags μπορούμε να φτιάξουμε ιστορίες με τίτλους, παραγράφους, εικόνες και λίστες. Μια χαρά, ε;

``` html
<h1>Η φοβέρα του Γιούρι</h1>

<p>...</p>

<img src="https://via.placeholdit.com/300x125.png?text=Το+σπίτι+του+Γιούρι">
```

{% include feedback.html source=page.title %}











