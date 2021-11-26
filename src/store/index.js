import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: [
            {
                id: 1,
                title: 'Lorem ipsum',
                content: 'Donec egestas at dolor non cursus. Fusce faucibus nulla ante, ut feugiat diam iaculis nec. Phasellus gravida tortor sit amet dolor sollicitudin, in dictum sapien molestie. In scelerisque dictum urna. Aliquam erat volutpat. Curabitur commodo maximus tortor, in vulputate orci rutrum placerat. Aliquam non tortor pharetra, volutpat nibh et, vestibulum arcu praesent convallis nulla mi, sit amet euismod turpis laoreet ac nulla a tellus mollis, condimentum velit nec, faucibus arcu.'
            },
            {
                id: 2,
                title: 'Lorem ipsum dolor',
                content: 'In viverra tincidunt cursus. Morbi a erat id risus rhoncus cursus.Praesent convallis nulla mi, sit amet euismod turpis laoreet ac. Nulla a tellus mollis, condimentum velit nec, faucibus arcu.'
            },
            {
                id: 3,
                title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                content: 'In placerat arcu eu venenatis aliquam.'
            }
        ]
    },

    getters: {
        POSTS: state => {
            return state.posts
        }
    },

    mutations: {
        ADD_POST: (state, object) => {
            state.posts.push(object)
        },

        DELETE_POST: (state, id) => {
            const index = state.posts.findIndex(post => post.id === id)
            state.posts.splice(index, 1)
        },

        EDIT_POST: (state, object) => {
            const index = state.posts.findIndex(post => post.id === object.id)
            state.posts[index].title = object.title
            state.posts[index].content = object.content
        }
    }
})