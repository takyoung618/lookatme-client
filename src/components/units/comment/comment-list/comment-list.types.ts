import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListPresenterProps {
  UserCommentData: Pick<IQuery, "fetchCommentsWithStoryId"> | undefined;
  FetchMoreUserComments: () => void;
  SpecialistCommentData:
    | Pick<IQuery, "fetchSpecialistCommentsWithStoryId">
    | undefined;
  FetchMoreSpecialistComments: () => void;
}
