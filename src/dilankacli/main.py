import typer


app = typer.Typer()


@app.command()
def print_a():
    print("A")


@app.command()
def print_b():
    print("B")
