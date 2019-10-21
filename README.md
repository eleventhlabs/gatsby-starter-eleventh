# gatsby-starter-eleventh

🌱 An opinionated Gatsby starter by Eleventh.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site:

    ```shell
    # Create a new Gatsby site using gatsby-starter-eleventh
    gatsby new your-project https://github.com/eleventhlabs/gatsby-starter-eleventh
    ```

1. **Configure your code editor.**

    Install this project's preferred plugins for your code editor of choice. **This is highly recommended.**

    - EditorConfig ([VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig), [Sublime](https://packagecontrol.io/packages/EditorConfig))
    - Emotion, syntax highlighting ([VSCode](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components))
    - ESLint ([VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Sublime](https://packagecontrol.io/packages/SublimeLinter-eslint))
    - Stylelint ([VSCode](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint), [Sublime](https://packagecontrol.io/packages/SublimeLinter-stylelint))

1.  **Start developing.**

    Navigate into your new site’s directory and start it up:

    ```shell
    cd your-project/
    npm install
    npm start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

1.  **Commit your code to GitHub.**

    Before committing anything to GitHub, **please check that your code is properly formatted with `npm run lint`**. If you set up the preferred plugins for your code editor mentioned above, you'll also get warnings about formatting as you develop!

## 🧐 What's inside?

*Coming soon! Check out this project's dependencies in the [`package.json`](package.json) in the meantime.*

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/).

## 💫 Deploy

This starter comes configured with the [gh-pages](https://www.npmjs.com/package/gh-pages) npm module by default:

```shell
npm run deploy
```

Running this command will build a production version of your site and automatically publish it. From the [gh-pages](https://www.npmjs.com/package/gh-pages) documentation:

> Calling this function will create a temporary clone of the current repository, create a `gh-pages` branch if one doesn't already exist, copy over all files from the base path, or only those that match patterns from the optional `src` configuration, commit all changes, and push to the `origin` remote.

> If a `gh-pages` branch already exists, it will be updated with all commits from the remote before adding any commits from the provided `src` files.

## 🐛 Bugs

1.  Stylelint plugins for code editors breaks when `.babelrc` is configured. See:
    - https://github.com/emotion-js/emotion/issues/185
    - https://github.com/stylelint/stylelint/issues/4018

## 💡 Inspiration

- https://github.com/gatsbyjs/gatsby-starter-hello-world
- https://github.com/ueno-llc/ueno-gatsby-starter
