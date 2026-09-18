# LipariBank Dashboard - Day 1 - Fix Mission

Benvenuto nel tuo primo progetto di debugging! Questo è un progetto React con Vite e TypeScript che contiene **3 bug intenzionali** da trovare e correggere prima di poter procedere.

---

## Come avviare

```bash
npm install
npm run dev
```

L'applicazione sarà disponibile su [http://localhost:5173](http://localhost:5173).

---

## Le tue 3 missioni

Prima di poter dire che il progetto funziona, devi risolvere questi 3 problemi:

### Missione 1 — Crash all'avvio
L'applicazione si blocca appena carica la pagina Dashboard con il seguente errore in console:

```
Error: Objects are not valid as a React child
```

Trova il componente responsabile e correggi il codice che provoca il crash.

### Missione 2 — Build failure e warning ESLint
Eseguendo `npm run build` o `npm run lint` compaiono errori TypeScript/ESLint in un componente di navigazione. Inoltre, la console del browser mostra un warning relativo alle liste renderizzate dinamicamente.

Trova e correggi tutti gli errori nel componente incriminato.

### Missione 3 — Nomi fantasma in React DevTools
Apri React DevTools nel browser e naviga nell'albero dei componenti. Alcuni componenti appaiono con nomi generici come `_c`, `Component`, o solo `()` invece del loro nome reale.

Trova i componenti con questo problema e correggili in modo che React DevTools mostri il nome corretto.

---

## Strumenti consigliati

- **React DevTools** — estensione browser per ispezionare l'albero dei componenti
- **Browser DevTools** — console per i messaggi di errore runtime
- **ESLint output** — `npm run lint` per gli errori statici
- **TypeScript compiler** — `npm run build` per i type errors

---

## Bonus Mission — Feature da Implementare (opzionale, ~1 ora)

Una volta risolti i 3 bug, aggiungi al componente `Header` un pulsante che alterna tra **dark** e **light mode**.

### Requisiti

Il tema deve:
- Applicare una classe CSS sull'elemento radice del documento (`document.documentElement`)
- Persistere nel `localStorage` tra un ricaricamento e l'altro della pagina
- Inizializzarsi dalla preferenza del sistema operativo (`prefers-color-scheme`) se non è presente nessun valore salvato

### Criteri di accettazione

- [ ] Il pulsante nel `Header` alterna visivamente tra dark e light mode
- [ ] Il tema scelto persiste dopo un ricaricamento della pagina
- [ ] Se nessuna preferenza è salvata, il tema segue la preferenza del sistema operativo
- [ ] Il cambio avviene applicando/rimuovendo una classe sull'elemento radice del documento
- [ ] Nessun bug risolto in precedenza viene reintrodotto
