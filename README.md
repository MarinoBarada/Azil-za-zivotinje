# Azil za zivotinje

Ovo je završni projekt za Edit Scool Junior Dev React js. 
Cilj projekta je napraviti aplikaciju koja će predstavljati stranicu azila za životinje. Aplikacija se sastojati od nekoliko pod-stranica

- Opći podaci
- Popis životinja
- Unos novih životinja
- Donacije
- Obavijest

## Navigacija

Implementirana je korištenjem biblioteke "React Router"

## Baza podataka i poslužitelj

Korištena je  biblioteka "json-server"

## Uloga korisnika

Aplikacija je zamišljena na način da sadrži različite funkcionalnosti ovisno o ulozi korisnika. Potrebno je implementirati dvije uloge - "admin" i "korisnik". To je implementirano pomoću jednostavnog "checkbox" elementa prikazanog u navigaciji stranice te "useContext" hook-a.

## Opći podaci

Ova stranica je jednaka za obje uloge i sadrži opće podatke o azilu - ime, adresu, kontakt podatke i slično.

### Popis funkcionalnosti:

- Prikaz općih podataka 
- Prikaz lokacije na mapi
- Kontakt forma (mail)

## Popis životinja

Ova stranica prikazuje sve životinje koje se trenutno nalaze u azilu. Korisnici mogu filtrirati prikaz te mogu odabrati životinju za udomljavanje. Administrator može uređivati (mijenjati) podatke o već postojećim životinjama.

### Popis funkcionalnosti:

- Prikaz svih životinja u azilu (u obliku  niza kartica/okvira). Kartice se vizualno razlikuju prema statusu udomljavanja

- Filtriranje životinja po vrsti i po statusu udomljavanja

- Opcija "Udomi životinju" - pritiskom na ovu tipku mijenja se status "udomljen" na "true" i kartica sa prikazom životinje mijenja izgled.

- Opcija "Uredi" - vidljiva samo ako je uključena uloga "admin". Pritiskom na tipku "uredi" mijenja se izgled komponente i moguće je mijenjati podatke odabrane životinje. Također je moguće promijeniti status udomljavanja

## Unos novih životinja

Ova stranica služi za unos podataka novih životinja i vidljiva je samo administratoru. Forma se sastoji od ovih unosa podataka: 

- Ime životinje (ne smije biti prazno)
- Vrsta životinje (select opcija sa nekoliko predefiniranih vrijednosti - mačka/pas/…)
- Godine životinja - ne smije biti prazno
- Udomljen - true/false (ovo je na početku automatski "false" i ne unosi se)
- Slika (samo URL do slike)
- Čip (true/false)
- Zadnji pregled (datum)

## Donacije

Ova stranica služi za dvije svrhe - administratori mogu postavljati upite za donacije koje su im potrebne i prihvaćati ponuđene donacije od korisnika, dok korisnici mogu odabrati opciju slanja ponude ili ispunjenja objavljene donacije.

### Popis funkcionalnosti:

Na stranici se odvojeno prikazuju tri kategorije donacija
- "tražimo" - donacije koje traži azil
- "nudi se" - donacije koje nude korisnici
- "donirano" - prihvaćene i ispunjene donacije

### Uloga administratora:

- vidljiva je opcija "nova donacija" pomoću koje može dodati na popis "tražimo" novi zahtjev za donacije. Svaka donacija ima:
  - tip (hrana/lijekovi/igračke/vet. troškovi) - obavezno
  - iznos (vrijednost donacije) - obavezno
  - opis - kratki opis ili link na proizvod - neobavezno
- Za svaku donaciju u popisu "tražimo" admin ima opciju "označi kao donirano" (mijenja status) ili "izbriši" (briše iz popisa)
- Za svaku donaciju u popisu "nudi se" admin ima opciju "prihvati" sa kojom mijena status te donacije (prebacuje se u popis "donirano")
- Za svaku donaciju iz popisa "donirano" admin ima opciju "briši" (uklanja se) ili "ponovi zahtjev" (radi se kopija sa identičnim vrijednostima i stavlja u popis "tražimo")

### Uloga korisnika:

- Za svaku donaciju u popisu "tražimo" ima opciju "doniraj" - mijenja status donacije u "donirano" i premješta u odgovarajući popis
- Vidljiva je opcija "nova donacija" koja radi isto kao i kod amina samo se dodaje na drugi popis ("nudi se")


## Obavijesti

Ovo je stranice za općenite obavijesti o azilu ili informacije koje korisnici žele podijeliti sa drugima.

### Popis funkcionalnosti:

- Prikaz obavijesti koje su sortirane po vremenu dodavanja (od najnovije prema starijima)
- Na stranici treba postojati opcija "Nova obavijest" koja će prikazati formu za unos sa dva polja:
  - naslov obavijesti - obavezno, max 20 znakova
  - tekst obavijesti - min 10, max. 200 znakova
  - Opcija "važno" - true/false, ovo može samo admin postaviti
- Uloga admina ima mogućnost brisanja obavijesti. Obavijesti koje imaju status "važno" imaju drugačiji stil oblikovanja

## Installation

Install [React router](https://reactrouter.com/en/main/start/tutorial) tutorial

```bash
  npm i react-router-dom
```

Install [useForm hook](https://react-hook-form.com/get-started/) 

```bash
  npm install react-hook-form
```

Install [EmailJS](https://www.emailjs.com/docs/sdk/installation/)

```bash
  npm install @emailjs/browser --save
```

Install json server

```bash
  npm install -g json-server
```

Install [axios](https://www.npmjs.com/package/axios)

```bash
  npm install axios
```

Install [React icons](https://react-icons.github.io/react-icons/)

```bash
  npm install react-icons --save
```

Install [SweetAlert2](https://sweetalert2.github.io/#download)

```bash
  npm install sweetalert2
```
    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Start the json server

```bash
  json-server --watch azil.json --port 3001
```

