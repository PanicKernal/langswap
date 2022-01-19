<p align='center'><img src='https://user-images.githubusercontent.com/97374804/150049082-5a0cf5c8-2cbc-437a-8671-7c8619b7bdd7.png'></p>

# langswap
A small JavaScript library (no jQuery) for switching HTML elements seamlessly between different languages.

This small library works by referencing the classes and HTML attributes that you add to certain HTML elements, mainly containing text that you want to swap and the control element to trigger that swap.

## 1. Getting started
- Clone this repo
```
git clone https://github.com/PanicKernal/langswap.git
```
- Or simply copy the contents of [langswap.js](langswap.js)

## 2. How to use
- Reference the script at the end of the body element, after all language containing elements
```
<script src="langswap.js"></script>
```
(Add 'defer' and/or 'async' if you want)
### 2.1 Binary language swap (only 2 languages)
- Add a 'lang-control' class to your toggle element, such as a button or link
```
<button type="button" class="lang-control">Change</button>
```
- Add a 'data-lang' attribute to each element containing language you want to swap translations. Assign an integer string indicating order of precedence. '1' should be the first and default language.
```
<h1 data-lang="1">Translator Tests</h1>
<h1 data-lang="2">Тесты переводчиков</h1>

<p data-lang="1">
  This will test the library's capability to switch text seamlessly.
</p>
<p data-lang="2">
  Это проверит способность библиотеки плавно переключать текст.
</p>
```

### 2.2 Swapping several languages (more than 2)
- Add a 'lang-control' class to your toggle element collection, prefereably a dropdown
```
<select class="lang-control">

</select>
```
- Add a 'data-lang-control' attribute to each dropdown element containing the language toggle. Assign an integer string indicating order of precedence. '1' should be the first and default language.
```
<select class="lang-control">
  <option data-lang-control="1">English</option>
  <option data-lang-control="2">Russian</option>
  <option data-lang-control="3">Spanish</option>
</select>
```
- - Add a 'data-lang' attribute to each element containing language you want to swap translations. Assign an integer string indicating order of precedence. '1' should be the first and default language.
```
<h1 data-lang="1">Translator Tests</h1>
<h1 data-lang="2">Тесты переводчиков</h1>
<h1 data-lang="3">Pruebas de traductora</h1>

<p data-lang="1">
  This will test the library's capability to switch text seamlessly.
</p>
<p data-lang="2">
  Это проверит способность библиотеки плавно переключать текст.
</p>
<p data-lang="3">
  Esto probará la capacidad de la biblioteca para cambiar de texto sin problemas.
</p>
```

### 2.3 Other considerations
- As this manipulates the CSS display properties of elements, if you have a display property that you want to preserve between the swaps, add a 'data-lang-display' attribute to each element you want to preserve
```
<h1 data-lang="1" data-lang-display='flex'>Translator Tests</h1>
<h1 data-lang="2" data-lang-display='contents'>Тесты переводчиков</h1>

<p data-lang="1" data-lang-display='grid'>
  This will test the library's capability to switch text seamlessly.
</p>
<p data-lang="2" data-lang-display='block'>
  Это проверит способность библиотеки плавно переключать текст.
</p>
```
- If your page full of text is large or takes long to load, you may notice all secondary text appear momentarily before disappearing. This script will go through and hide all secondary text but is limited by your browser. Simply add a CSS style to hide the other languages on load.
