# Deployment Checklist - Quick Reference

Use this checklist to ensure everything is configured correctly before and after deployment.

## 📋 Pre-Deployment Checklist

### Code Preparation
- [ ] All code changes committed and tested locally
- [ ] `.env` file created with production values
- [ ] Google Analytics Measurement ID verified (`G-NZ6WXSQSJK`)
- [ ] SMTP credentials verified (Gmail app password correct)
- [ ] Lead notification email set (`info@webimot.com`)
- [ ] Test build locally: `npm run build` (should complete without errors)
- [ ] Verify `dist/public` and `dist/index.js` are created after build

### Server Requirements
- [ ] Hostinger VPS or Cloud Hosting account active
- [ ] SSH access to server confirmed
- [ ] Domain name registered and configured with Hostinger
- [ ] Server IP address noted

### Documentation
- [ ] Read `HOSTINGER_DEPLOYMENT_GUIDE.md`
- [ ] Understand PM2 process manager
- [ ] Understand Nginx reverse proxy setup

---

## 🚀 Deployment Checklist

### Server Setup
- [ ] Connected to server via SSH
- [ ] System updated: `sudo apt update && sudo apt upgrade`
- [ ] Node.js installed (v18+): `node --version`
- [ ] PM2 installed globally: `pm2 --version`
- [ ] Git installed (if using Git): `git --version`
- [ ] Nginx installed: `nginx -v`

### Application Deployment
- [ ] Created app directory: `/var/www/webimot`
- [ ] Uploaded all application files
- [ ] `.env` file created with production values
- [ ] `.env` file permissions set: `chmod 600 .env`
- [ ] Dependencies installed: `npm install --production`
- [ ] Application built: `npm run build`
- [ ] Build successful (check `dist/` folder exists)

### PM2 Configuration
- [ ] `ecosystem.config.js` created or copied
- [ ] Logs directory created: `mkdir -p logs`
- [ ] Application started: `pm2 start ecosystem.config.js`
- [ ] Application status checked: `pm2 status` (should show "online")
- [ ] PM2 saved: `pm2 save`
- [ ] PM2 startup configured: `pm2 startup` (command executed)

### Nginx Configuration
- [ ] Nginx config file created: `/etc/nginx/sites-available/webimot`
- [ ] Domain name set in Nginx config
- [ ] Port 3000 configured in proxy_pass
- [ ] Symlink created: `sudo ln -s /etc/nginx/sites-available/webimot /etc/nginx/sites-enabled/`
- [ ] Default Nginx site removed (optional)
- [ ] Nginx config tested: `sudo nginx -t` (should pass)
- [ ] Nginx restarted: `sudo systemctl restart nginx`

### Firewall Configuration
- [ ] HTTP (port 80) allowed: `sudo ufw allow 80/tcp`
- [ ] HTTPS (port 443) allowed: `sudo ufw allow 443/tcp`
- [ ] SSH (port 22) allowed: `sudo ufw allow 22/tcp`
- [ ] Firewall enabled: `sudo ufw enable`
- [ ] Firewall status checked: `sudo ufw status`

### SSL Certificate
- [ ] Certbot installed: `sudo apt install certbot python3-certbot-nginx`
- [ ] SSL certificate obtained: `sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com`
- [ ] Auto-renewal tested: `sudo certbot renew --dry-run`

### DNS Configuration
- [ ] DNS A record for main domain (@) pointing to server IP
- [ ] DNS A record for www subdomain pointing to server IP
- [ ] DNS propagation verified (waited a few minutes)
- [ ] DNS lookup checked: `dig yourdomain.com` or `nslookup yourdomain.com`

---

## ✅ Post-Deployment Verification

### Website Accessibility
- [ ] Website loads at `https://yourdomain.com`
- [ ] Website loads at `https://www.yourdomain.com`
- [ ] HTTPS working (green padlock in browser)
- [ ] HTTP redirects to HTTPS automatically

### Pages and Navigation
- [ ] Home page loads correctly
- [ ] Services page loads correctly
- [ ] Contact page loads correctly
- [ ] About page loads correctly
- [ ] Blog page loads correctly (if applicable)
- [ ] All navigation links work
- [ ] Mobile responsive design working
- [ ] No console errors in browser

### Forms Functionality
- [ ] Contact form submits successfully
- [ ] Booking modal form submits successfully
- [ ] Form validation working (required fields)
- [ ] Success messages display correctly
- [ ] Error messages display correctly
- [ ] Email received at `info@webimot.com` from contact form
- [ ] Email received at `info@webimot.com` from booking form
- [ ] Email content is correct (name, email, phone, message/service)

### Google Analytics
- [ ] Google Analytics ID configured: `VITE_GA_MEASUREMENT_ID=G-NZ6WXSQSJK`
- [ ] GA script loads (check browser Network tab for `googletagmanager.com`)
- [ ] Page views tracked in GA4 Realtime reports
- [ ] Form submissions tracked (check GA4 Events section)
- [ ] No console errors related to Google Analytics

### Server Health
- [ ] PM2 status shows app as "online"
- [ ] PM2 logs show no errors: `pm2 logs webimot`
- [ ] Nginx status is active: `sudo systemctl status nginx`
- [ ] Server resources are healthy (check with `htop` or `df -h`)
- [ ] Application restarts automatically if it crashes (test by killing process)

### Performance
- [ ] Page load time is acceptable (< 3 seconds)
- [ ] Images load correctly
- [ ] Fonts load correctly (Google Fonts)
- [ ] No 404 errors for assets
- [ ] No broken links

### Security
- [ ] SSL certificate valid and not expired
- [ ] Security headers present (check with https://securityheaders.com)
- [ ] Rate limiting working (test by submitting form multiple times quickly)
- [ ] Input sanitization working (try XSS attempts in forms)
- [ ] `.env` file is not publicly accessible

---

## 🔄 Update Process Checklist

When you need to update your website:

- [ ] Backup current version (optional but recommended)
- [ ] Pull latest code or upload new files
- [ ] Update dependencies if needed: `npm install --production`
- [ ] Rebuild application: `npm run build`
- [ ] Verify build successful
- [ ] Restart application: `pm2 restart webimot`
- [ ] Check PM2 status: `pm2 status`
- [ ] View logs for errors: `pm2 logs webimot`
- [ ] Test website in browser
- [ ] Test form submissions
- [ ] Verify Google Analytics still working

---

## 🐛 Troubleshooting Checklist

If something isn't working:

- [ ] Check PM2 status: `pm2 status`
- [ ] Check PM2 logs: `pm2 logs webimot --lines 100`
- [ ] Check Nginx status: `sudo systemctl status nginx`
- [ ] Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- [ ] Check if app is listening on port 3000: `sudo netstat -tulpn | grep :3000`
- [ ] Check firewall: `sudo ufw status`
- [ ] Verify environment variables: `cat .env`
- [ ] Check SSL certificate: `sudo certbot certificates`
- [ ] Verify DNS: `dig yourdomain.com`
- [ ] Check browser console for errors
- [ ] Check Network tab for failed requests

---

## 📞 Quick Reference Commands

```bash
# Application
pm2 status
pm2 restart webimot
pm2 logs webimot
pm2 monit

# Nginx
sudo systemctl restart nginx
sudo nginx -t
sudo tail -f /var/log/nginx/error.log

# Rebuild
cd /var/www/webimot && npm run build && pm2 restart webimot

# SSL
sudo certbot certificates
sudo certbot renew

# Server
htop
df -h
sudo systemctl status nginx
```

---

**Keep this checklist handy during deployment!** ✅

