import { gql } from "@apollo/client";


export const CREATE_COMMENT = gql`
    mutation createComment($createCommentInput: CreateCommentInput!){
        createComment(createCommentInput: $createCommentInput){
            id
            text
            isReported
            createdAt
            updatedAt
            user
            story {
                user
                likedusers
                comments
                specialistComments {
                    id
                    text
                    isReported
                    createdAt
                    specialist {
                        id
                        name
                    }
                    story
                }
                category
            }
        }
    }
`