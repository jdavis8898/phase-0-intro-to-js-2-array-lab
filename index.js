const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push(name);
}

function destructivelyPrependCat(name)
{
    cats.unshift(name);
}

function destructivelyRemoveLastCat()
{
    cats.pop();
}

function destructivelyRemoveFirstCat()
{
    cats.shift();
}

function appendCat(name)
{
    const catsNew = [...cats, name];
    return catsNew;
}

function prependCat(name)
{
    const catsNew = [name, ...cats];
    return catsNew;
}

function removeLastCat()
{
    const catsNew = [...cats];
    catsNew.pop();
    return catsNew;
}

function removeFirstCat()
{
    const catsNew = [...cats];
    catsNew.shift();
    return catsNew;
}
