import time

import typer
from rich.progress import Progress, SpinnerColumn, TextColumn

app = typer.Typer()


@app.command()
def print_a():
    i = 0
    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        transient=True,
    ) as progress:
        progress.add_task(
            description="Processing...",
            total=None,
        )
        while True:
            if i == 10:
                break
            i += 1
            time.sleep(1)
        progress.stop()
    print("A")


@app.command()
def print_b():
    i = 0
    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        transient=True,
    ) as progress:
        progress.add_task(
            description="Processing...",
            total=None,
        )
        while True:
            if i == 10:
                break
            i += 1
            time.sleep(1)
        progress.stop()
    print("B")


@app.command()
def hello(name: str = typer.Option()):
    i = 0
    with Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        transient=True,
    ) as progress:
        progress.add_task(
            description="Processing...",
            total=None,
        )
        while True:
            if i == 10:
                break
            i += 1
            time.sleep(1)
        progress.stop()
    print(f"Hello {name}!")
