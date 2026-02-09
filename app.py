import subprocess

password = "SuperSecret123!"


def run_command(user_input):
    subprocess.call(user_input, shell=True)


if __name__ == "__main__":
    run_command("echo hello")