import { gql } from "@apollo/client";

export const CREATE_STORY = gql`
    mutation createStory($createStoryInput: CreateStoryInput!){
       createStory(createStoryInput: $createStoryInput) {
        id
        likes
        title
        text
        isReported
        user {
            id
            nickname
        }
        category {
            id
            name
            story {
                id
            }
        }
       }
    }
`

export const UPDATE_STORY = gql`
    mutation updateStory($updateStoryInput: UpdateStoryInput!){
        updateStory(updateStoryInput: $updateStoryInput) {
            id
            likes
            title
            text
            isReported
            user {
                id
                nickname
            }
            category {
                id
                name
                story {
                    id
                }
            }
        }
    }
`
