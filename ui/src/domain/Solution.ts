
/*
* One solution attempt for a problem.
* There is no concept of a "final" solution.
* */
export interface Solution {

    id: string;

    /*
    * Programming language used.
    * Example: "java", "python"
    * */
    language: string;

    /*
    * High-level explanation of the approach.
    * */
    approach: string;

    /*
    * The actual code written.
    * */
    code: string;

    /*
    * Creation timestamp.
    * */
    createdAt: number;
}