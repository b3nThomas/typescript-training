// These are designed to be extended only and the
// super to perform the implementation of the method(s)

abstract class Command {
    abstract commandLine(): string;

    execute() {
        console.log('Executing:', this.commandLine());
    }
}

class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard'
    }
}

class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch --all'
    }
}

new GitResetCommand().execute()
new GitFetchCommand().execute()

// new Command(); - Not ok
// Cannot create an instance of an abstract class
