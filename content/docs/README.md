---
title: Computer Using Generalist Agent (CUGA)
description: An autonomous agent capable of performing web actions with intelligent planning and task decomposition
---

# Computer Using Generalist Agent (CUGA)

<div align="center">

_An autonomous agent capable of performing web actions with intelligent planning and task decomposition_

[![Python](https://img.shields.io/badge/Python-3.12-blue.svg)](https://www.python.org/)
[![Status](https://img.shields.io/badge/Status-Active-success.svg)]()

</div>

## What is CUGA?

CUGA is a sophisticated autonomous agent that combines the power of large language models with intelligent task planning and execution capabilities. It can perform both browser automation and API interactions, making it a versatile tool for complex workflow automation.

### Key Features

- **Autonomous Operation**: Self-planning and task decomposition
- **Web Automation**: Browser-based task execution
- **API Integration**: Seamless API interaction capabilities
- **Intelligent Planning**: LLM-powered decision making
- **Workflow Persistence**: Save and reuse successful workflows
- **Experiment Tracking**: Comprehensive monitoring and analytics

## 🔗 Important Links

- **[cuga-as-a-style](https://github.ibm.com/research-rpa/wxo-agents-experimental)** - Research repository
- **[cuga-website](https://cuga.dev/)** - Official website
- **[Enablement-session](https://ibm-my.sharepoint.com/personal/aviy_il_ibm_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Faviy%5Fil%5Fibm%5Fcom%2FDocuments%2FRecordings%2FCUGA%20enablement%20session%2D20250724%5F150107%2DMeeting%20Recording%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E22519f8f%2D7c32%2D45bf%2D92b7%2D5c0789485f1b)** - Training materials

## Use Cases

CUGA excels in scenarios requiring:

- **Complex Workflow Automation**: Multi-step processes that require decision making
- **API Orchestration**: Coordinating multiple API calls with intelligent error handling
- **Web Scraping & Automation**: Browser-based data collection and form filling
- **Business Process Automation**: Repetitive tasks that benefit from AI-powered optimization
- **Research & Development**: Experimental workflows that require adaptive planning

## Technology Stack

- **Python 3.12**: Core runtime environment
- **UV**: Modern Python package management
- **FastAPI**: High-performance web framework
- **Selenium/Playwright**: Browser automation capabilities
- **OpenAI/LiteLLM**: LLM integration for intelligent decision making
- **Docker**: Containerized deployment and evaluation

## Quick Start

Get started with CUGA in minutes:

```bash
# Clone & Setup
git clone git@github.ibm.com:research-rpa/cuga.git
cd cuga
uv venv --python=3.12 && source .venv/bin/activate
uv sync

# Configure
cp .env.example .env
# Add your OPENAI_API_KEY to .env

# Test Code Sandbox
uv run test_sandbox

# Run Demo
cuga start demo
```

## Documentation Structure

This documentation is organized into four main sections:

### 1. **Getting Started**
- [Introduction](./index.mdx) - Overview and key concepts
- [Quick Start](./quickstart.mdx) - Get up and running quickly
- [Installation](./installation.mdx) - Complete setup instructions
- [Configuration](./configuration/) - Model setup, environment, and settings

### 2. **Usage**
- [Demo Mode](./usage/demo-mode.mdx) - Learn CUGA with pre-configured demo
- [Control Commands](./usage/control-commands.mdx) - Master CUGA CLI
- [API Integration](./usage/api-integration.mdx) - Add your own APIs and tools
- [Save & Reuse](./usage/save-reuse.mdx) - Workflow persistence and optimization
- [Execution Modes](./usage/modes.mdx) - Fast, accurate, and custom modes

### 3. **Evaluation**
- [AppWorld Evaluation](./evaluation/appworld.mdx) - Test with AppWorld benchmark
- [WebArena Evaluation](./evaluation/webarena.mdx) - Test with WebArena benchmark
- [WxO Tools Evaluation](./evaluation/wxo-tools.mdx) - Integrate with Watson Orchestrate
- [Docker Parallel Evaluation](./evaluation/docker-parallel.mdx) - Scale evaluation with containers
- [Experiment Tracking](./evaluation/experiment-tracking.mdx) - Monitor and analyze results

### 4. **Development**
- [Testing](./development/testing.mdx) - Comprehensive testing strategies
- [Troubleshooting](./development/troubleshooting.mdx) - Debug common issues
- [Debugging](./development/debugging.mdx) - Advanced debugging techniques
- [API Reference](./api-reference/) - Complete API documentation

## Prerequisites

Before getting started, ensure you have:

| Tool               | Purpose                | Installation                                                             |
| ------------------ | ---------------------- | ------------------------------------------------------------------------ |
| UV              | Python project manager | [Install Guide](https://docs.astral.sh/uv/getting-started/installation/) |
| Rancher Desktop | Container management   | [Download](https://rancherdesktop.io/)                                   |
| OpenAI API Key  | LLM access             | Add to `.env` file                                                       |

> **CUGA Team**: Use the [ETE LiteLLM](https://ete-litellm.bx.cloud9.ibm.com/ui/) API key

## Demo Mode

CUGA comes with a pre-configured demo featuring the Digital Sales API:

```bash
# Start the demo
cuga start demo

# Try this example query:
"get my top account by revenue from digital sales"
```

### Demo Pages

We've created demo HTML pages for testing different CUGA modes:

- **[Hybrid Demo](./demo_pages/hybrid_demo.html)**: Test browser + API integration
- **[Browser Demo](./demo_pages/browser_demo.html)**: Test pure web automation
- **[API Demo](./demo_pages/api_demo.html)**: Test API-only operations

Download and open these pages in your browser to test CUGA's capabilities in each mode.

## Experiment Tracking

Monitor your CUGA experiments with built-in analytics:

```bash
# View experiment dashboard
cuga exp

# Start dashboard for specific experiment
# Click "Start Dashboard" in the interface
```

## Execution Modes

CUGA offers multiple execution modes optimized for different use cases:

| Mode | Speed | Accuracy | Use Case |
|------|-------|----------|----------|
| **Fast** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Development, testing |
| **Accurate** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Production, critical tasks |
| **Custom** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Tailored workflows |
| **Save & Reuse** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Repeated workflows |

## Evaluation Benchmarks

Test CUGA with industry-standard benchmarks:

- **AppWorld**: Real-world web application testing
- **WebArena**: Web automation and navigation testing
- **WxO Tools**: Watson Orchestrate integration testing

## Configuration

### Model Providers

CUGA supports multiple LLM providers:

- **ETE LiteLLM** (Recommended for IBM teams) - Free, high-performance
- **OpenAI** - Popular choice with excellent model quality
- **IBM WatsonX** - Enterprise-grade AI platform
- **Azure OpenAI** - Microsoft's managed service

### Environment Setup

```bash
# Switch between providers
export AGENT_SETTING_CONFIG="settings.litellm.toml"  # ETE (default)
export AGENT_SETTING_CONFIG="settings.openai.toml"   # OpenAI
export AGENT_SETTING_CONFIG="settings.watsonx.toml"  # WatsonX
```

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Port conflicts | Check if ports 8000, 8005, 8080 are free |
| Docker errors | Ensure Rancher Desktop is running |
| API key errors | Verify `.env` file has correct `OPENAI_API_KEY` |
| Module not found | Run `uv sync` to install dependencies |

### Debug Commands

```bash
# Check service status
cuga status

# View logs
cuga logs --tail

# Check configuration
cuga config show

# Run diagnostics
cuga diagnose
```

## Testing

Run the comprehensive test suite:

```bash
# Run all tests
uv run pytest -v

# Run specific test categories
uv run pytest tests/unit/           # Unit tests
uv run pytest tests/integration/    # Integration tests
uv run pytest tests/system/         # System tests

# Run with coverage
uv run pytest --cov=cuga --cov-report=html
```

## Performance Monitoring

Monitor CUGA performance and health:

```bash
# Real-time monitoring
cuga monitor

# Performance metrics
cuga stats

# Resource usage
cuga stats --resources
```

## Continuous Integration

Automate testing and evaluation:

```bash
# Daily evaluation
0 2 * * * cd /path/to/cuga && uv run appworld_eval --eval_key daily_test

# Weekly comprehensive evaluation
0 3 * * 0 cd /path/to/cuga && uv run appworld_eval --eval_key weekly_full
```

## Resources

- 📖 [Full Documentation](./docs)
- 🐛 [Issue Tracker](https://github.ibm.com/research-rpa/cuga/issues)
- 💬 [Team Chat](#)
- 📧 Contact: sami.marreed@ibm.com

## Contributing

We welcome contributions from the IBM community:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is proprietary to IBM Corporation. All rights reserved.

---

<div align="center">
Made by the CUGA Team at IBM Research

[Get Started →](./quickstart.mdx)
</div>
