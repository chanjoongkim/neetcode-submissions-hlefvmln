class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        if (!path || path.at(0) !== '/') {
            return '';
        } 

        const items = path.split('/');
        console.log(items);
        const stack = [];
        let result = '/';
        for (const item of items) {
            // if item = '', ignore because this means it was just one or more slashes
            if (item === '') {
                continue;
            }

            if (item === '.') {
                // ignore if it's single dot meaning current directory as it's a no-op
                continue;
            }
            else if (item === '..') {
                // we should pop the last item from the stack
                stack.pop();
            }
            // directory/file name, so add to stack
            else {
                stack.push(item);
            }
        }
        console.log(stack);

        // build result string from stack
        return '/' + stack.join('/');
    }
}
