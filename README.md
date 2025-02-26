# registry-template

You can use the `shadcn` CLI to run your own component registry. Running your own
component registry allows you to distribute your custom components, hooks, pages, and
other files to any React project.

## Getting Started

This is a template for creating a custom registry using Next.js.

- The template uses a `registry.json` file to define components and their files.
- The `shadcn build` command is used to build the registry.
- The registry items are served as static files under `public/r/[name].json`.
- The template also includes a route handler for serving registry items.
- Every registry item are compatible with the `shadcn` CLI.
- We have also added v0 integration using the `Open in v0` api.

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation.

## registry.json template

- The registry.json file is only required if you're using the shadcn CLI to build your registry.
- If you're using a different build system, you can skip this step as long as your build system produces valid JSON files that conform to the registry-item schema specification.
- You can see the JSON Schema for `registry.json`

```json
// 20250224100353
// https://ui.shadcn.com/schema/registry.json

{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "description": "A shadcn registry of components, hooks, pages, etc.",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "homepage": {
      "type": "string"
    },
    "items": {
      "type": "array",
      "items": {
        "$ref": "https://ui.shadcn.com/schema/registry-item.json"
      }
    }
  },
  "required": ["name", "homepage", "items"],
  "uniqueItems": true,
  "minItems": 1
}
```

- You can see the JSON Schema for `registry-item.json`

```json
// 20250224100227
// https://ui.shadcn.com/schema/registry-item.json

{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "registry:lib",
        "registry:block",
        "registry:component",
        "registry:ui",
        "registry:hook",
        "registry:theme",
        "registry:page",
        "registry:file"
      ]
    },
    "description": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "author": {
      "type": "string"
    },
    "dependencies": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "devDependencies": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "registryDependencies": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "files": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string"
          },
          "content": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "registry:lib",
              "registry:block",
              "registry:component",
              "registry:ui",
              "registry:hook",
              "registry:theme",
              "registry:page",
              "registry:file"
            ]
          },
          "target": {
            "type": "string"
          }
        },
        "if": {
          "properties": {
            "type": {
              "enum": ["registry:file", "registry:page"]
            }
          }
        },
        "then": {
          "required": ["path", "type", "target"]
        },
        "else": {
          "required": ["path", "type"]
        }
      }
    },
    "tailwind": {
      "type": "object",
      "properties": {
        "config": {
          "type": "object",
          "properties": {
            "content": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "theme": {
              "type": "object",
              "additionalProperties": true
            },
            "plugins": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "cssVars": {
      "type": "object",
      "properties": {
        "light": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "dark": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      }
    },
    "meta": {
      "type": "object",
      "additionalProperties": true
    },
    "docs": {
      "type": "string"
    },
    "categories": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": ["name", "type"]
}
```

## Getting started with creating and building and publishing our own registry

Learn how to get setup and run your own component registry.

This guide will walk you through the process of setting up your own component registry.

It assumes you already have a project with components and would like to turn it into a registry.

If you're starting a new registry project, you can use the registry template as a starting point. We have already configured it for you.

### registry.json

The registry.json file is only required if you're using the shadcn CLI to build your registry.

If you're using a different build system, you can skip this step as long as your build system produces valid JSON files that conform to the registry-item schema specification.

1. Add a registry.json file

Create a registry.json file in the root of your project. Your project can be a Next.js, Remix, Vite, or any other project that supports React.

`registry.json file content`

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": []
}
```

This registry.json file must conform to the registry schema specification.

2. Add a registry item

   - Create your component
     Add your first component. Here's an example of a simple <HelloWorld /> component:

   `registry/hello-world/hello-world.tsx`

   ```tsx
   import { Button } from "@/components/ui/button";

   export function HelloWorld() {
     return <Button>Hello World</Button>;
   }
   ```

Note: This example places the component in the registry directory. You can place it anywhere in your project as long as you set the correct path in the registry.json file.

`registry
└── hello-world
    └── hello-world.tsx
`

Important: If you're placing your component in a custom directory, make sure it is configured in your tailwind.config.ts file.
`    // tailwind.config.ts
export default {
  content: ["./registry/**/*.{js,ts,jsx,tsx}"],
}`

- Add your component to the registry
  To add your component to the registry, you need to add your component definition to registry.json
  `registry.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

You define your registry item by adding a name, type, title, description and files.

For every file you add, you must specify the path and type of the file. The path is the relative path to the file from the root of your project. The type is the type of the file.

You can read more about the registry item schema and file types in the registry item schema docs.

## Build your registry

1. Install the shadcn CLI
   Note: the build command is currently only available in the shadcn@canary version of the CLI.
   `bun add shadcn@canary`
2. Add a build script
   Add a registry:build script to your package.json file.
   `    {
  "scripts": {
    "registry:build": "shadcn build"
  }
}`
3. Run the build script
   Run the build script to generate the registry JSON files.
   `bun registry:build`

   `
   Note: By default, the build script will generate the registry JSON files in public/r e.g public/r/hello-world.json.

You can change the output directory by passing the --output option. See the shadcn build command for more information.
`

## Serve your registry

If you're running your registry on Next.js, you can now serve your registry by running the next server. The command might differ for other frameworks.
`bun dev`

Your files will now be served at http://localhost:3000/r/[NAME].json eg. http://localhost:3000/r/hello-world.json.

## Publish your registry

To make your registry available to other developers, you can publish it by deploying your project to a public URL.

## Guidelines

Here are some guidelines to follow when building components for a registry.

The following properties are required for the block definition: name, description, type and files.
Make sure to list all registry dependencies in registryDependencies. A registry dependency is the name of the component in the registry eg. input, button, card, etc or a URL to a registry item eg. http://localhost:3000/r/editor.json.
Make sure to list all dependencies in dependencies. A dependency is the name of the package in the registry eg. zod, sonner, etc. To set a version, you can use the name@version format eg. zod@^3.20.0.
Imports should always use the @/registry path. eg. import { HelloWorld } from "@/registry/hello-world/hello-world"
Ideally, place your files within a registry item in components, hooks, lib directories.

## Install using the CLI

To install a registry item using the shadcn CLI, use the add command followed by the URL of the registry item.

bunx --bun shadcn@latest add http://localhost:3000/r/hello-world.json

Note - This is next js project with shad cn and tailwind is being used
