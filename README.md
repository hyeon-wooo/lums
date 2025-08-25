# LUMS (Linux User Managment System)

A CLI tool that conveniently manages Linux users and groups.

## Get started

Run the following commands to install via APT:

```bash
# Save the public key (from GitHub Pages) as a binary keyring
curl -fsSL https://hyeon-wooo.github.io/lums/lums.gpg \
  | sudo gpg --dearmor -o /usr/share/keyrings/lums-archive-keyring.gpg

# Add the repository
echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/lums-archive-keyring.gpg] https://hyeon-wooo.github.io/lums ./' | sudo tee /etc/apt/sources.list.d/lums.list

# Update package lists
sudo apt update

# Install the package (e.g., lums)
sudo apt install lums
```

## Features

- User management
  - List users
  - Add
  - Change password
  - Remove password
  - Generate PEM key
  - Delete
- Group management
  - List groups
  - Add
  - Delete
  - Add member
  - Remove member
- Settings
  - Change language
  - Configure whether to log executed commands to console

Available languages: Korean (ko), English (en)

## Compatibility

Tested on Ubuntu 22.04 (Jammy Jellyfish).

| Ubuntu | Status |
| ------ | ------ |
| 20.04  | X      |
| 22.04  | O      |
| 24.04  | X      |

## Project Structure

```plain
── index.js
── [domain]
   ├── command
   ├── interface
   └── prompt
```

- index.js: A entry point of LUMS.
- [domain]: Users, Groups, Settings, Main.
- [domain]/interface: There are screens related with the domain.
- [domain]/prompt: Specifies the prompt questions, descriptions, choices, etc. to be used in the interface file, for each language.
- [domain]/command: There are linux commands for a specific function.
