import { gql } from "@apollo/client";

export const FETCH_SPECIALISTS = gql`
    query fetchSpecialists {
        fetchSpecialists {
            id
            account
            name
            summary
            imgUrl
            introduction
            career
            price
            specialistReviews {
                id
                text
                rate
                user
                specialist
            }
            specialistComments
            tickets
        }
    }
`