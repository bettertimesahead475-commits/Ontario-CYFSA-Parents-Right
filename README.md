# Ontario Parent Defense — Website Package
## Complete Deploy Guide: GitHub Pages · Netlify · Google Sites

---

## 📁 What's In This Package

| File | Description |
|------|-------------|
| `index.html` | Homepage — all tools, Charter quick reference |
| `analyzer.html` | AI Case Analyzer (Google Gemini — free) |
| `charter.html` | Charter Rights Guide (Sections 7, 8, 9, 10b, 15) |
| `cyfsa.html` | CYFSA 2017 Law Reference |
| `emergency.html` | Emergency Removal Protocol — 5-day plan |
| `evidence.html` | Evidence File Builder + PDF export |
| `lawyer.html` | Find a Lawyer — Legal Aid, referrals, questions |
| `shared.css` | Shared styles (used by all pages) |
| `shared.js` | Shared header/footer/navigation (used by all pages) |

---

## 🚀 OPTION 1: GitHub Pages (Recommended — Free)

### Step 1: Create GitHub Account
Go to [github.com](https://github.com) and sign up for a free account.

### Step 2: Create a New Repository
1. Click the **"+"** button → **"New repository"**
2. Name it: `ontario-parent-defense` (or anything you like)
3. Set it to **Public**
4. Click **"Create repository"**

### Step 3: Upload All Files
1. On your new repository page, click **"uploading an existing file"**
2. Drag **all 9 files** from this folder into the upload area:
   - index.html, analyzer.html, charter.html, cyfsa.html
   - emergency.html, evidence.html, lawyer.html
   - shared.css, shared.js
3. Scroll down and click **"Commit changes"**

### Step 4: Enable GitHub Pages
1. Go to **Settings** (tab at the top of your repository)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Under **"Branch"**, select **"main"** and **"/(root)"**
5. Click **Save**

### Step 5: Your Site is Live!
- Wait 1–3 minutes
- Your site will be at: `https://YOUR-USERNAME.github.io/ontario-parent-defense/`
- Share this URL anywhere!

**Cost: $0 forever. No credit card needed.**

---

## 🚀 OPTION 2: Netlify Drop (Fastest — 60 Seconds)

### Step 1: Go to Netlify Drop
Open [app.netlify.com/drop](https://app.netlify.com/drop) in your browser.
No account needed for the first deploy.

### Step 2: Drag Your Folder
Select ALL the files in this package folder and drag them into the Netlify Drop zone.

### Step 3: Done!
Netlify gives you an instant URL like `https://amazing-name-123.netlify.app`

### Optional: Get a Custom URL
Create a free Netlify account to:
- Change the URL to something memorable
- Connect a custom domain (e.g. ontarioparentdefense.ca)

**Cost: $0 forever on the free plan.**

---

## 🌐 OPTION 3: Google Sites Embed

Google Sites cannot host HTML files directly, but you can **embed** your site inside a Google Site using an iframe — after hosting it on GitHub Pages or Netlify first.

### Step 1: Host on GitHub Pages or Netlify First
Follow Option 1 or Option 2 above to get your live URL.

### Step 2: Open Google Sites
Go to [sites.google.com](https://sites.google.com) and create a new site.

### Step 3: Add an Embed Widget
1. Click **Insert** → **Embed**
2. Click **"Embed code"** tab
3. Paste this code (replace YOUR-URL with your actual URL):

```html
<iframe 
  src="https://YOUR-USERNAME.github.io/ontario-parent-defense/"
  width="100%" 
  height="800" 
  frameborder="0"
  style="border:none;width:100%;min-height:800px"
  allow="clipboard-write"
></iframe>
```

4. Click **Insert**

### Step 4: Publish
Click **Publish** in Google Sites. The embedded site will appear inside your Google Site page.

**Note:** For best results, embed each page separately on different Google Site pages:
- Home page → embed `index.html`
- AI Analyzer page → embed `analyzer.html`
- Emergency page → embed `emergency.html`
- etc.

---

## 🤖 Setting Up the Free AI Analyzer

The AI Case Analyzer uses **Google Gemini** — completely free, no credit card needed.

### Get Your Free API Key (60 seconds):
1. Go to [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Sign in with a Google account
3. Click **"Create API Key"**
4. Copy the key (starts with `AIza...`)
5. Open the Analyzer page, paste the key, click Connect

### Free Tier Limits:
- 15 requests per minute
- 1,500 requests per day
- No daily cost
- No credit card required

This is more than enough for a public advocacy site.

---

## 🔒 Privacy & Security Notes

- All user data (evidence files, case details) stays in the user's browser only
- Nothing is sent to any server except the AI API when analyzing
- The Gemini API call sends only what the user explicitly types/uploads
- No tracking, no analytics, no data collection
- Safe to use for sensitive legal matters

---

## 📞 Key Numbers (Already Built Into Every Page)

- **Legal Aid Ontario:** 1-800-668-8258 (free, 24/7)
- **Lawyer Referral Service:** 1-855-947-5255 (free 30-min consult)
- **Pro Bono Ontario:** 1-855-255-9461

---

## 🛠 Customization

All pages share `shared.css` and `shared.js`. To make changes:

- **Change colors:** Edit the `:root {}` variables in `shared.css`
- **Add a page:** Create a new `.html` file, include `shared.css` and `shared.js`, call `OPD.init('yourpage')`, and add your page to the `PAGES` array in `shared.js`
- **Change navigation:** Edit the `PAGES` array in `shared.js`
- **Change footer phone numbers:** Edit `buildFooter()` in `shared.js`

---

## ⚠️ Legal Disclaimer

This website provides general legal information based on Ontario law (CYFSA 2017, Canadian Charter of Rights and Freedoms, Ontario Human Rights Code). It is not legal advice and does not create a lawyer-client relationship. Always consult a qualified Ontario family law lawyer. Legal Aid Ontario: 1-800-668-8258.

---

*Built with Ontario Parent Defense · © 2026*

---

## 🆕 New Page Added: rights.html — Know Your Rights

| File | Description |
|------|-------------|
| `rights.html` | The traps CAS uses · Voluntary agreement trap · 30-day appeal window · Court order conditions · Complete rights table with CYFSA sections · What to say at the door (word for word) · Never/always checklist |

This is the most important page on the site. It covers:
- The voluntary agreement trap (signing = admitting their claims)
- Court order condition challenges
- Consenting to a protection finding and what it means forever
- CAS interviewing your child at school
- Everything you say is documented
- The 30-day appeal window nobody tells you about
- Your right to your full CAS file
- Poverty is not neglect (CYFSA s.74(2)(c))
- Kinship placement demand rights
- Motion to change orders when circumstances improve
- Complete table of 18 legal rights with exact CYFSA sections
- Word-for-word scripts to say to CAS at the door
- Interactive checklist for when CAS knocks
