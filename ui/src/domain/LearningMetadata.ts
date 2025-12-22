
/*
* Learning-focused metadata.
* This is what LoopHole is really about.
* */
export interface LearningMetadata {

    /*
    * Swar's confidence level
    * */
    scl: 0 | 1 | 2 | 3;

    /*
    * Mistakes or misconceptions encountered
    * */
    mistakes: string[];

    /*
    * Algorithms or techniques used.
    * Example: "Boyer-Moore"
    * */
    algorithms: string[];

    /*
    * Number of times the problem was revisited.
    * */
    revisitCount: number;

    /*
    * Last visited timestamp.
    * */
    lastRevisitedAt?: number;
}