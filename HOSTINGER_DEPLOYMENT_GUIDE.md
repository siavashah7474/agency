# Hostinger Deployment Guide - Complete Step-by-Step Instructions

This guide will help you deploy your Webimot website to Hostinger with your real domain.

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ Hostinger account (VPS or Cloud Hosting recommended for Node.js)
- ✅ Domain name configured with Hostinger
- ✅ SSH access to your Hostinger server
- ✅ Basic knowledge of terminal/command line

---

## 🎯 Step 1: Choose Your Hosting Plan

**Important**: Your website is a Node.js application, so you need:

### Option A: VPS Hosting (Recommended) ⭐
- Full control over the server
- Can install Node.js and run your app
- Better performance
- More flexible

### Option B: Cloud Hosting
- Similar to VPS
- Managed environment
- Good performance

### ⚠️ Shared Hosting Won't Work
- Most shared hosting plans don't support Node.js
- You need server access for this application

---

## 🚀 Step 2: Prepare Your Code for Deployment

### 2.1 Update Production Build Script (if needed)

Your build script is already configured correctly in `package.json`:
```json
"build": "vite build && esbuild server/index-prod.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/index.js",
"start": "NODE_ENV=production node dist/index.js"
```

### 2.2 Create `.env.production` File

Create a production environment file with your settings:

```bash
# Copy .env to .env.production and update values
cp .env .env.production
```

**Required Environment Variables for Production:**
```env
# SMTP Configuration (for email notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=siavash.ah9595@gmail.com
SMTP_PASS=wtzosojbszszhs
LEAD_NOTIFICATION_EMAIL=info@webimot.com

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-NZ6WXSQSJK

# Server Configuration
NODE_ENV=production
PORT=3000
```

**⚠️ IMPORTANT**: Never commit `.env` files to Git! They contain sensitive information.

---

## 🔧 Step 3: Set Up Your Hostinger Server

### 3.1 Connect to Your Server via SSH

```bash
ssh root@your-server-ip
# or
ssh your-username@your-server-ip
```

Replace `your-server-ip` with your Hostinger VPS IP address.

### 3.2 Install Required Software

**Update system:**
```bash
sudo apt update && sudo apt upgrade -y
```

**Install Node.js (version 18 or higher):**
```bash
# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version  # Should show v18.x or higher
npm --version
```

**Install PM2 (Process Manager):**
```bash
sudo npm install -g pm2
```

PM2 will keep your Node.js application running 24/7 and restart it if it crashes.

**Install Git (if not already installed):**
```bash
sudo apt install git -y
```

**Install Nginx (Reverse Proxy):**
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

## 📦 Step 4: Deploy Your Application

### 4.1 Create Application Directory

```bash
# Create directory for your app
sudo mkdir -p /var/www/webimot
sudo chown -R $USER:$USER /var/www/webimot
cd /var/www/webimot
```

### 4.2 Upload Your Code

**Option A: Using Git (Recommended)**

```bash
# Initialize git repository (if using Git)
git clone https://github.com/your-username/your-repo.git .
# OR if not using Git, use one of the methods below
```

**Option B: Using SCP (Secure Copy)**

From your local machine:
```bash
# Create a deployment package
cd /Users/siavash/Downloads/DigitalMarketingSite
tar -czf webimot-deploy.tar.gz --exclude=node_modules --exclude=.git --exclude=dist .

# Upload to server
scp webimot-deploy.tar.gz root@your-server-ip:/var/www/webimot/

# On server, extract
cd /var/www/webimot
tar -xzf webimot-deploy.tar.gz
rm webimot-deploy.tar.gz
```

**Option C: Using FTP/SFTP (FileZilla)**
1. Connect to your server using FileZilla
2. Upload all files except `node_modules`, `.git`, and `dist`
3. Use SFTP for secure transfer

### 4.3 Install Dependencies and Build

```bash
cd /var/www/webimot

# Install dependencies
npm install --production

# Build the application
npm run build
```

This will:
- Build your React frontend → `dist/public/`
- Bundle your Express server → `dist/index.js`

### 4.4 Create Production `.env` File

```bash
# Create .env file with your production settings
nano .env
```

