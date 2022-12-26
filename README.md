# Bullshit Factory

### 1 Instaleaza node <a href='https://nodejs.org/en/download/' >download node</a>

    
### 2 Instaleaza sanity

   Din terminal(cauta cmd(windows) sau terminal(macos)) ruleaza comanda <code>npm install -g @sanity/cli</code>
   
   <img alt ='node js image' src='https://firebasestorage.googleapis.com/v0/b/shred-klub.appspot.com/o/WhatsApp%20Image%202022-12-26%20at%2023.42.01.jpeg?alt=media&token=203815a7-e806-4428-9033-278fad10a659' width='600px' >

### 3 Descarca codul
     
    <img alt ='node js image' src='https://firebasestorage.googleapis.com/v0/b/shred-klub.appspot.com/o/Screen%20Shot%202022-12-27%20at%2000.01.01.png?alt=media&token=89e9c8c4-48a0-4f46-bfd9-c139772b912a' width='600px' >
    
### 4 Dezarhiveaza fisierul

### 5 ruleaza urmatoarele comenzi in terminal
      <code>cd <PATH> </code> unde <PATH> este ruta spre folder ul dezarhivat de exemplu <PATH>= C:/Users/andrei/downloads/blog-main
      
      apoi ruleaza
      
      <code>npm i --legacy-peer-deps</code>
   
### 6 Initiaza sanity ruleaza 
        <code>sanity init --coupon javascriptmastery2022</code>
        <img alt ='node js image' src='https://firebasestorage.googleapis.com/v0/b/shred-klub.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2000.12.48.jpeg?alt=media&token=ff24d4c5-4bab-447c-8b4f-9199c408f95b' width='600px' >
        
### 7 Descarca fisirele de <a href='https://github.com/andreiraduglavan/schemas' >aici</a> si copiaza le in schemas in folder ul unde ai initiat proiectul sanity

   <img alt ='node js image' src='https://firebasestorage.googleapis.com/v0/b/shred-klub.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2000.24.04.jpeg?alt=media&token=c9397cdd-35b7-40ac-bb5a-8caceabd91ff' width='600px' >

### 8 Intra in consola sanity si da copy la project id

<img alt ='node js image' src='https://firebasestorage.googleapis.com/v0/b/shred-klub.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2000.28.50.jpeg?alt=media&token=d1f500c0-c86a-4ad6-9153-0672d25e2818' width='600px' >

### 9 in folder ul proiectului 'blog main' creeaza un fisier numit .env.local

<img alt ='node js image' src='https://firebasestorage.googleapis.com/v0/b/shred-klub.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2000.36.03.jpeg?alt=media&token=e082e978-ddca-42cd-a5c6-57deb83aa462' width='600px' >

<img alt ='node js image' src='https://firebasestorage.googleapis.com/v0/b/shred-klub.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2000.36.11.jpeg?alt=media&token=fa9056a1-ce40-425c-8bb0-0156c524fece' width='600px' >

### 10 in terminal din folder ul proiectului ruleaza comanda <code>npm run dev</code> pentru a porni blog ul la ruta


### Run Sanity Studio CMS

1. Install Sanity CLI globally (if not already)

```
npm install -g @sanity/cli
```

2. Run 

To run sanity studio server, run the following command in your terminal.  It will open a live server on `http://localhost:3333`

```
yarn sanity
# or
cd studio && sanity start
```

