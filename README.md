# Passgen

Node.js command line app to generate random passwords.

## Usage

Install dependencies

```
npm install
```

Run file

```
node index (options)
```

Or create a symlink to run "passgen" from anywhere

```
npm link

# To remove symlink
npm unlink
```

Now you can run

```
passgen (options)
```

### Options

| Short | Long              | Description                       |
| ----- | ----------------- | --------------------------------- |
| -V    | --version         | Show the version                  |
| -l    | --length <number> | length of password (default: "8") |
| -nn   | --no-numbers      | remove numbers                    |
| -ns   | --no-symbols      | remove symbols                    |
| -h    | --help            | display help for command          |
