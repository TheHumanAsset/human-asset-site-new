
# The Human Asset Consultancy Website

## 📁 File Creation Checklist
Make sure you have created these files in your folder using a text editor (like VS Code):

- [ ] `index.html` (Root)
- [ ] `index.tsx` (Root)
- [ ] `App.tsx` (Root)
- [ ] `constants.tsx` (Root)
- [ ] `types.ts` (Root)
- [ ] `metadata.json` (Root)
- [ ] `package.json` (Root)
- [ ] `.gitignore` (Root)
- [ ] `components/Navbar.tsx` (In subfolder)
- [ ] `components/ArticleCard.tsx` (In subfolder)
- [ ] `components/BookingModal.tsx` (In subfolder)

## 🚀 How to Publish

### Part 1: GitHub
1. Go to [GitHub.com](https://github.com) and log in.
2. Click **New Repository**. Name it `human-asset-site`.
3. Download [GitHub Desktop](https://desktop.github.com/).
4. Open GitHub Desktop, choose **"Add Existing Repository from Hard Drive"** and select your folder.
5. Click **Commit to main** and then **Push origin**.

### Part 2: Vercel (The Live Site)
1. Go to [Vercel.com](https://vercel.com) and sign up with GitHub.
2. Click **Add New** > **Project**.
3. Import your `human-asset-site` repository.
4. **Environment Variables:** Add `API_KEY` and your Gemini Key.
5. Click **Deploy**.
