# Animal shelter
[![Croatian](https://img.shields.io/badge/lang-Croatian-green.svg)](https://github.com/MarinoBarada/Azil-za-zivotinje/blob/master/README.md)
[![English](https://img.shields.io/badge/lang-English-yellow.svg)](https://github.com/MarinoBarada/Azil-za-zivotinje/blob/master/README.en.md)

This is the final project for Edit Scool Junior Dev React js. The goal of the project is to create an application that will represent the site of the animal shelter. The application consists of several sub-pages:

- [General Information](#general-information)
- [List of animals](#list-of-animals)
- [Add new animals](#add-new-animals)
- [Donations](#donations)
- [Notification](#notification)

## Navigation

It is implemented using a library "React Router"

## Database and server

"json-server" library is used

## User role

The application is designed to contain different functionalities depending on the role of the user. Two roles have been implemented - "admin" and "user". This is implemented using a simple "checkbox" element displayed in the page navigation and a "useContext" hook

## General Information

This page is the same for both roles and contains general information about the asylum - name, address, contact information, etc.

### Functionality list:

- Display of general data (About us)
- Location display on the map
- Contact form (email)

## List of animals

This page shows all the animals that are currently in the shelter. Users can filter the view, can select an animal for adoption and search for it by name. The administrator can edit (change) information about already existing animals

### Functionality list:

- Display of all animals in the shelter (in the form of a series of cards/frames). The cards differ visually according to the adoption status

- Filtering animals by type and adoption status

- Option "Udomi" - pressing this button changes the status "udomljen" (adopted) to "true" and the tab with the image of the animal changes its appearance.

- "Uredi" option - only visible if the "admin" role is enabled. By pressing the "uredi" button, the appearance of the component changes and it is possible to change the data of the selected animal. It is also possible to change the adoption status

## Add new animals

This page is used to enter the data of new animals and is visible only to the administrator. The form consists of these data entries:

- Animal name (must not be empty)
- Animal type (select option with several predefined values - cat/dog/...)
- Animal years (must not be empty)
- Adopted - true/false (this is automatically "false" at the beginning and is not entered)
- Image (image URL only)
- Chip (true/false)
- Last veterinary examination (date)

## Donations

This page serves two purposes - admins can ask for donations they need and accept donations offered from users, while users can choose to send an offer or fulfill a posted donation

### Functionality list:

Three categories of donations are displayed separately on the page
- "tražimo" - donations azil is looking for
- "nudi se" - donations offered by users
- "donirano" - accepted and fulfilled donations

### Administrator role:

- The "nova donacija" option is visible, with which he can add a new request for donations to the "tražimo" list. Each donation has:
  - type (food/medicine/toys/vet. expenses) - mandatory
  - amount (donation value) - mandatory
  - description - short description or link to the product - optional
- For each donation in the "tražimo" list, the admin has the option "označi kao donirano" (changes the status) or "izbriši" (deletes from the list)
- For each donation in the "nudi se" list, the admin has the "prihvati" option to change the status of that donation (it is transferred to the "donirano" list)
- For each donation from the "donirano" list, the admin has the option to "izbriši" (remove) or "ponovi" (a copy with identical values is made and placed in the "tražimo" list)

### User role:

- For each donation in the "tražimo" list, there is a "donirano" option - it changes the status of the donation to "donirano" and moves it to the corresponding list
- The "nova donacija" option is visible, which works the same as in admin, only it is added to another list ("nudi se")

## Notification

This is a page for general information about asylum or information that users want to share with others

### Functionality list:

- Display of notifications sorted by time of addition (from newest to oldest)
- On the page, there should be a "Nova obavijest" option, which will display an input form with two fields:
  - notification title - mandatory, max 20 characters
  - notification text - min 10, max. 200 characters
  - option "važno" - true/false, only admin can set this
- The admin role has the ability to delete notifications. Notifications that have the status "važno" have a different formatting style

## Installation

Install [React router](https://reactrouter.com/en/main/start/tutorial)

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

Install [JSON server](https://www.npmjs.com/package/json-server?activeTab=readme)

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

**REMARK!** : Run in cmd
```bash
  json-server --watch azil.json --port 3001
```