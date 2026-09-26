# Front-End in the AI Era — your guide

Everything you need today. Work at your own pace. If you fall behind,
skip ahead — don't sit stuck.

**The one rule:**

> You own every line you ship, whether you typed it or AI did.
> If you can't explain it, don't keep it.

## Today

| Time | What | AI |
|---|---|---|
| 10:02 | **Will AI take this job?** | demo |
| 10:10 | Part 1 — What a web page actually is | off |
| 10:20 | Part 1b — Ten days in 1995 | off |
| 10:35 | Part 2 — DevTools is your workshop | off |
| 10:43 | Part 3 — map and filter | off |
| 11:03 | Part 4 — What JavaScript does underneath | off |
| 11:38 | *Break* | |
| 11:50 | Part 5 — Why React exists | off |
| 12:10 | Part 6 — Build it (checkpoints 1–5) | **off** |
| 1:00 | *Lunch* | |
| 1:45 | Part 7 — Reviewing AI code | **on** |
| 2:05 | Part 8 — Your own feature | **on** |
| 2:35 | Ship it | |
| 2:45 | After today | |

## Where AI fits

**Morning and the build: AI off.** Not because it's cheating — because
you cannot review code you've never written. Every checkpoint is
something you'll later have to judge AI's version of.

**After lunch: AI on, and it's the real point of the day.** First you
review code AI wrote (Part 7), then you use it properly to build
something (Part 8).

Nobody will pay you to type `useState` from memory. They'll pay you to
know when the AI got it wrong.

---

# Part 0 — Will AI take this job?  ·  10:02

