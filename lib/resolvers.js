'use strict'

/**
 * Mocked database for courses
 * @constant {Course[]} - Array of courses.
 */
const courses = [
  {
    _id: '61f9af83fc13ae16f6000000',
    title: 'Fear',
    teacher: 'Philip Pittham',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    topic: 'Let it Rain (Parlez-moi de la pluie)',
  },
  {
    _id: '61f9af83fc13ae16f6000001',
    title: 'Battlefield Baseball (Jigoku kôshien)',
    teacher: 'Octavia Brett',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    topic: 'Endless Love',
  },
  {
    _id: '61f9af83fc13ae16f6000002',
    title: 'Continental Divide',
    teacher: 'Helene Paul',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    topic: 'Bucket Of Blood, A',
  },
]

/**
 * GraphQL resolvers.
 * @property {Object} Query - GraphQL query resolvers.
 * @method Query.getCourses - Get courses resolver.
 */
export const resolvers = {
  Query: {
    /**
     * Retrieve all courses from source.
     * @returns {Course[]} - Array of courses.
     */
    getCourses: () => courses,
  },
}
