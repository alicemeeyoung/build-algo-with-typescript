/**
 * Consider a perfectly balanced binary tree
 * Balanced: All levels of tree must be filled up
 * Level amoutns can be determined by the power of 2
 *
 * Problem: Return the max items that can exist in a perfectly balanced binary tree
 */

const maxItem = (height: number): number => {
    return 2 ** height - 1;
};

`
max items in heigh = 2^h - 1 (direct formula)
n = 2^h -1
2^h = n+1
h = log2(n+1)
`;
//return the max height of a balanced binary search tree
const maxHeight = (items: number): number => {
    return Math.log2(items + 1);
};
