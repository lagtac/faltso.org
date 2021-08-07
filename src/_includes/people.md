{% assign people = site.collections | where "label", "people"  %}

{{ people | inspect }}
