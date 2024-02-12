class File {
  constructor(fileName, content) {
    this.fileName = fileName;
    this.content = content;
  }
}

class Directory {
  constructor(directoryName, files, parentDirectory = null) {
    this.directoryName = directoryName;
    this.files = files;
    this.parentDirectory = parentDirectory;
  }

  addFile(newFile) {
    const existingFile = this.files.find(
      (file) => file instanceof File && file.fileName === newFile.fileName
    );

    if (existingFile) {
      // O arquivo com o mesmo nome já existe, adicione um número incremental
      let counter = 1;
      const [name, extension] = newFile.fileName.split(".");
      let newFileName = `${name}${counter}.${extension}`;
      while (
        this.files.find(
          (file) => file instanceof File && file.fileName === newFileName
        )
      ) {
        counter++;
        newFileName = `${name}${counter}.${extension}`;
      }
      newFile.fileName = newFileName;
    }

    this.files.push(newFile);
  }
}

class System {
  static directories = {
    root: new Directory("root", [
      new Directory("Desktop", []),
      new Directory("Documents", []),
      new Directory("Images", []),
      new Directory("Musics", []),
      new Directory("Videos", []),
    ]),
  };

  static currentDirectory = System.directories.root;
  static isInNodeMode = false;

  static createDirectory(directoryName) {
    const existingDirectory = System.currentDirectory.files.find(
      (file) =>
        file instanceof Directory && file.directoryName === directoryName
    );

    if (existingDirectory) {
      // O diretório com o mesmo nome já existe, adicione um número incremental
      let counter = 1;
      let newDirectoryName = `${directoryName}${counter}`;
      while (
        System.currentDirectory.files.find(
          (file) =>
            file instanceof Directory && file.directoryName === newDirectoryName
        )
      ) {
        counter++;
        newDirectoryName = `${directoryName}${counter}`;
      }
      directoryName = newDirectoryName;
    }

    const newDirectory = new Directory(
      directoryName,
      [],
      System.currentDirectory
    );
    System.currentDirectory.addFile(newDirectory);
    // Retorna o nome do diretório com o número adicionado
    return directoryName;
  }

  static changeDirectory(directoryName) {
    if (directoryName === "~") {
      System.currentDirectory = System.directories.root;
      return "Changed to the root directory.";
    } else if (directoryName === "../") {
      if (System.currentDirectory !== System.directories.root) {
        System.currentDirectory =
          System.currentDirectory.parentDirectory || System.directories.root;
        return `Changed to the parent directory '${System.currentDirectory.directoryName}'.`;
      } else {
        return "You are already in the root directory.";
      }
    } else {
      const targetDirectory = System.currentDirectory.files.find(
        (file) =>
          file instanceof Directory && file.directoryName === directoryName
      );

      if (targetDirectory) {
        System.currentDirectory = targetDirectory;
        return `Changed to the directory '${System.currentDirectory.directoryName}'.`;
      } else {
        return `The directory '${directoryName}' does not exist.`;
      }
    }
  }

  static getCurrentDirectoryPath() {
    let path = "/";
    let currentDir = System.currentDirectory;

    while (currentDir && currentDir !== System.directories.root) {
      path = `/${currentDir.directoryName}${path}`;
      currentDir = currentDir.parentDirectory;
    }

    return path === "" ? "/" : path;
  }

  static listDirectoryContents() {
    const currentDir = System.currentDirectory;
    const contents = currentDir.files
      .map((file) => `"${file.fileName ?? file.directoryName}"`)
      .join(" ");
    return contents ? contents : "The directory is empty.";
  }

  static removeFileOrDirectory(targetName) {
    const targetFileIndex = System.currentDirectory.files.findIndex(
      (file) => file instanceof File && file.fileName === targetName
    );

    const targetDirectoryIndex = System.currentDirectory.files.findIndex(
      (directory) =>
        directory instanceof Directory && directory.directoryName === targetName
    );

    if (targetFileIndex !== -1) {
      System.currentDirectory.files.splice(targetFileIndex, 1);
      return `File '${targetName}' removed successfully.`;
    } else if (targetDirectoryIndex !== -1) {
      const targetDirectory =
        System.currentDirectory.files[targetDirectoryIndex];
      if (targetDirectory.files.length === 0) {
        System.currentDirectory.files.splice(targetDirectoryIndex, 1);
        return `Directory '${targetName}' removed successfully.`;
      } else {
        return `Error: Directory '${targetName}' is not empty. Remove its contents first.`;
      }
    } else {
      return `Error: '${targetName}' not found.`;
    }
  }

