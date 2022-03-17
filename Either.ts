class Either<TLeft, TRight> {
    private readonly value: TLeft | TRight;
    private readonly left: boolean;

    private constructor(value: TLeft | TRight, left: boolean) {
        this.value = value;
        this.left = left;
    }

    isLeft(): boolean {
        return this.left;
    }

    getLeft(): TLeft {
        if (!this.isLeft()) throw new Error();
        return <TLeft>this.value;
    }

    isRight(): boolean {
        return !this.left;
    }

    getRight() {
        if (!this.isRight()) throw new Error();
        return <TRight>this.value;
    }

    static makeLeft(value: TLeft) {
        return new Either(value, true)
    }

    static makeRight<TLeft, TRight>(value: TRight) {
        return new Either<TLeft, TRight>(value, false)
    }
}


enum InputError {
    NoInput,
    Invalid
}

enum Day {
    Monday
}

type Result = Either<InputError, Day>

function parseDayOfWeek(input: string): Result {
    if (input === '') return Either.makeLeft(InputError.NoInput)
    if (input.toLocaleLowerCase() === 'monday') return Either.makeRight(Day.Monday)
    return Either.makeLeft(InputError.Invalid)
}