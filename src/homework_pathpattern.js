class Node {
    //parent;
    //siblings;
    children = null;

    /**
     * @param name: string
     * @param children: Array<Node>
     */
    constructor(name, children) {
        this.name = name;
        this.children = children;
    }

    /**
 *
 * @param path: Array<string> - A path to a node
 * @return Node: node referred to be the path or null if not found
 *
 *
 */

select(path, pathTaken=[]) {

    const [first, ...rest] = path;
    pathTaken.push(this.name);
    if (this.name === first) {
        if (rest.length === 0) {
            return this;
        }
        else {
            for (let child of this.children) {
                if(rest[0] === this.children[1].name){
                    child.select(rest, this.children[1]);
                }
                const result = child.select(rest, pathTaken);
                if (result) {
                    return pathTaken, result;
                }
            }
        }
    }
    return null;
}
}

export {Node}