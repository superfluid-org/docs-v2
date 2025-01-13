# Technical Docs for the Superfluid Protocol

Welcome to the official technical documentation of Superfluid, the protocol layer for real-time finance on the blockchain. Our documentation is designed to provide you with comprehensive guides, tutorials, and reference materials to help you understand and integrate Superfluid into your smart contracts and applications.

## Superfluid Protocol Documentation

This web application contains all documentation for the Superfluid Protocol. It is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Project Layout

### Superfluid Protocol documentation is organized into four main sections:

* **Concepts** - Fundamental Superfluid information or concepts essential for using Superfluid products, such as _Money Streaming_, _Distributions_ and _Super Tokens_.
* **Protocol** - Deep dive into Superfluid smart contracts, and guides to build using Superfluid.
* **SDK** - Guides and tutorials about how to build your own Superfluid SDK from the protocol forwarders.
* **Technical Reference** - Technical Reference of the most important Superfluid Contracts.

Superfluid is a protocol that revolves around Super Tokens and their primitives Money Streaming and Distributions. In the Protocol page, each one of these concepts have three items:

* _Overview_
* _Guides_
* _Examples_

## Adding Documentation

### Overview

A product overview should cover aspects such as:

* The high-level components of the product.
* The main functionalities offered by the product.
* The location of the product's source code.
* Where the code artifact resides (e.g., _npm_) and how to integrate with it.

### Guides

Ideally, guides should adhere to the **Principles of a Good Guide**:

* A guide demonstrates a single concept in the Superfluid ecosystem through reusable code.
* Guides consist of an **introduction**, a step-by-step **walkthrough**, and an **output** or end state for verification.
* The goal is for developers to build something within **10-30 minutes per guide** while offering deep-dive references.

## Contributing to Superfluid Docs

Thank you for considering contributing to the Superfluid Finance documentation! Your efforts help make our documentation clearer, more comprehensive, and more accessible to everyone. Follow these guidelines to ensure your contributions can be smoothly integrated.

### Creating a Pull Request

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository.
2. Clone your fork to your local machine and switch to a new branch for your contribution. Ensure your branch is up-to-date with the main branch of the original repo.
3. Make your changes, commit them, and push the branch to your fork.
4. Navigate to the original Superfluid Finance documentation repository in your web browser and initiate a new pull request.
5. Provide a clear and descriptive title for the pull request, and summarize your changes in the description. If your changes are related to an existing issue, reference it by including the issue number (e.g., #123).
6. Apply any relevant labels to your pull request, such as "documentation", "bugfix", or "enhancement".

### Standard Flow for Setting Up a Fork

To set up your fork for contributing, you can use the following commands or modify them to fit your setup:

```console
cd docs-v2
git remote add upstream https://github.com/superfluid-finance/docs-v2.git
git fetch upstream
git pull --rebase upstream main
git checkout -b "feature/my-awesome-docs-update"
```

### Ways to Contribute

There are many ways to contribute to the Superfluid documentation, including but not limited to:

1. **Identify and Improve Confusing Content**: If you come across documentation that is confusing, unclear, or misleading, we welcome pull requests that clarify and improve the presentation of these topics.
    
2. **Adhere to the Style Guide**: We aim for a consistent and accessible writing style across our documentation. Please refer to the [Google Developer Documentation Style Guide](https://developers.google.com/style/) for general guidelines. Look for opportunities to use an active voice and first-person where appropriate.
    
3. **Write an Example Guide**: If built something using Superfluid, you are welcome to contribute to our documentation by adding a guide to illustrate your example.

Your contributions, whether big or small, are greatly appreciated and help make Superfluid's documentation a valuable resource for the community.

## Run Locally

### Installation

```console
yarn install
```

### Local Development

```console
yarn run start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

Generates static content into the `build` directory for hosting on any static content hosting service.

## Deployment

The application is automatically deployed to production on Vercel upon merge into **master**.