Paste your production environment variables:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=siavash.ah9595@gmail.com
SMTP_PASS=wtzosojbszszhs
LEAD_NOTIFICATION_EMAIL=info@webimot.com
VITE_GA_MEASUREMENT_ID=G-NZ6WXSQSJK
NODE_ENV=production
PORT=3000
```

Save and exit (Ctrl+X, then Y, then Enter).

**⚠️ SECURITY**: Make sure `.env` file has proper permissions:
```bash
chmod 600 .env
```

---

## ⚙️ Step 5: Configure PM2 to Run Your App

### 5.1 Create PM2 Ecosystem File

```bash
nano ecosystem.config.js
```

Add this configuration:
```javascript
module.exports = {
  apps: [{
    name: 'webimot',
    script: 'dist/index.js',
    cwd: '/var/www/webimot',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/www/webimot/logs/err.log',
    out_file: '/var/www/webimot/logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};
```

Create logs directory:
```bash
mkdir -p logs
```

### 5.2 Start Your Application with PM2

```bash
# Start the application
pm2 start ecosystem.config.js

# Save PM2 configuration (runs on server restart)
pm2 save

# Set PM2 to start on server reboot
pm2 startup
# Follow the instructions it outputs (usually involves copying a command)
```

### 5.3 Check Application Status

```bash
# Check if app is running
pm2 status

# View logs
pm2 logs webimot

# Monitor in real-time
pm2 monit
```

Your app should now be running on `http://your-server-ip:3000`

---

## 🌐 Step 6: Configure Nginx as Reverse Proxy

Nginx will serve your domain and forward requests to your Node.js app.

### 6.1 Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/webimot
```

Add this configuration (replace `yourdomain.com` with your actual domain):
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS (after SSL setup)
    # return 301 https://$server_name$request_uri;

    # For now, forward to Node.js app
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Increase body size limit for file uploads (if needed)
    client_max_body_size 10M;
}
```

Save and exit.

### 6.2 Enable the Site

```bash
# Create symlink to enable site
sudo ln -s /etc/nginx/sites-available/webimot /etc/nginx/sites-enabled/

# Remove default Nginx site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 6.3 Configure Firewall

```bash
# Allow HTTP (port 80)
sudo ufw allow 80/tcp

# Allow HTTPS (port 443)
sudo ufw allow 443/tcp

# Allow SSH (port 22)
sudo ufw allow 22/tcp

# Enable firewall
sudo ufw enable
```

---

## 🔒 Step 7: Set Up SSL Certificate (HTTPS)

### 7.1 Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 7.2 Obtain SSL Certificate

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts:
- Enter your email address
- Agree to terms of service
- Choose whether to redirect HTTP to HTTPS (recommended: Yes)

### 7.3 Auto-renewal (Already Configured)

Certbot automatically sets up auto-renewal. Test it:
```bash
sudo certbot renew --dry-run
```

Your site should now be accessible at `https://yourdomain.com` ✅

---

## 🌍 Step 8: Configure Domain DNS

### 8.1 In Hostinger Control Panel

1. Log into your Hostinger account
2. Go to **Domains** → **DNS / Name Servers**
3. Find your domain and click **Manage**
4. Update DNS records:

**A Record (for main domain):**
```
Type: A
Name: @
Value: your-server-ip
TTL: 3600
```

**A Record (for www subdomain):**
```
Type: A
Name: www
Value: your-server-ip
TTL: 3600
```

### 8.2 Verify DNS Propagation

Wait a few minutes, then check:
```bash
# Check if DNS is pointing to your server
dig yourdomain.com
# or
nslookup yourdomain.com
```

---

## 🔄 Step 9: Update Your Application

### 9.1 For Future Updates

When you need to update your website:

```bash
# SSH into your server
ssh root@your-server-ip

# Navigate to app directory
cd /var/www/webimot

# Pull latest changes (if using Git)
git pull origin main

# OR upload new files via SCP/FTP

# Rebuild the application
npm run build

# Restart the app with PM2
pm2 restart webimot

# Check status
pm2 status
pm2 logs webimot
```

---

## ✅ Step 10: Verify Everything Works

### 10.1 Check Your Website

1. Visit `https://yourdomain.com` in your browser
2. Test all pages (Home, Services, Contact, etc.)
3. Submit the contact form → Check `info@webimot.com` for email
4. Submit the booking form → Check `info@webimot.com` for email
5. Check browser console for Google Analytics (should see requests to Google Analytics)

### 10.2 Check Server Logs

```bash
# PM2 logs
pm2 logs webimot

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 10.3 Test Email Functionality

Submit a test form on your website and verify:
- Email arrives at `info@webimot.com`
- Email contains correct form data

### 10.4 Verify Google Analytics

1. Go to https://analytics.google.com/
2. Select your property
3. Go to **Reports** → **Realtime**
4. Visit your website
5. You should see your visit appear within seconds

---

## 🛠️ Troubleshooting

### Issue: Website Not Loading

**Check PM2:**
```bash
pm2 status
pm2 logs webimot
```

**Check Nginx:**
```bash
sudo systemctl status nginx
sudo nginx -t
```

**Check Port:**
```bash
sudo netstat -tulpn | grep :3000
# Should show your Node.js app listening
```

### Issue: 502 Bad Gateway

- Check if Node.js app is running: `pm2 status`
- Check if app is listening on port 3000
- Check Nginx configuration: `sudo nginx -t`
- Check firewall: `sudo ufw status`

### Issue: Emails Not Sending

- Verify SMTP credentials in `.env` file
- Check Gmail app password is correct
- Check PM2 logs for errors: `pm2 logs webimot`
- Test SMTP connection manually (may need to allow "less secure apps" or use OAuth2)

### Issue: Google Analytics Not Working

- Verify `VITE_GA_MEASUREMENT_ID` is set in `.env`
- Rebuild application: `npm run build && pm2 restart webimot`
- Check browser console for errors
- Verify CSP headers allow Google Analytics

### Issue: SSL Certificate Not Working

- Check certificate: `sudo certbot certificates`
- Renew if needed: `sudo certbot renew`
- Check Nginx SSL configuration

---

## 📊 Monitoring & Maintenance

### Monitor Your Application

```bash
# View PM2 dashboard
pm2 monit

# View logs
pm2 logs webimot --lines 100

# Check resource usage
pm2 status
```

### Regular Maintenance

**Weekly:**
- Check PM2 logs for errors
- Verify website is accessible
- Test form submissions

**Monthly:**
- Update Node.js packages: `npm update`
- Check SSL certificate expiry: `sudo certbot certificates`
- Review server resource usage: `htop` or `df -h`

**Security:**
- Keep system updated: `sudo apt update && sudo apt upgrade`
- Keep Node.js updated
- Regularly check for security vulnerabilities: `npm audit`

---

## 🔐 Security Best Practices

1. **Firewall**: Keep UFW enabled with minimal ports open
2. **SSH**: Use SSH keys instead of passwords
3. **Updates**: Regularly update your server
4. **Backups**: Set up regular backups of your application
5. **Environment Variables**: Never commit `.env` files
6. **HTTPS**: Always use SSL/HTTPS (configured with Certbot)
7. **Rate Limiting**: Already configured in your Express app ✅

---

## 📝 Quick Reference Commands

```bash
# Start app
pm2 start ecosystem.config.js

# Stop app
pm2 stop webimot

# Restart app
pm2 restart webimot

# View logs
pm2 logs webimot

# Check status
pm2 status

# Rebuild after code changes
cd /var/www/webimot && npm run build && pm2 restart webimot

# Nginx commands
sudo systemctl restart nginx
sudo nginx -t

# SSL renewal
sudo certbot renew
```

---

## 🎉 Success Checklist

- [ ] Server set up with Node.js and PM2
- [ ] Application deployed and built
- [ ] Environment variables configured
- [ ] PM2 running your application
- [ ] Nginx configured as reverse proxy
- [ ] SSL certificate installed (HTTPS)
- [ ] Domain DNS configured
- [ ] Website accessible at https://yourdomain.com
- [ ] Contact form sending emails
- [ ] Booking form sending emails
- [ ] Google Analytics tracking active
- [ ] All pages loading correctly
- [ ] Mobile responsive design working

---

**Need Help?** Check the troubleshooting section or contact Hostinger support for server-related issues.

**Your website is now live! 🚀**

