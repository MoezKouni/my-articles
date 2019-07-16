let id = 1
const initialState = [
    {
        id: id++,
        title: 'Learn React the hard way',
        img: 'https://cdn-images-1.medium.com/max/1500/1*z0teiQBZw9e0iPWlD47jTw.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet pellentesque mauris. Praesent malesuada porta purus, quis euismod erat. Fusce imperdiet turpis eleifend metus sagittis, et tincidunt enim semper. Praesent maximus sed massa a suscipit. Praesent rutrum nulla id arcu sodales, vel tempus turpis lacinia. Mauris bibendum semper dignissim. Etiam nec volutpat quam, in dignissim nisi. Praesent a euismod nisl, ut bibendum massa. In eu metus facilisis, vulputate leo quis, convallis ex. Phasellus vel elit at libero dapibus pharetra. Maecenas justo quam, dignissim nec elit in, congue pharetra tellus.Aenean rutrum posuere ipsum quis lacinia. Ut vehicula ultricies vehicula. Phasellus rutrum pellentesque eleifend. Vivamus a diam in metus mattis hendrerit. Donec bibendum, arcu nec ultricies tempor, lorem dui fringilla arcu, at dignissim velit nunc in tellus. Curabitur sit amet felis ac nisi molestie porta. Sed iaculis ligula vitae ultrices interdum. Vivamus rhoncus tincidunt suscipit. Ut vel nisl vel sapien sagittis tempor ac sed dolor. Nullam lobortis vulputate elit nec commodo.',
    },
    {
        id: id++,
        title: '10 Steps to learn Javascript',
        img: 'https://oschool.ci/wp-content/uploads/2019/02/Image-des-cours-oschool-1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet pellentesque mauris. Praesent malesuada porta purus, quis euismod erat. Fusce imperdiet turpis eleifend metus sagittis, et tincidunt enim semper. Praesent maximus sed massa a suscipit. Praesent rutrum nulla id arcu sodales, vel tempus turpis lacinia. Mauris bibendum semper dignissim. Etiam nec volutpat quam, in dignissim nisi. Praesent a euismod nisl, ut bibendum massa. In eu metus facilisis, vulputate leo quis, convallis ex. Phasellus vel elit at libero dapibus pharetra. Maecenas justo quam, dignissim nec elit in, congue pharetra tellus.Aenean rutrum posuere ipsum quis lacinia. Ut vehicula ultricies vehicula. Phasellus rutrum pellentesque eleifend. Vivamus a diam in metus mattis hendrerit. Donec bibendum, arcu nec ultricies tempor, lorem dui fringilla arcu, at dignissim velit nunc in tellus. Curabitur sit amet felis ac nisi molestie porta. Sed iaculis ligula vitae ultrices interdum. Vivamus rhoncus tincidunt suscipit. Ut vel nisl vel sapien sagittis tempor ac sed dolor. Nullam lobortis vulputate elit nec commodo.'   , 
    }
]

const ArticleReducer = (state= initialState, action) => {
    switch(action.type){
        case 'ADD_ARTICLE':
            return(
                state.concat(action.newarticle)
            )
        case 'DELETE_ARTICLE':
            return(
                state.filter((el,index) => index!== action.id)
            )
        case 'EDIT_ARTICLE':
            return(
                state.map(el => el.id === action.editarticle.id ? action.editarticle : el)
            )
        default:
            return state
    }
}

export default ArticleReducer;