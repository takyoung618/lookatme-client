import { gql } from "@apollo/client"



export const FETCH_STORY = gql`
    query fetchStory($storyId: String!){
        id
        likes
        commentCounts
        title
        text
        createAt
        user {
            nickname
        }
        category {
            name
        }
    }
`

// export const FETCH_STORIES = gql`
//     query fetchStories($page: int) {
//         fetchStories(page: $page) {
//             id
//             likes
//             commentCounts
//             title
//             text
//             user {
//                 nickname
//             }
//             isReported
//             category {
//                 id
//                 name
//             }
//         }
//     }
// `

export const DELETE_OWN_STORY = gql`
    mutation deleteOwnStory($id: String!) {
        deleteOwnStory(id: $id)
    }

`