Let's get the question out of the way first. Go to
**gemini.google.com** (you're already signed into Google) and ask it:

> Build me a canteen ordering app in React with a menu and a cart.

Ten seconds, several hundred lines. And it's **good** — rupees, veg
markers, the empty cart handled. We're not pretending otherwise.

Now do two things.

**1. Compare with the person next to you.** Read out your first line of
code each. They won't match. Same question, a different answer every
time — and all of them look right.

**2. Pick any line in the middle. Explain it to your partner.**

Take your time.

---

### Those weird class names

You'll see things like this all over the generated code:

```jsx
<div className="min-h-screen bg-slate-50 px-4 flex items-center">
```

That's **Tailwind** — the most common way React apps are styled right
now. Instead of writing CSS in a separate file, you stack small
single-job classes directly on the element:

| Class | What it does |
|---|---|
| `flex` | `display: flex` |
| `px-4` | padding left and right |
| `bg-slate-50` | light grey background |
| `rounded-xl` | rounded corners |

**Why people like it:** you never invent class names, you never hunt
through a CSS file, and you can't accidentally break a different page.
**Why people hate it:** the markup gets long and ugly.

**We're not using it today** — one new thing at a time, and you can't
learn Tailwind before you've learned what it's replacing. But it's on
most job descriptions, so it's week 2 on your list.

### Now try this

Copy that generated code into the canteen starter and run it.

**It'll look completely broken.** Plain text, no styling, no colours.

Why? It wrote 191 Tailwind classes — and never told you it needs
Tailwind installed. Our starter uses plain CSS. So every one of those
classes does nothing.

> It didn't lie to you. It just doesn't know what's in your project.
> In a real job that's most of what goes wrong: code that works in the
> AI's imagination but not in your repo.

---

Three things worth noticing:

**Predictable beats impressive.** Good engineering gives you what you
asked for — nothing more, nothing less. Twenty different answers to one
question is the opposite of that.

**Your name goes on it, not the AI's.** When it breaks, you're the one
fixing it.

**And once you know the system, you can hand the repetitive parts away
and spend your time on things nobody has built yet.** That's the good
part. But it only works if you understand what you're handing over.

---

That's the whole point of today:

> ## AI can write it.
> ## You can't check it yet.

Not a problem with you. It's just what a beginner is. But it *is* the
thing a company pays for — someone who can look at this and say "yes,
this is right, I'll put my name on it."

By 3 o'clock you'll come back to this tab and read it properly.

**Keep it open.**

---

# Part 1 — What a web page actually is  ·  10:10

## Three languages, three jobs

| | Job | If you remove it |
|---|---|---|
| **HTML** | Structure | Nothing left. No page. |
| **CSS** | Appearance | Still works, looks terrible |
| **JavaScript** | Behaviour | Looks fine, nothing responds |

### Try it — kill the CSS

Go to **wikipedia.org**. Open DevTools (`F12`) → **Console** tab. Paste:

```js
document.querySelectorAll('link[rel=stylesheet],style').forEach(e => e.remove())
```

Ugly — but you can still read and click everything. **Good structure
survives.** That's HTML doing its job.

### Try it — kill the JavaScript

Go to **swiggy.com**. In DevTools press `Ctrl+Shift+P`, type
`javascript`, choose **Disable JavaScript**. Refresh.

Dead page. That's how much of a modern app is behaviour.

## Why does front-end exist when backends already do everything?

The backend can only send data. Something has to turn that data into
something a human can see and tap — and it has to run on *their* phone,
next to their eyes and thumbs.

If every click travelled to a server in Mumbai and back, the app would
feel dead.

**Front-end exists because the user is far away from the server.**

---

# Part 1b — Ten days in 1995  ·  10:20

In 1995, Netscape asked **Brendan Eich** to add a small scripting
language to their browser. He wrote the first version in about **ten
days**. It was meant for making text blink and validating forms.

It was called Mocha, then LiveScript. It shipped as **JavaScript**
because Java was the hot language that year and marketing wanted the
association.

**JavaScript has nothing to do with Java.** Same reason a car and a
carpet share three letters. You just translated a Java loop into JS —
that's a coincidence of syntax, not a family relationship.

Thirty years later, a language designed in ten days runs every website,
most mobile apps and a lot of servers.

## Which is exactly why it's weird

Run these:

```js
typeof null
// → 'object'    ... null is not an object.
```

That's a bug from the original ten days. It was never fixed, because
fixing it would break millions of existing websites.

```js
'5' + 3    // → '53'   (it glued them together)
'5' - 3    // → 2      (it did maths)
```

`+` means both "add" and "join text", so JavaScript guesses. **This one
will actually bite you** — everything typed into a form is text, so
`age + 1` gives you `"201"` instead of `21`.

```js
0 == ''          // → true   ?!
0 === ''         // → false  ← correct
```

## The two rules that come out of this

1. **Always use `===`, never `==`.** The two-equals version tries to be
   helpful and converts types behind your back.
2. **Convert form input to a number before doing maths:** `Number(value)`.

## The real lesson

JavaScript almost never breaks old code. That's why the warts survive —
and also why a website built in 2005 still loads today.

Every language has flaws. The professional skill isn't avoiding them,
it's knowing which ones bite and how to sidestep them.

---

# Part 2 — DevTools is your workshop  ·  10:35

`F12` opens it. Four tabs matter:

| Tab | What it's for |
|---|---|
| **Elements** | The live page. Edit it, the page changes instantly. |
| **Console** | Type JavaScript. See errors. |
| **Network** | Every file the page downloaded |
| **Sources** | The actual code the site shipped |

## Play with it

Open your **college website** and run these in the Console:

```js
document.designMode = 'on'          // the whole page becomes typeable
```
```js
document.body.style.fontFamily = 'Comic Sans MS'
```
```js
document.body.style.transform = 'rotate(180deg)'
```
```js
document.querySelectorAll('img').forEach(i => i.remove())
```

## Now the important part

Go to any shopping site. In **Elements**, find a price and change it
to ₹1.

**Have you bought it for one rupee?**

No. Put it in the cart — it charges the real price. The **server**
decides what things cost, not your browser.

Now **refresh**. Everything is back. Nothing you did ever left your
laptop.

> You can change anything you can see. You can't change anything that
> matters. The browser is a window, not the building.

## "So anyone can read Facebook's code?"

Yes. Open **Sources** on any big site. Some code is minified into `a`,
`b`, `c` — but plenty of sites ship source maps, so you'll see the
original TypeScript with real names and comments.

It doesn't matter, because:

1. **Only the client half ships.** The algorithm, the database, the
   business logic all live on the server. You're reading the shop
   window, not the warehouse.
2. **Copyright still applies.** You can read it. You can't ship it.

**The rule that follows from this:**

> Anyone can read your front-end code. Never put an API key or a
> password in it. Ever.

---

# Part 3 — The two array methods that matter  ·  10:43

A web page is just lists of things. Lists of posts, lists of links,
lists of dishes. So the job is mostly: **take a list, make another
list.**

## Set up — paste this into the console

Your Watch Later list. Add your own if you like.

```js
const watchLater = [
  { title: 'React in 100 Seconds',   mins: 2,   channel: 'Fireship' },
  { title: 'Full JavaScript Course', mins: 480, channel: 'freeCodeCamp' },
  { title: 'CSS Grid Explained',     mins: 24,  channel: 'Kevin Powell' },
  { title: 'System Design Basics',   mins: 65,  channel: 'ByteByteGo' },
  { title: 'Git for Beginners',      mins: 38,  channel: 'Traversy' },
];
```

## map — transforms

```js
watchLater.map(v => v.title)
// → ['React in 100 Seconds', 'Full JavaScript Course', ...]
```

Five in, five out. **Always the same length.**

```js
watchLater.map(v => `${v.title} — ${(v.mins / 60).toFixed(1)} hrs`)
```

## filter — chooses

```js
watchLater.filter(v => v.mins <= 30)
// → only the short ones
```

Five in, two out. **Never longer, often shorter.**

## Chain them — the real question

You have 30 minutes before your next class. What can you finish?

```js
watchLater
  .filter(v => v.mins <= 30)
  .map(v => v.title)
// → ['React in 100 Seconds', 'CSS Grid Explained']
```

Filter first, then transform what's left. **That is most of front-end.**

## You already know this

Here's the same thing in Java — the loop you've written a hundred times:

```java
List<String> result = new ArrayList<>();
for (Video v : watchLater) {
    if (v.mins <= 30) {
        result.add(v.title);
    }
}
```

Same three steps: go through the list, keep some, collect a field.

JavaScript just gives those three steps names. `filter` is the `if`.
`map` is the `add`. The `for` disappears because it's always the same.

**You're not learning a new idea. You're learning a shorter spelling.**

## Remember this

**`map` transforms. `filter` chooses.** That's it.

---

# Part 4 — What JavaScript is doing underneath  ·  11:03

## The call stack

Forget code for a minute.

You're filling a **job application form**. It asks for your roll number.

You don't remember it — it's on your **hall ticket**.
The hall ticket is in your **email**.

Now you're stuck three levels deep. And notice: you *cannot* type
anything into the form until you've opened the email. The form isn't
waiting politely — it's **blocked**.

You come back out in reverse: open email → read hall ticket → fill
form.

**The last thing you started is the first thing you finish.**

That pile of blocked work is the **call stack**. It is not a to-do
list of things waiting to start — it's what you are *inside of* right
now.

```
┌─────────────────┐
│ openEmail()     │ ← doing this now
├─────────────────┤
│ getHallTicket() │ ← blocked, waiting
├─────────────────┤
│ fillForm()      │ ← blocked, waiting
└─────────────────┘
```

In code, that's exactly this:

```js
function openEmail()     { return 'CS21B045'; }
function getHallTicket() { return openEmail(); }
function fillForm()      { console.log('Roll no:', getHallTicket()); }

fillForm();
```

## Overflow it

In the form example you eventually reached the bottom — the email had
the answer, so the stack unwound.

But you already know a situation where there is no bottom:

> To get a job, you need experience.
> To get experience, you need a job.

Run it:

```js
function getJob()        { return getExperience(); }
function getExperience() { return getJob(); }

getJob();
```

→ `RangeError: Maximum call stack size exceeded`

Each one blocks waiting for the other. Nothing ever returns, so nothing
ever comes off the pile. It grows until JavaScript runs out of room and
gives up.

**That's a stack overflow** — not "too much code", but work that never
reaches the bottom.

*(Yes — Stack Overflow, the website you'll live on, is named after
this error.)*

## Reading an error properly

```js
function three() { null.name; }
function two()   { three(); }
function one()   { two(); }
one();
```

The red text is a **stack trace**. Read it top to bottom: that's the
exact path your code took to break.

**Read the error before you paste it into AI.** Half the time it tells
you the answer.

## See it move

Reading about the stack is one thing. Watch it.

**Loupe** animates the call stack, the browser's Web APIs, the queue
and the console as your code runs.

**The form example** — press ▶ and watch the three functions pile up
and unwind:

```
http://latentflip.com/loupe/?code=ZnVuY3Rpb24gb3BlbkVtYWlsKCkgewogICAgcmV0dXJuICdDUzIxQjA0NSc7Cn0KCmZ1bmN0aW9uIGdldEhhbGxUaWNrZXQoKSB7CiAgICByZXR1cm4gb3BlbkVtYWlsKCk7Cn0KCmZ1bmN0aW9uIGZpbGxGb3JtKCkgewogICAgY29uc29sZS5sb2coJ1JvbGwgbm86ICcgKyBnZXRIYWxsVGlja2V0KCkpOwp9CgpmaWxsRm9ybSgpOwo%3D
```

**The 1, 3, 2 example** — watch the callback leave the stack, sit in
the queue, and only come back when the stack is empty:

```
http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJzEnKTsKCnNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkgewogICAgY29uc29sZS5sb2coJzInKTsKfSwgMjAwMCk7Cgpjb25zb2xlLmxvZygnMycpOwo%3D
```

*Note: Loupe is an old tool. It understands `setTimeout` and clicks,
but not `fetch` or `await` — don't paste those in, it'll break.*

## JavaScript has one thread

```js
function sleep(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}
sleep(5000);
```

Run it, then try to click something. **Nothing works.** The page is
frozen.

Java can open ten threads. JavaScript has exactly one. While that loop
runs, your browser can't do anything else.

## So how does anything ever work?

```js
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');
```

**Predict the output before you run it.**

It prints **1, 3, 2**. Even with a zero delay.

`setTimeout` isn't JavaScript — it's a browser feature. The browser
holds your callback and only runs it when the call stack is
**completely empty**. Zero means "as soon as possible", not "now".

## await

One sentence: **`await` means "wait here until it comes back."**

```js
async function getUser() {
  const res  = await fetch('https://api.github.com/users/torvalds');
  const data = await res.json();
  console.log(data.name, '-', data.public_repos, 'repos');
}

getUser();
```

Put your own GitHub username in.

## Think of the canteen counter

You order food. It takes five minutes.

- **Without `await`** — you stand at the counter and refuse to move.
  Nobody behind you gets served. That's the frozen page.
- **With `await`** — you take a token and step aside. The counter keeps
  serving. When your number is called, you come back and carry on.

**Same wait. One blocks everyone else, the other doesn't.**

That's all `await` does: it steps aside instead of blocking.

## Try it

```js
async function getUser() {
  console.log('2: asking github...');
  const res  = await fetch('https://api.github.com/users/torvalds');
  const data = await res.json();
  console.log('4: got it —', data.name);
}

console.log('1: start');
getUser();
console.log('3: page still working');
```

Guess the order first. It prints **1, 2, 3, 4**.

Line 3 printed *before* line 4 — the function stepped aside and let the
rest of the program keep going.

## Two rules

`await` only works inside a function marked `async`, and anything you
`await` is slow and comes from outside your program.

---

# Part 5 — Why React exists  ·  11:50

## First, feel the problem

Open **`feel-the-pain.html`** in your browser — plain HTML, no React.
Then open the same file in your editor and do three things:

1. Change "Masala Dosa" to your favourite dish — *easy*
2. **Add a fourth dish.** Copy a whole `<article>` block, paste it,
   change the name and price — *annoying*
3. **The canteen raises every price by ₹5.** Change all four —
   *now imagine eighty dishes*

Task 3 is the real job. Menus change. Prices change. Someone has to do
it every week without missing one.

Remember that feeling.

## Now look at the old way

Open **`vanilla-comparison.html`**. Same cart, no React. It works
perfectly.

Find `updateScreen()`. Count the manual updates:

```js
document.getElementById('cart-count').textContent = ...
document.getElementById('item-count').textContent = ...
document.getElementById('total').textContent      = ...
document.getElementById('empty-msg').style.display = ...
document.getElementById('footer').style.display    = ...
```

**Five updates. For one click.** Add a discount and it's six. Forget
one and your screen lies to the user.

React deletes that entire function. You change the data; the screen
follows.

> **UI = f(data)**

---

# Part 6 — Build it  ·  12:10  ·  AI off

**Five small files. One job each.** Open them in order — the
instructions are inside each file, right next to the code.

| Order | File | What you learn |
|---|---|---|
| — | `components/Header.jsx` | **Read this first.** Done for you — it's what a finished component looks like. |
| 1 | `components/MenuItem.jsx` | Props — one dish |
| 2 | `components/MenuList.jsx` | `map` + keys — the whole menu |
| 3 | `App.jsx` | `useState` — the cart |
| 4 | `components/CartFooter.jsx` | `reduce` — the total |
| 5 | `components/SearchBox.jsx` | Inputs — search |

Each file tells you what it does, what to write, and **how to know it
worked**. Follow them in order — 3 needs 1 and 2 done first.

**The app runs the whole time.** It starts full of grey `TODO`
placeholders and you replace them one at a time, so you always see
progress.

**Stuck more than 5 minutes?** Copy the matching file from
`solutions/finished/` and move on. Falling behind is the only way to
lose today.

## Notice what you just did

This morning AI gave you one file, several hundred lines, one giant
function.

You just built the same thing as **five files of about fifteen lines
each**, where every one has a single job.

That's not decoration. It's so that when the canteen asks for
breakfast next week, you know exactly which file to open.

---

# Which AI do I use?

**A browser tab. Not your editor.**

You're working in StackBlitz, which has no AI built in — and that's
fine. Copy-pasting between two tabs is slower on purpose: it forces you
to read what you're pasting.

All free, all in a browser, nothing to install:

| Tool | Where | Account |
|---|---|---|
| **Gemini** | gemini.google.com | your Google account — **easiest, use this** |
| **ChatGPT** | chatgpt.com | free signup |
| **Claude** | claude.ai | free signup |
| **Copilot** | copilot.microsoft.com | free |

Use Gemini unless you already have another — you're already signed into
Google, so there's nothing to set up.

**Offline AI?** Not realistically. Running a model on your own laptop
needs a big download and a strong machine. Not today.

**What about AI inside the editor?** That's how professionals work —
GitHub Copilot, Cursor, Claude Code. You'll see it at 2:05. But an
editor that writes the next line before you've thought of it is the
worst possible tool while you're still learning.

---

# Part 7 — Reviewing AI code  ·  1:45  ·  AI on

This is the skill you'll actually be hired for.

Open **`solutions/05-ai-review.jsx`**. It's a working cart with search,
written exactly the way AI writes it from a lazy prompt. It runs. It
looks finished.

**It has 5 bugs. Find 2 and you've done well.** 12 minutes, in pairs.
Don't scroll to the bottom.

## Don't just read it — break it

Reading alone won't find most of these. Real reviewers *use* the thing.

Try:
- typing in **lowercase**
- searching for something that **isn't on the menu**
- clicking **Undo** twice
- adding items, then **Clear**, and watching every number on screen

## The checklist — one bug per line, roughly

- Is anything **secret** hardcoded? *(look at the very top)*
- Is the same fact **stored twice**, so the two can drift apart?
- Does it **change** an array instead of making a new one?
- Is the list `key` something that **moves** when the list changes?
- Does it break on **capital letters**?
- What shows when there's **nothing to show**?

> Nobody will ask you to write a cart from scratch in an interview.
> They'll show you a file like this and ask what's wrong with it.

---

# Part 8 — Your own feature  ·  2:05  ·  AI on

Pick one. You already built search at checkpoint 5, so these go further:

- Veg-only toggle that works *together* with the search box
- Quantity +/− instead of Add
- Remove one item from the cart
- Sort by price, cheapest first
- Dark mode toggle
- "You saved ₹X" once the cart crosses ₹200

## How to prompt properly

Bad:

> make a search

Good:

> Add a search box to this React menu component. It should filter by
> dish name, be case-insensitive, and show "No dishes found" when
> nothing matches. Don't add any new dependencies. Here's my current
> code: [paste]

**Say what you want, the constraints, and the edge cases.**

Then run the checklist from Part 7 on whatever it gives you.

---

# After today  ·  2:45

## The 30 days that decide whether this mattered

| Week | What | Why |
|---|---|---|
| 1 | **TypeScript** | Most React jobs now assume it. Your biggest gap. |
| 2 | **Fetch + loading and error states** | Every real app. You only met `await` today. |
| 3 | **Next.js or React Router** | Almost nobody ships plain Vite at work. |
| 4 | **Rebuild this app from scratch, no tutorial** | The week that actually counts. |

Week 4 is the point. Everything before it is input.

## Getting hired

1. **Interviews changed.** They hand you AI-written code and ask what's
   wrong with it. You did that today — say so.
2. **A todo app is worth nothing.** AI makes fifty a minute. One
   deployed app with a README explaining a decision you made beats five
   tutorial clones.
3. **Say you used AI.** Hiding it reads as dishonest. *"I had AI draft
   it, then fixed the empty state it missed"* reads as senior.
4. **Commit history is a resume section.** Ten small clear commits beat
   one "initial commit".
5. **Put the live URL on your resume**, not just the repo. Recruiters
   don't clone anything.

## The question that decides everything

> *"Explain this line."*

If you can't, don't ship it.

---

## One last thing

You learned what a dog is from seeing about three dogs. AI needed
millions of pictures.

It has read everything ever written, so it's very good at what already
exists. But it has never stood in the canteen queue at 1pm and noticed
that the real bottleneck is the payment counter, not the kitchen.

**You have.**

New things come from someone who wanted something that didn't exist
yet — and who understood enough to build it.

This morning you couldn't read a single line of the app you generated.
Look at it now.

> You're starting out at the moment when one person can build what used
> to take a team. Hand the repetitive half to the machine. Keep the
> half that needed you.
