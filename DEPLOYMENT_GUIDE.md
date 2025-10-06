# Deployment Guide - Fixing 404 Errors on Page Refresh

## The Problem
When you refresh a page in a Single Page Application (SPA), you get a 404 error because the server doesn't know how to handle client-side routes.

## The Solution
You need to configure your server to serve `index.html` for all routes that don't match static files.

## Platform-Specific Solutions

### 1. Vercel (Recommended)
If you're deploying to Vercel, the `vercel.json` file is already configured:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Steps:**
1. Make sure `vercel.json` is in your project root
2. Deploy to Vercel
3. The routing will work automatically

### 2. Netlify
If you're deploying to Netlify, the `public/_redirects` file is already configured:

```
/*    /index.html   200
```

**Steps:**
1. Make sure `public/_redirects` is in your project
2. Deploy to Netlify
3. The routing will work automatically

### 3. Apache Server
If you're using Apache, use the `apache.htaccess` file:

**Steps:**
1. Rename `apache.htaccess` to `.htaccess`
2. Place it in your public directory
3. Make sure mod_rewrite is enabled

### 4. Nginx Server
If you're using Nginx, use the `nginx.conf` configuration:

**Steps:**
1. Add the configuration to your nginx server block
2. Reload nginx: `sudo nginx -s reload`

### 5. GitHub Pages
For GitHub Pages, you need to add a `404.html` file:

**Steps:**
1. Copy your `index.html` to `404.html`
2. Add a script to handle routing:

```html
<script>
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  // This script takes the current url and converts the path and query
  // string into just a query string, and then redirects the browser
  // to the new url with only a query string and hash fragment,
  // e.g. https://www.foo.tld/one/two?a=b&c=d#qwe, becomes
  // https://www.foo.tld/?/one/two&a=b~and~c=d#qwe
  // Note: this 404.html file must be at least 512 bytes for it to work
  // with Internet Explorer (it is currently > 512 bytes)

  // If you're creating a Project Pages site and NOT using a custom domain,
  // then set pathSegmentsToKeep to 1 (enterprise users may need to set it to > 1).
  // This way the code will only replace the route part of the path, and not
  // the real directory in which the app resides, for example:
  // https://username.github.io/repo-name/one/two?a=b&c=d#qwe becomes
  // https://username.github.io/repo-name/?/one/two&a=b~and~c=d#qwe
  // Otherwise, leave pathSegmentsToKeep as 0.
  var pathSegmentsToKeep = 0;

  var l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
    l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  );
</script>
```

### 6. Firebase Hosting
For Firebase Hosting, add to `firebase.json`:

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Testing the Fix

1. Deploy your application
2. Navigate to any route (e.g., `/browse`, `/dashboard`)
3. Refresh the page
4. The page should load correctly instead of showing a 404 error

## Common Issues

### Issue: Still getting 404 after adding configuration
**Solution:** Make sure the configuration file is in the correct location and properly formatted.

### Issue: Routes work but assets don't load
**Solution:** Check that your build process is correctly copying assets to the public directory.

### Issue: Some routes work but others don't
**Solution:** Make sure all your routes are defined in your React Router configuration.

## Build Commands

Make sure you're building your app correctly:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The build output should be in the 'dist' directory
```

## Additional Notes

- The configuration files are already created in your project
- Choose the appropriate configuration for your deployment platform
- Test thoroughly after deployment
- Consider adding error boundaries for better error handling

## Support

If you're still experiencing issues:
1. Check your deployment platform's documentation
2. Verify the configuration file is in the correct location
3. Check the browser's network tab for any failed requests
4. Ensure your build process is working correctly
