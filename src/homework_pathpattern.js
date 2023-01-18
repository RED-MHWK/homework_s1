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

select(path, pathTaken=[{}]) {

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

/* Notes

    pathTaken erstmal kontroll-placeholder, später eventuell verwendbar um nach finden des Ziel-Nodes rückwärtsgewandt den Realpfad auszugeben.
    Aktuell eher ein Verzeichnis in welcher Reihenfolge die Nodes abgefragt wurden.

    child.select(rest, this.children[1]);   -   immernoch nicht 100 prozentig sicher ob das gewünschte Ergebniss bei rum kommt aber erstmal schauen ob wir so weit kommen...

    rest[0] === this.children[1].name   -   wird zwar verglichen aber bei gleichem Namen trotzdem die kondition nicht erfüllt..

    pathTaken.push is not a function   -   typeerror seit Git push..
 */