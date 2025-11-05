---
title: CUGA Demo Pages
description: HTML demo pages for testing CUGA in different modes
---

# 🧪 CUGA Demo Pages

This directory contains HTML demo pages for testing CUGA in different modes.

## 📄 Available Demo Pages

### 1. **Hybrid Demo** (`hybrid_demo.html`)
- **Purpose**: Test CUGA's hybrid mode (browser + API)
- **Key Feature**: The signature example: "what is the top account by revenue from digital sales and add it to current page"
- **What it demonstrates**: 
  - API calls to Digital Sales service
  - Browser automation to update the page
  - Combined workflow execution
- **Best for**: Understanding how CUGA combines both capabilities

### 2. **Browser Demo** (`browser_demo.html`)
- **Purpose**: Test CUGA's browser-only mode
- **Key Features**: 
  - Interactive contact form
  - Navigation between sections
  - Data extraction examples
  - Screenshot simulation
- **What it demonstrates**: Pure web automation capabilities
- **Best for**: Learning browser automation features

### 3. **API Demo** (`api_demo.html`)
- **Purpose**: Test CUGA's API-only mode
- **Key Features**: 
  - API endpoint documentation
  - Example queries
  - Response format examples
- **What it demonstrates**: Server-side API operations
- **Best for**: Understanding API integration capabilities

## 🚀 How to Use

### 1. Download the Demo Pages
```bash
# Clone or download the repository
git clone git@github.com:cuga-project/cuga-agent.git
cd cuga/docs-main/demo_pages
```

### 2. Open in Your Browser
```bash
# Open the hybrid demo (recommended to start)
open hybrid_demo.html

# Or open any demo page
open browser_demo.html
open api_demo.html
```

### 3. Start CUGA in the Appropriate Mode
```bash
# For hybrid demo
cuga start demo --mode hybrid

# For browser demo
cuga start demo --mode web

# For API demo
cuga start demo --mode api
```

### 4. Test with CUGA
Use the example queries provided in each demo page to test CUGA's capabilities.

## 🎯 The Signature Example

The hybrid demo features the key example:
> **"what is the top account by revenue from digital sales and add it to current page"**

This demonstrates CUGA's ability to:
1. **Query an API** for account data
2. **Process the response** to find the top revenue account
3. **Update the web page** with the account information
4. **Provide user feedback** about the operation

## 🔧 Configuration Requirements

### Hybrid Mode
```toml
[features]
mode = "hybrid"

[hybrid_mode]
enabled = true
browser_enabled = true
api_enabled = true
```

### Browser Only Mode
```toml
[features]
mode = "web"

[web_mode]
enabled = true
browser_enabled = true
api_enabled = false
```

### API Only Mode
```toml
[features]
mode = "api"

[api_mode]
enabled = true
browser_enabled = false
api_enabled = true
```

## 📱 Browser Compatibility

These demo pages work with all modern browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| 🔴 Page not loading | Check file path and browser compatibility |
| 🔴 CUGA not responding | Verify CUGA is running in the correct mode |
| 🔴 API calls failing | Check CUGA configuration and API connectivity |
| 🔴 Browser automation not working | Ensure browser mode is enabled |

### Debug Steps

1. **Check CUGA Mode**: `cuga mode current`
2. **Verify Configuration**: `cuga config show --section features`
3. **Test API Connectivity**: `cuga apis test`
4. **Check Browser Tools**: `cuga tools list --type browser`

## 📚 Next Steps

After testing the demo pages:

1. **Read the Documentation**: Explore the full CUGA documentation
2. **Try Real APIs**: Integrate with your own APIs and services
3. **Build Workflows**: Create custom automation workflows
4. **Evaluate Performance**: Use the evaluation benchmarks

## 🤝 Support

If you encounter issues with the demo pages:

- 📧 Email: sami.marreed@ibm.com
- 🐛 Issues: [GitHub Issues](https://github.com/cuga-project/cuga-agent/issues)
- 📖 Documentation: [Full CUGA Docs](../index.mdx)

---

**Happy testing! 🎉**
