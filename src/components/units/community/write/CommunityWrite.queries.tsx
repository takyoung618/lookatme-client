import { gql } from "@apollo/client";

export const CREATE_STORY = gql`
    mutation createStory($createStoryInput: CreateStoryInput!){
       createStory(createStoryInput: $createStoryInput) {
        id
        title
        text
        category {
            id
            name
        }
       }
    }
`

export const UPDATE_STORY = gql`
    mutation updateStory($updateStoryId: String! $updateStoryInput: UpdateStoryInput!){
        updateStory(updateStoryId: $updateStoryId updateStoryInput: $updateStoryInput) {
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
