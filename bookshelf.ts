
import * as knex from './knexfile';
import Bookshelf from 'bookshelf';
const bookshelf = Bookshelf(knex as any);
const { Model } = bookshelf;
// Resolve circular dependencies with relations
bookshelf.plugin(require('bookshelf-eloquent'));
export default Model;
export { bookshelf };
