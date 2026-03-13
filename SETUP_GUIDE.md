# Setup Guide - Forms & Google Analytics

## 📧 Part 1: Make Forms Work (Email Notifications)

For the booking and contact forms to send emails, you need to provide **SMTP credentials**.

### Option 1: Gmail (Easiest - Recommended)

**What I need from you:**

1. **Your Gmail address**
   - Example: `yourname@gmail.com`

2. **Gmail App Password** (not your regular password)
   - How to get it:
     - Go to: https://myaccount.google.com/
     - Enable 2-Factor Authentication (if not already enabled)
     - Go to: https://myaccount.google.com/apppasswords
     - Create an app password for "Mail"
     - Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

**Once you provide these, I'll add them to your `.env` file:**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourname@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
```

### Option 2: Other Email Providers

**For other providers (Outlook, SendGrid, etc.), provide:**

1. **SMTP Host** (e.g., `smtp.outlook.com`, `smtp.sendgrid.net`)
2. **SMTP Port** (usually `587` or `465`)
3. **SMTP Secure** (`true` for port 465, `false` for port 587)
4. **SMTP Username** (your email or API username)
5. **SMTP Password** (your password or API key)

### Where Emails Are Sent

Currently, emails are sent to: **info@webimot.com**

If you want to change this, let me know the email address.

---

## 📊 Part 2: Activate Google Analytics

To track visitors and conversions, you need a **Google Analytics 4 (GA4) Measurement ID**.

### Step 1: Create Google Analytics Account (If you don't have one)

1. Go to: https://analytics.google.com/
2. Click "Start measuring"
3. Create an account (name it "Webimot" or your company name)
4. Create a property (name it "Webimot Website")
5. Select your industry and time zone
6. Accept terms and conditions

### Step 2: Get Your Measurement ID

1. In your GA4 property, go to **Admin** (gear icon) → **Data Streams**
2. Click on your web stream (or create one if you don't have it)
3. You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
   - Example: `G-ABC123XYZ4`

### Step 3: Provide the ID to Me

**Just provide me the Measurement ID:**
- Format: `G-XXXXXXXXXX`
- Example: `G-ABC123XYZ4`

I'll add it to your `.env` file:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### What Gets Tracked Automatically:

✅ **Page views** - Every page visit
✅ **Form submissions** - Booking and contact forms
✅ **Navigation** - When users click links
✅ **Time on page** - How long users stay
✅ **Bounce rate** - Single-page sessions
✅ **Conversion events** - Form submissions marked as conversions

---

## 🔐 Part 3: How to Provide This Information

### Option A: Tell Me Directly
Just provide:
- **For Forms**: Your Gmail address and app password (or SMTP details)
- **For Analytics**: Your GA4 Measurement ID (`G-XXXXXXXXXX`)

### Option B: Create .env File Yourself
I've created a `.env.example` file. You can:
1. Copy `.env.example` to `.env`
2. Fill in the values
3. Never commit `.env` to git (it's already in .gitignore)

---

## 📝 Summary - What I Need

### To Make Forms Work:
- [ ] Gmail address: `yourname@gmail.com`
- [ ] Gmail App Password: `xxxx xxxx xxxx xxxx`
- [ ] (Optional) Different email to receive leads (currently: info@webimot.com)

### To Activate Google Analytics:
- [ ] Google Analytics 4 Measurement ID: `G-XXXXXXXXXX`

---

## ⚡ Quick Setup Instructions

### If Using Gmail:

1. **Get App Password:**
   ```
   → Go to: https://myaccount.google.com/apppasswords
   → Create password for "Mail"
   → Copy the password
   ```

2. **Get GA4 ID:**
   ```
   → Go to: https://analytics.google.com/
   → Admin → Data Streams → Web Stream
   → Copy Measurement ID (G-XXXXXXXXXX)
   ```

3. **Provide to me:**
   - Your Gmail address
   - Your Gmail app password
   - Your GA4 Measurement ID

**I'll configure everything for you!**

---

## 🆘 Need Help?

**For Gmail Setup:**
- Tutorial: https://support.google.com/accounts/answer/185833
- App Passwords: https://myaccount.google.com/apppasswords

**For Google Analytics:**
- GA4 Setup: https://support.google.com/analytics/answer/9304153
- Find Measurement ID: https://support.google.com/analytics/answer/9304153#find-G-ID

---

**Once you provide this information, I'll configure everything and your forms + analytics will be fully functional!**

