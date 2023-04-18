# Round Robin Tournament Generator
You are organizing a tournament, so you need to build a matches table.

The tournament is composed by 20 teams. It is a round-robin tournament (all-play-all), so it has 19 rounds, and each team plays once per round. Each team confront the others once in the tournament (each match does not repeat in the tournament).

Your mission is to implement a function "buildMatchesTable" that receives the number of teams (always a positive and even number) and returns a matrix. Each line of the matrix represents one round. Each column of the matrix represents one match. The match is represented as an array with two teams. Each team is represented as a number, starting from 1 until the number of teams.

Example:

```
buildMatchesTable(4)
```

Should return a matrix like that:

```
[
  [[1,2], [3, 4]],  // first round:  1 vs 2, 3 vs 4
  [[1,3], [2, 4]],  // second round: 1 vs 3, 2 vs 4
  [[1,4], [2, 3]]   // third round:  1 vs 4, 2 vs 3
]
```

You should not care about the order of the teams in the match, nor the order of the matches in the round. You should just care about the rules of the tournament.

## hint 1
total rounds will always be number of teams minus 1

## hint 2
keep the first team fixed, but rotate all other teams each round until you get to the end

## stretch goal
accept an odd number of teams, and the whoever doesn't get matched up gets a "bye" that round.

# C3ProjectTemplate

See solutions in different languages in the "Templates" directory. Once you decide which language you'd like to use,
simply open that directory in your favorite IDE, and you should be able to run the included unit tests "out of the box".

The recommended IDEs are as follows, but feel free to use whatever IDE you are comfortable with.

-   [C#](Templates/C#) - [Microsoft Visual Studio](https://visualstudio.microsoft.com/vs/community/)
-   [Java](Templates/Java) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [JavaScript](Templates/JavaScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
-   [Kotlin](Templates/Kotlin) - [IntelliJ Idea](https://www.jetbrains.com/idea/download) (Community Edition is fine)
-   [TypeScript](Templates/TypeScript) - [Microsoft Visual Studio Code](https://code.visualstudio.com/)