  static enterNodeMode() {
    System.isInNodeMode = true;
    document.getElementById("prompt").textContent = ">>>";
  }

  static exitNodeMode() {
    System.isInNodeMode = false;
    document.getElementById("prompt").textContent = "John@johns-air ~ %";
  }
}

const commands = {
  help: {
    description: "Displays this help message.",
    execute: (args) => {
      if (!args) {
        return helpMessage;
      }
      return `${args} - ${commands[args].description}`;
    },
  },
  greetings: {
    description: "Shows a friendly greeting.",
    execute: () => "Hello! How are you?",
  },
  mkdir: {
    description: "Creates a new directory.",
    execute: (args) => {
      if (!args) {
        return "Usage: mkdir <directory_name>";
      }
      const newDirectoryName = System.createDirectory(args);
      return `Directory '${newDirectoryName}' created successfully.`;
    },
  },
  cd: {
    description: "Changes to an existing directory.",
    execute: (args) => {
      if (!args) {
        return "Usage: cd <directory_name>";
      }
      return System.changeDirectory(args);
    },
  },
  ls: {
    description: "Lists the files and directories in the current directory.",
    execute: () => {
      return System.listDirectoryContents() || "The directory is empty.";
    },
  },
  clear: {
    description: "Clears the console output.",
    execute: () => {
      const output = document.getElementById("output");
      output.innerHTML = "";
      return "";
    },
  },
  touch: {
    description: "Creates new file(s).",
    execute: (args) => {
      if (!args) {
        return "Usage: touch <file_name> [<file_name_2> ...]";
      }

      const fileNames = args.split(" ");
      const createdFiles = [];

      fileNames.forEach((fileName) => {
        const newFile = new File(fileName, "This is a new file.");
        System.currentDirectory.addFile(newFile);
        createdFiles.push(newFile.fileName);
      });

      const filesString = createdFiles.length > 1 ? "files" : "file";
      return `Created ${
        createdFiles.length
      } ${filesString}: ${createdFiles.join(", ")}.`;
    },
  },
  echo: {
    description: "Adds text to a file.",
    execute: (args) => {
      if (!args || !args.includes(">")) {
        return "Usage: echo <text> > <file_name>";
      }

      const [text, fileNamesString] = args.split(" > ");
      const fileNames = fileNamesString.split(/\s+/);

      const createdFiles = [];

      fileNames.forEach((fileName) => {
        const targetFile = System.currentDirectory.files.find(
          (file) => file instanceof File && file.fileName === fileName
        );

        if (targetFile) {
          targetFile.content = text.replace(/['"]+/g, ""); // Remover as aspas da string
          createdFiles.push(fileName);
        } else {
          createdFiles.push(`(Error: ${fileName} does not exist)`);
        }
      });

      const filesString = createdFiles.length > 1 ? "files" : "file";
      return `Text added to ${
        createdFiles.length
      } ${filesString}: ${createdFiles.join(", ")}.`;
    },
  },
  cat: {
    description: "Displays the content of a file.",
    execute: (args) => {
      if (!args) {
        return "Usage: cat <file_name>";
      }

      const fileName = args.trim();
      const targetFile = System.currentDirectory.files.find(
        (file) => file instanceof File && file.fileName === fileName
      );

      if (targetFile) {
        return ">>> " + targetFile.content;
      } else {
        return `The file '${fileName}' does not exist.`;
      }
    },
  },
  node: {
    description: "Enters Node.js interactive mode.",
    execute: () => {
      System.enterNodeMode();
      return "Entered Node.js interactive mode. Type 'exit' to return to the normal prompt.";
    },
  },
  pwd: {
    description: "Print the current working directory.",
    execute: () => System.getCurrentDirectoryPath(),
  },
  rm: {
    description: "Remove files or directories.",
    execute: (args) => {
      if (!args) {
        return "Usage: rm <file_name or directory_name>";
      }

      const targetName = args.trim();
      return System.removeFileOrDirectory(targetName);
    },
  },
  history: {
    description: "Displays command history.",
    execute: () => {
      const numberedHistory = commandHistory.map(
        (command, index) => `${index + 1} ${command}`
      );
      return numberedHistory.join("\n");
    },
  },
  date: {
    description: "Display the current date and time.",
    execute: () => new Date().toLocaleString(),
  },
  uptime: {
    description: "Shows the time elapsed since the page was loaded.",
    execute: () => {
      const currentTime = new Date();
      const elapsedTime = currentTime - startTime;
      const seconds = Math.floor(elapsedTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);

      return `Uptime: ${hours}h ${minutes % 60}m ${seconds % 60}s`;
    },
  },
  curl: {
    description: "Transfer a URL.",
    execute: async (args) => {
      if (!args) {
        return "Usage: curl <url> [options]";
      }

      const [url, ...options] = args.trim().split(/\s+/);
      const requestOptions = {
        headers: {},
      };

      options.forEach((option, index, arr) => {
        if (option === "--header" && index < arr.length - 1) {
          const [headerKey, headerValue] = arr[index + 1].split(":");
          requestOptions.headers[headerKey] = headerValue.trim();
        } else if (option === "--auth" && index < arr.length - 1) {
          const [username, password] = arr[index + 1].split(":");
          requestOptions.headers.Authorization = `Basic ${btoa(
            `${username}:${password}`
          )}`;
        } else if (option === "--token" && index < arr.length - 1) {
          requestOptions.headers.Authorization = `Bearer ${arr[index + 1]}`;
        } else if (option === "--method" && index < arr.length - 1) {
          requestOptions.method = arr[index + 1].toUpperCase();
        }
        // Adicione outras opções conforme necessário
      });

      try {
        const response = await fetch(url, requestOptions);
        const content = await response.json();

        return JSON.stringify(content, null, 2); // O terceiro parâmetro é a quantidade de espaços de indentação (opcional)
      } catch (error) {
        return `Error: ${error.message}`;
      }
    },
  },
};

let startTime;
let currentDirectory = "/";
const commandHistory = [];
let commandHistoryIndex = -1;

const helpMessage = `
Welcome to the DAD console!

Available Commands:
${Object.keys(commands)
  .map((command) => `- ${command}: ${commands[command].description}`)
  .join("\n")}

For more information about a specific command, type "help <command>".
For example, "help greetings" will provide details about the greeting command.

Have fun exploring the DAD console!`;

function updatePrompt() {
  const currentDirectoryElement = document.getElementById("current-directory");
  currentDirectoryElement.textContent = `📁 ${System.getCurrentDirectoryPath()} `;
}

async function printMessage(command, outputPromise) {
  const outputElement = document.getElementById("output");
  if (command.trim().toLowerCase() === "clear") {
    outputElement.innerHTML = "";
  } else {
    outputElement.innerHTML += `<div class="command-line">${
      System.isInNodeMode ? ">>>" : `John@johns-air ~ %`
    } ${command}</div>`;

    try {
      const output = await outputPromise;
      outputElement.innerHTML += output ? `${output}<br>` : "";
    } catch (error) {
      outputElement.innerHTML += `Error: ${error.message}<br>`;
    }
  }
  outputElement.scrollTop = outputElement.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function () {
  startTime = new Date();
  const output = document.getElementById("output");
  const input = document.getElementById("input");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const fullCommand = input.value;
      const [command, ...args] = fullCommand.split(" ");
      input.value = "";

      executeCommand(command, args.join(" "));
      updatePrompt();
    } else if (event.key === "ArrowUp") {
      if (commandHistoryIndex < commandHistory.length - 1) {
        commandHistoryIndex++;
        input.value = commandHistory[commandHistoryIndex];
      }
    } else if (event.key === "ArrowDown") {
      if (commandHistoryIndex >= 0) {
        commandHistoryIndex--;
        input.value =
          commandHistoryIndex >= 0 ? commandHistory[commandHistoryIndex] : "";
      }
    }
  });

  document.addEventListener("keydown", function (event) {
    // Verifica se as teclas Ctrl + C são pressionadas para sair do modo Node.js
    if (event.ctrlKey && event.key === "c" && System.isInNodeMode) {
      System.exitNodeMode();
      updatePrompt();
    }
  });

  function executeCommand(command, args) {
    const fullCommand = `${command} ${args}`;
    if (fullCommand.trim() === "") {
      return;
    }

    if (System.isInNodeMode) {
      if (fullCommand.trim().toLowerCase() === "exit") {
        System.exitNodeMode();
        updatePrompt();
      } else {
        try {
          const result = eval(fullCommand);
          printMessage(fullCommand, `${result}`);
        } catch (error) {
          printMessage(fullCommand, `Error: ${error.message}`);
        }
      }
    } else {
      if (fullCommand.trim() !== "") {
        commandHistory.unshift(fullCommand);
        commandHistoryIndex = -1;
      }

      printMessage(
        fullCommand,
        commands[command]?.execute(args) || `Unknown command: ${fullCommand}`
      );
    }

    updatePrompt();
  }

  updatePrompt();
});
