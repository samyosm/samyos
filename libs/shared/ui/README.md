# SamyOS UI

## Separations

All elements are seperated into four categories.

They are subject to the following restrictions:

- Liskov subsitution principle; i.e. it must accept all its HTML Attributes
- Open/closed principle; i.e. it must make use of the children prop if possible
- Interface segregation principle; i.e. its won't accept other props than it's own props interface
- Being pure components; i.e. be memoized before export

### 1. Layouts

Constitute how elements are organized; e.g. list or grid.

### 2. Atoms

Dumb elements that can’t be broken down without ceasing to be functional; e.g. buttons, inputs and dividers.

Restrictions:

- May use layouts, but nothing else
- No fetching
- Single element

### 3. Molecules

Combined Atoms & Layouts to form a more complete element.

Restrictions:

- One job
- One function within a system
- Expandible
- Let place for dependency inversion princple

E.g. a search input with a button and a label.

### 4. Organism

Complex elements that combine molecules, atoms and layouts.

**Note:** This library only contains shared organisms, but most organisms will be proper to a single application.

Restrictions:

- Server components
- No CSS
- No HTML Elements
