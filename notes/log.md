# Activity Log

neovim insert time `:pu=strftime('%Y-%m-%d %T (%a)')`

Trying to setup thing like described here:

<https://nx.dev/recipes/storybook/one-storybook-for-all>

## 2023-08-10 23:57:00 (Thu)

Updating `nx.json` in project root,
read more <https://nx.dev/reference/nx-json>

```json
  "workspaceLayout": {
    "appsDir": "apps",
    "libsDir": "packages"
  },
```

and on there I restarted the process of adding things back again

```bash
npm install --save-dev @nx/next
nx g @nx/next:app website.com
nx g @nx/next:lib next-ui
# rename projects
nx g @nrwl/workspace:mv \
    --project my-project \
    --destination my-renamed-project
# …for xample
nx g @nrwl/workspace:mv \
    --project next-ui \
    --destination next-lib
```

it added bunch of files to the root about… `eslint`, `prettier`, `jest` and `tsconfig.base.json`

Now to start libs and apps with this starter setups I need to do something next…

```bash
nx serve website.com --prod
nx serve website.com --dev # has dev mode on
```

and runing tests in all respectfull libraries can do like this:

```bash
nx test website.com nx test next-lib
nx lint website.com nx lint next-lib
```

would be great to generate some next pages into the app

```bash
# http://localhost:4200/my-new-page
nx g @nx/next:page my-new-page \
    --project=website.com

# package-based/apps/website.com/components/my-new-component/
nx g @nx/next:component my-new-component \
    --project=website.com

# package-based/packages/next-lib/src/lib/my-lib-component/
nx g @nx/next:component my-lib-component \
    --project=next-lib
```

Now when using generated things I have to look for the imports. Atm I have:

```ts
import { MyNewComponent } from 'apps/website.com/components/my-new-component/my-new-component';
// Here I needed to explicitly export newly generated libraryw
import { MyLibComponent } from 'next-lib';

// …
```

## 2023-08-10 11:45:10 (Thu)

The idea to initiate a manual process was not clear,
the best way to initiate is still try to follow with
default way

<https://nx.dev/getting-started/tutorials/package-based-repo-tutorial>

so I did…

**Setting up initial setup**

```bash
npx create-nx-workspace@latest package-based --preset=npm
```

**Setting up next apps**

```bash
npm install --save-dev @nx/next
nx g @nx/next:app website.com
```

## 2023-08-10 11:15:55 (Thu)

```bash
mkdir delve-workspace-multistorybook
touch .nvmrc
pnpm init
cat pnpm-workspace.yaml
```

for `pnpm-workspace.yaml`

```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

```bash
npx nx@latest init
```
