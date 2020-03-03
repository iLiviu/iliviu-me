---
templateKey: blog-post
title: Velocity Banking - sau cum să complici degeaba rambursarea anticipată
date: 2020-03-03T13:19:47.228Z
description: >-
  Văd tot mai des promovată, în ultima vreme, o metodă de rambursare anticipată
  în spațiul virtual românesc: Velocity Banking. Idea de bază e să plătești
  anticipat creditul ipotecar folosind un credit de consum (overdraft în
  principal) sau în traducere liberă: să folosești un credit cu dobândă mare ca
  să plătești un credit cu dobândă mică
featuredpost: false
featuredimage: /img/house-interest.jpg
tags:
  - velocity banking
  - credit
  - plata anticipata
---
![Credit](/img/house-interest.jpg)

Văd tot mai des promovată, în ultima vreme, o metodă de rambursare anticipată în spațiul virtual românesc: **Velocity Banking**. Idea de bază e să plătești anticipat creditul ipotecar folosind un credit de consum (overdraft în principal) sau în traducere liberă: să folosești un credit cu dobândă mare ca să plătești un credit cu dobândă mică :man_facepalming:.

Ideea de a plăti creditul ipotecar anticipat e într-adevăr una din cele mai bune decizii pe care le poți lua (dacă nu poți sau nu vrei să investești banii aceia într-un activ cu randament mai mare decât dobânda creditului). Iar Velocity Banking ia această idee simplă și o complică cu extra credite și jonglări cu cărți de credit. N-ar fi nimic rău dacă într-adevăr ai ajunge să plătești mai puțin decât rambursând anticipat, lună de lună, o sumă suplimentară pe care ești capabil să o economisești. Dar ajungi oare să plătești mai puțin? Ca să nu o lungesc îți răspund de acum: **NU**. Vei plăti chiar mai mult.

Teoriile pe pe care se bazează această metodă sunt:

* un credit ipotecar are o dobândă compusă (se plătește dobândă la dobânda acumulată) pe când un overdraft are o dobândă simplă (se plătește dobândă doar la principalul curent). Lucru **greșit**, deoarece un credit ipotecar standard e un credit cu dobândă simplă, pentru că întotdeauna rata lunară este alcătuită din *dobândă* + *principal*, unde *dobânda* reprezintă **toată** dobânda calculată pe luna respectivă la principalul rămas + o rambursare de principal (de aceea în primii ani dobânda reprezintă o foarte mare parte din rată, fiindcă se calculează la un principal mult mai mare). Ar fi fost credit cu dobândă compusă dacă s-ar fi achitat doar o parte din dobânda calculată la principal, iar restul se reeșalona.
* La overdraft, dobânda se calculează zilnic la valoarea soldului curent, pe când la ipotecar se calculează lunar. Într-adevăr acest lucru reprezintă un avantaj, pentru că, de exemplu, dacă ai un venit de **3000 de lei** și cheltui exact **100 lei** în fiecare zi, la un overdraft cu dobândă de **10%/an** vei achita efectiv o dobândă anualizată de **5%**, adică la jumătate, dar totuși foarte puțin sub cea a creditului ipotecar. Dar cum majoritatea cheltuielilor le faci la virarea venitului, în viața reală dobânda efectivă e mai mare. Dar să zicem că ești în cazul ideal de dobândă la jumătate, am vești pentru tine: pentru jonglarea pe o singură lună avem deja o soluție mult mai bună: cardul de credit cu **0** dobândă (și nu, nu le poți folosi pe ambele concomitent, trebuie să alegi unde virezi venitul, astfel anulezi beneficiul cărții de credit). Velocity Banking, în schimb, încurajează descoperirea de cont pe care o poți rambursa în 6-12 luni. Dar cu cât prelungești rambursarea, cu atât mai mult crește dobânda anuală efectivă. Apropo, să nu cazi în plasa de a-ți calcula procentul dobânzii anuale împărțind dobânda totală plătită la overdraftul inițial și să compari cu dobânda creditului ipotecar. Calculul corect se face folosind Internal Rate Of Return (IRR), ce ia în calcul suma de bani extra pe care ai economisit-o lunar și pe care ai folosit-o să achiți overdraftul, în loc să achiți direct, în avans, creditul ipotecar. Am să te scutesc de un calcul și îți spun că, pentru cazul ideal al unui overdraft cu dobândă **10%** rambursat integral în **12 luni**, IRR este **6.45%**, peste dobânda din România la credite ipotecare.

Bun, cred că te-am debusolat cu prea multă teorie. Hai să vedem un exemplu concret!

### Studiu de caz:

* Credit: 100.000 lei
* Dobândă credit ipotecar: 5.4% (cam asta e media la ora actuală)
* Durată credit inițial: 30 ani
* Dobândă descoperire de cont: 10%
* Suma economisită lunar: 1000 lei
* Plafon descoperire cont: 12.000 lei (12 x 1000 lei)
* Caz ideal în care cheltuim din overdraft sumă fixă egală în fiecare zi.

#### Rezultat:

* Dobândă credit ipotecar plătită în cazul plății anticipate standard: **18.223,45 lei**
* Dobândă credit ipotecar plătită folosind Velocity Banking: **16.068,26 lei**
* Dobândă plătită pentru Overdraft: **2576.48 lei**
* **Câștigător**: plata standard, mai ieftină cu **421,29 lei**. Ca să fi fost egalitate, dobânda la overdraft trebuia sa fie aproximativ **8.37%**.

Dar te rog nu ma crede pe cuvânt. Am făcut un spreadsheet în Google Sheets cu care te poți juca și verifica rezultatele. Îl poți accesa aici: <https://docs.google.com/spreadsheets/d/14KYJAbjTR7WoNbjyPGF8qwEmaJd_IU9wPiSbQ3Dscbg/edit?usp=sharing> (e read-only, pentru a-l putea edita trebuie să faci o copie la tine în Drive). Apropo, să nu crezi că nu am căutat pe internet ceva similar înainte să mă chinui să îl fac, dar e lesne de înțeles că, deși am găsit o grămadă de rezultate care laudă metoda, nu am găsit nici unul care conține calcule concrete și complete. Oare de ce?



Bine, bine, vei zice ca metoda include și folosirea cardului de credit, de ce nu am inclus și acest lucru în calcul? Pentru ca poți folosi cardul de credit direct pentru plata anticipată, fără să te mai complici cu alte credite purtătoare de dobândă mare. Pur și simplu primul salariu îl verși tot anticipat, și trăiești lunar pe cardul de credit, urmând ca la fiecare salariu viitor să achiți ce ai cheltuit, pentru a beneficia de dobândă 0, iar ce ti-a rămas din el virezi spre plată anticipată (Un side note: la un card de credit fără cashback, dobânda nu e chiar 0, pentru ca au costuri de administrare, dar într-adevăr dobânda este foarte mică dacă dacă rulezi mare parte din salariul lunar).

Așadar, dacă nu aduce nici un avantaj față de rambursarea anticipată standard, de ce e atât de promovată? La o scurtă căutare pe Google, pare că a apărut în cercurile MLM (Multi Level Marketing) ca o metodă de a atrage lumea la cursurile plătite sau spre anumite bănci, pentru comisioane. Metoda funcționează perfect în aceste cercuri pentru că e greu de înțeles în totalitate și pare că aduce rezultate senzaționale. Nu știu dacă s-a răspândit din incompetență, sau din dorința de a atrage adepți la cursuri...



**Atenție:** Datele de mai sus nu trebuie luate ca atare de către cititor. Este necesară o documentare și o analiză personală înainte de luarea unei decizii.
