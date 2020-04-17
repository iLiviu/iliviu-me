---
templateKey: blog-post
title: >
  Capital Way: Episodul 2 - Demascarea fraudei
date: 2020-04-16T11:30:27.917Z
description: >
  Am scris acum ceva vreme de Capital Way, și avertizam că miroase rău a Ponzi. Atunci mă bazam doar pe minciunile care se pot vedea de la suprafață, fără a fi nevoie să devii client. Îmi luasem gândul de la ei, dar recent m-a contactat un client de-al lor să îmi ceară o părere. A binevoit să împărtășească cu mine niște date din contul său, pe care le-am combinat cu un istoric public al tranzacțiilor pe care un promotor al botului le-a făcut (și care acum probabil regretă transparența prea mare) și iată ce am aflat...
featuredpost: false
featuredimage: /img/ponzi.png
tags:
  - scam
  - ponzi
  - forex bot
  - Capital Way
---
![Ponzi](/img/ponzi.png)

[Am scris](/blog/2020-03-05-capital_way_-_cel_mai_bun_bot_public_de_forex_sau_doar_un_scam_ponzi/) acum ceva vreme de Capital Way, și avertizam că miroase rău a Ponzi. Atunci mă bazam doar pe minciunile care se pot vedea de la suprafață, fără a fi nevoie să devii client. Îmi luasem gândul de la ei, dar recent m-a contactat un prieten, client de-al lor, să îmi ceară o părere. A binevoit să împărtășească cu mine niște date din contul său, pe care le-am combinat cu un istoric public al tranzacțiilor pe care un promotor al botului le-a făcut cu scopul de a atrage clienți, și iată ce am aflat...

 La baza tranzacțiilor e un bot (primitiv și prost) ce intră pe poziții la intervale fixe de 15 minute (ex: 8:00, 9:15, 13:45). Un mare semnal că nu ai de a face cu un bot profesional. Când botul intră pe prima poziție, cel mai probabil se folosește de sentimentul Bullish/Bearish (care îl găsești pe aproape toate site-urile de Forex) pentru a determina dacă intră pe Buy sau Sell (deși din ce am observat tranzacția de schimbare de direcție pare că e executată manual, deci nici atât nu știe botul să facă). Are setat un procent fix (și mic) de câștig la care închide tranzacția și folosește o strategie numită [Martingale](https://en.wikipedia.org/wiki/Martingale_(betting_system)), care presupune că atunci când ești pe pierdere, dublezi miza și intri pe aceeași poziție (ca un adevărat jucător la ruletă). Tot ce pot să îți spun e că această strategie duce la pierderea tuturor fondurilor pe termen lung, pentru că statistic vei avea la un moment dat un șir de pierderi consecutive care va face ca levierul să fie atât de mare încât o mișcare minoră îți va lichida contul. Tot ce face strategia asta e să îți dea o falsă speranță pe termen scurt că îți recuperezi întotdeauna pierderile, când de fapt doar le amâni. Iar botul ăsta e atât de primitiv, încât, dacă tranzacțiile lui ar fi fost pe bune, ți-ar fi golit contul deja. 

 Doar că botul e acolo doar ca să vezi tu că se fac tranzacții periodic. Când acesta dă rateu (și din tranzacțiile urmărite, dă rateu destul de des în perioade de volatilitate) pentru că tot dublează miza în tranzacțiile pierzătoare,  proprietarii lui sunt nevoiți să intre pe fir, îl pun pe pauză și încep să introducă tranzacții manual pentru a salva ziua (și balanța aparentă a clienților). Cum vezi aceste tranzacții? Apar întotdeauna după un șir lung de tranzacții pierzătoare și nu se mai execută la intervale de 15 minute (o să vezi că sunt la 8:37 sau 9:13 de exemplu). Și dacă analizezi aceste tranzacții îți dai seama de înșelătorie. Toate aceste tranzacții se deschid la un preț fals, care nu a existat de fapt la momentul respectiv (ci doar cu câteva minute în urmă), majoritatea sunt cu levier mult mai mare decât cele obișnuite și de obicei sunt deschise pe Bitcoin (XBTUSD) pentru că fluctuațiile sunt mai mari și e mai greu de identificat manipularea (uite [aici](https://youtu.be/_jjWo0VaY7E?t=252) un video unde cineva demonstrează cum un broker de MT 4 poate face asta cu un plugin special). Astfel că poziția se deschide instant cu un profit mare, dar fals. Nu închid poziția imediat ca să nu pară dubios. Din acest motiv, câteodată însă proprietarii nu o nimeresc și sunt nevoiți să închidă "poziția" pe pierdere mică pentru că prețul se duce împotriva lor. Dar când merge în favoarea lor, la un moment dat închid poziția cu un profit destul încât să acopere pierderile cauzate de bot, după care ei ies de la butoane și lasă botul să își reia activitatea. 

 Atașez mai jos exemple de poziții falsificate. Dacă nu ar fi fost aceste tranzacții false, balanța contului tău ar fi afișat de mult valoarea **0**. Menționez că toate orele sunt în timezone **UTC**, în caz că vrei să verifici și tu:

- O înregistrare video care surprinde live manipularea prețului de deschidere. Dacă te uiți la bid-ask pentru XBTUSD vei vedea că la momentul executării tranzacției de cumpărare de la ora **08:38:07 din 16.04.2020** , intervalul era mult în afara prețului de **6965.99** la care botul a "deschis" poziția. Iar dacă te uiți pe grafic vezi ca nu s-au mai efectuat de minute bune tranzacții apropiate de acel preț (zic apropiate, pentru că exact la acel preț nu s-au efectuat deloc. Nici o lumânare recentă la minut nu cuprinde acest preț).  
[![Proba video](/img/capitalway_scam_vid1.png)](https://drive.google.com/open?id=1Ufe27hPN_g6RsIYa3TM8VXh0sIwpcy9C)

&nbsp;

 - Mai jos vezi că prețul de deschidere la **7:38:58 din 02.03.2020** de **1.0471** e fals pentru că dacă te uiți pe grafic (screenshot direct din MT), în intervalul de 30 de minute început la **7:30** prețul a variat între **1.10603 și 1.10787**.  Din păcate tranzacția era prea veche ca să obțin grafic la minut din Metatrader, care are istoric limitat, așa că am folosit Investing.com ca să vezi care era minimul la minutul respectiv și anume **1.1069**
![Proba 1](/img/capitalway_scam_exhibit1.png)

&nbsp;

 - La fel, prețul de deschidere la **XBTUSD** e în sub Low-ul  intervalului de 5 minute început la **12:10** (screenshot din Metatrader sus) și am zis să îți arăt cât de diferit era prețul pe Binance pentru minutul respectiv (din nou tranzacție prea veche ca să pot da graficul la minut din Metatrader).
![Proba 2](/img/capitalway_scam_exhibit2.png)

&nbsp;

 - Alt exemplu cu preț în afara intervalului de 1 minut la **XBTUSD**
![Proba 3](/img/capitalway_scam_exhibit3.png)

&nbsp;

 - Încă unul la **EURUSD**. 
![Proba 4](/img/capitalway_scam_exhibit4.png)

&nbsp;

 - Și ultimul, cred că deja înțelegi cum stă treaba
![Proba 5](/img/capitalway_scam_exhibit5.png)

&nbsp;

O să mă întrebi cum e posibil să falsifici aceste date? Doar folosesc **MetaTrader**, un program cu renume. Ei bine, da, folosesc MetaTrader, dar ei s-au înregistrat ca și Broker ( e plin internetul de companii care pentru o taxă, îți oferă o așa numită soluție **White Label** pentru Metatrader) și au posibilitatea să țină un registru de ordine intern pentru clienții lor (așa numitul **b-book**), iar tranzacțiile nu ajung la providerii de lichiditate din piață. Astfel, pe partea cealaltă a tranzacției e brokerul (Capital Way), adică "vinzi" sau "cumperi" de la broker. Iar dacă brokerul nu are intenția să îți returneze banii depozitați, tranzacția e o simplă înregistrare în baza lui de date, nu îl afectează cu nimic. 

### Concluzie
Așadar totul indică spre faptul că absolut toate tranzacțiile (inclusiv cele automate ale botului) sunt tranzacții fictive.  Pentru că dacă nu erau, atunci profitul adevărat al tranzacțiilor falsificate era atât de mic (sau nu era deloc), încât nu acoperea pierderile din tranzacțiile periodice ale botului, iar banii tai erau pierduți de mult. Miroase a **Ponzi** de la o poștă. Scopul acestui sistem este doar să atragă clienți noi (și da, între timp onorează retragerile de bani, atât timp cât clienții noi depun mai mult decât cei ce retrag), iar când acest lucru nu se mai întâmplă, cei din spate dispar cu banii clienților. Aceste sisteme au nevoie de **promotori agresivi**, care să continue să aducă clienți noi periodic. Cine ți-a prezentat ție botul? Cel mai probabil cine ti l-a recomandat e o persoana din interior, care știe cum funcționează defapt sistemul, și al cărui singur scop e să te stoarcă de bani, nu să te ajute să faci alții. 

Și un sfat pe viitor: fugi de brokeri de Forex anonimi (aș putea generaliza și să îți sugerez să fugi de piața Forex în totalitate, pentru că dacă ai căzut în plasa acestui scam, slabe șanse să deții destule cunoștințe încât să fi profitabil pe termen lung pe această piață)!

**Atenție:** Datele de mai sus nu trebuie luate ca atare de către cititor. Este necesară o documentare și o analiză personală înainte de luarea unei decizii.