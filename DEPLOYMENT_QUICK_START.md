# Quick Start Deployment Guide - Hostinger

This is a condensed version of the full deployment guide. For detailed instructions, see `HOSTINGER_DEPLOYMENT_GUIDE.md`.

## 🚀 Quick Deployment Steps

### 1. Server Setup (SSH into your Hostinger VPS)

```bash
# Connect to server
ssh root@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 and Nginx
sudo npm install -g pm2
sudo apt install nginx certbot python3-certbot-nginx -y
```

### 2. Deploy Application

```bash
# Create app directory
sudo mkdir -p /var/www/webimot
sudo chown -R $USER:$USER /var/www/webimot
cd /var/www/webimot

# Upload your files (via SCP, Git, or FTP)
# After files are uploaded:

# Install dependencies and build
npm install --production
npm run build
```

### 3. Configure Environment Variables

```bash
# Create .env file
nano .env
```

Paste this (update with your values):
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

Save: `Ctrl+X`, then `Y`, then `Enter`

```bash
chmod 600 .env
```

### 4. Start Application with PM2

```bash
# Create logs directory
mkdir -p logs

# Copy ecosystem.config.js to server (or create it)
# Start app
pm2 start ecosystem.config.js

# Save PM2 config
pm2 save
pm2 startup
# Follow the instructions it outputs
```

### 5. Configure Nginx

```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/webimot
```

Paste this (replace `yourdomain.com` with your domain):
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

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
}
```

Save and exit, then:
```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/webimot /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test and restart
sudo nginx -t
sudo systemctl restart nginx
```

### 6. Configure Firewall

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable
```

### 7. Set Up SSL (HTTPS)

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts to get your free SSL certificate.

### 8. Configure DNS in Hostinger

Go to Hostinger Control Panel → Domains → DNS Management:

**A Record:**
- Name: `@`
- Value: `your-server-ip`
- TTL: `3600`

**A Record for www:**
- Name: `www`
- Value: `your-server-ip`
- TTL: `3600`

Wait 5-10 minutes for DNS to propagate, then test your website!

---

## ✅ Verify Everything Works

1. Visit `https://yourdomain.com`
2. Test contact form (check `info@webimot.com` for email)
3. Test booking form (check `info@webimot.com` for email)
4. Check Google Analytics Realtime reports

---

## 🔄 For Updates

```bash
cd /var/www/webimot
# Pull latest code or upload new files
npm run build
pm2 restart webimot
pm2 logs webimot
```

---

## 🐛 Quick Troubleshooting

**Website not loading?**
```bash
pm2 status
pm2 logs webimot
sudo systemctl status nginx
```

**502 Bad Gateway?**
```bash
pm2 restart webimot
sudo systemctl restart nginx
```

**Check if app is running:**
```bash
sudo netstat -tulpn | grep :3000
```

---

For detailed instructions, see `HOSTINGER_DEPLOYMENT_GUIDE.md` 📚

