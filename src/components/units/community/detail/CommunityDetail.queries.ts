import { gql } from "@apollo/client"

export const FETCH_STORY = gql`
    query fetchStory($storyId: String!){
        fetchStory(storyId: $storyId){
            id
            likes
            commentCounts
            title
            text
            createAt
            user {
                nickname
            }
            storyImage {
            url
            }
            category {
                name
            }
        }   
    }
`

export const LIKE_STORY = gql`
    mutation likeStory($storyId: String!){
        likeStory(storyId: $storyId){
            likes
        }
    }
`


export const DELETE_OWN_STORY = gql`
    mutation deleteOwnStory($id: String!) {
        deleteOwnStory(id: $id)
    }

`