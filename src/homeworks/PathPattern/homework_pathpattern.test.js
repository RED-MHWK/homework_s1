import {Node} from "./homework_pathpattern.js";

const TREE1 =
    new Node('A', [
        new Node('B', []),
        new Node('C', [
            new Node('X', []),
            new Node('Y', [
                new Node('U', []),
                new Node('V', [])
            ]),
        ]),
        new Node('D', [
            new Node('E', []),
            new Node('F', []),
            new Node('X', []),
        ]),
    ])


describe('test select', () => {

    test('Select a node at a path', () => {
        expect(TREE1.select(['A', 'C', 'Y', 'U'])).toMatchObject({name: 'U'})
    })

    test('Select a node at a path', () => {
        expect(TREE1.select(['A', 'D', 'X'])).toMatchObject({name: 'X'})
    })

    test('Get null for a path pointing to a node not in the tree', () => {
        expect(TREE1.select(['A', 'C', 'E'])).toBeNull()
    })

    test('Select a node at a relative path', () => {
        expect(TREE1.select(['A','C', 'U'])).toMatchObject({name: 'U'})
    })

})
