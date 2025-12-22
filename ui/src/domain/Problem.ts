
/*
* A problem represents a programming challenge
* that exists independently of any solution attempt.
*
* A problem can be revisited many times
* and can have multiple solutions.
*
* */
import {Solution} from "./Solution";
import {ProblemSource} from "./ProblemSource";
import {LearningMetadata} from "./LearningMetadata";
import {ProblemExample} from "./ProblemExample";

export interface Problem {
    id: string;
    title: string;
    source: ProblemSource;
    sourceId?: string;
    description: string;
    examples: ProblemExample[];
    constraints: string[];
    solutions: Solution[];

    learningMetadata: LearningMetadata;
}