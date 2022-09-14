export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IAdmin = {
  __typename?: 'Admin';
  email: Scalars['String'];
  id: Scalars['String'];
  nickname: Scalars['String'];
};

export type ICategory = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  story: IStory;
};

export type IChatMessage = {
  __typename?: 'ChatMessage';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  room: IChatRoom;
  user: IUser;
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  id: Scalars['String'];
  room: Scalars['String'];
  ticket: ITicket;
};

export type IComment = {
  __typename?: 'Comment';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  story: IStory;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICreateAdminInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
};

export type ICreateCommentInput = {
  storyId: Scalars['String'];
  text: Scalars['String'];
};

export type ICreateQuoteInput = {
  author: Scalars['String'];
  message: Scalars['String'];
};

export type ICreateSpecialistCommentInput = {
  storyId: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateSpecialistInput = {
  account: Scalars['String'];
  career: Scalars['String'];
  imgUrl: Scalars['String'];
  introduction: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  price: Scalars['Int'];
  summary: Scalars['String'];
};

export type ICreateStoryInput = {
  categoryName: Scalars['String'];
  imgUrl?: InputMaybe<Array<Scalars['String']>>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /** 관리자 로그인 */
  adminLogin: Scalars['String'];
  /** 결제 취소하기 */
  cancelPayment: IPayment;
  /** 토큰 확인 */
  checkToken: Scalars['Boolean'];
  /** 관리자 회원가입 */
  createAdmin: IAdmin;
  /** 댓글 등록 */
  createComment: IComment;
  /** 결제 등록하기 */
  createPayment: IPayment;
  /** 명언 등록 */
  createQuote: IQuote;
  /** 디폴트 명언 목록 등록 */
  createQuoteList: Array<IQuote>;
  /** 전문가 등록 */
  createSpecialist: ISpecialist;
  /** 전문가 답변 등록 */
  createSpecialistComment: ISpecialistComment;
  /** 사연 등록 */
  createStory: IStory;
  createTicket: ITicket;
  /** 회원 가입 및 환영 이메일 전송 */
  createUser: IUser;
  /** 사연 좋아요 취소 */
  deleteLikeStory: IStory;
  /** 로그인한 회원 탈퇴 */
  deleteLoginUser: Scalars['Boolean'];
  /** 자신 댓글 삭제 */
  deleteOwnComment: Scalars['Boolean'];
  /** 자신이 등록한 사연 삭제 */
  deleteOwnStory: Scalars['Boolean'];
  /** 명언 삭제 */
  deleteQuote: Scalars['Boolean'];
  /** 신고 댓글 삭제 */
  deleteReportedComment: Scalars['Boolean'];
  /** 신고 전문가 답변 삭제 */
  deleteReportedSpecialistComment: Scalars['Boolean'];
  /** 신고 사연 삭제 */
  deleteReportedStory: Scalars['Boolean'];
  /** 전문가 삭제 */
  deleteSpecialist: Scalars['Boolean'];
  /** 전문가 자신의 답변 삭제 */
  deleteSpecialistOwnComment: Scalars['Boolean'];
  /** 관리자 권한으로 회원 삭제 */
  deleteUser: Scalars['Boolean'];
  /** 사연 좋아요 */
  likeStory: IStory;
  /** 로그인 */
  login: Scalars['String'];
  /** 로그아웃 */
  logout: Scalars['String'];
  /** 악세스 토큰 재발급 */
  restoreAccessToken: Scalars['String'];
  /** 전문가 계정 복구 */
  restoreSpecialist: Scalars['Boolean'];
  /** 관리자 권한으로 삭제된 회원 복구 */
  restoreUser: Scalars['Boolean'];
  /** 토큰 보내기 */
  sendTokenToSMS: Scalars['String'];
  /** 전문가 로그인 */
  specialistLogin: Scalars['String'];
  /** 댓글 수정 */
  updateComment: IComment;
  /** 명언 수정 */
  updateQuote: IQuote;
  /** 전문가 정보 수정 */
  updateSpecialist: ISpecialist;
  /** 전문가 자신의 답변 수정 */
  updateSpecialistOwnComment: ISpecialistComment;
  /** 사연 수정 */
  updateStory: IStory;
  /** 로그인한 회원 정보 변경 */
  updateUser: IUser;
  /** 로그인한 회원 비밀번호 변경 */
  updateUserPwd: IUser;
  /** 이메일로 회원 비밀번호 변경 */
  updateUserPwdWithEmail: IUser;
  /** 관리자 권한으로 모든 회원정보 수정 */
  updateUserWithAdminAccess: IUser;
  /** 이미지 업로드 API */
  uploadFile: Scalars['String'];
};


export type IMutationAdminLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationCancelPaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
  reason: Scalars['String'];
};


export type IMutationCheckTokenArgs = {
  phoneNumber: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCreateAdminArgs = {
  createAdminInput: ICreateAdminInput;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateQuoteArgs = {
  createQuoteInput: ICreateQuoteInput;
};


export type IMutationCreateSpecialistArgs = {
  createSpecialistInput: ICreateSpecialistInput;
};


export type IMutationCreateSpecialistCommentArgs = {
  createSpecialistCommentInput: ICreateSpecialistCommentInput;
};


export type IMutationCreateStoryArgs = {
  createStoryInput: ICreateStoryInput;
};


export type IMutationCreateTicketArgs = {
  specialistId: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteLikeStoryArgs = {
  storyId: Scalars['String'];
};


export type IMutationDeleteOwnCommentArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteOwnStoryArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteQuoteArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteReportedCommentArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteReportedSpecialistCommentArgs = {
  specialistCommentId: Scalars['String'];
};


export type IMutationDeleteReportedStoryArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteSpecialistArgs = {
  id: Scalars['String'];
};


export type IMutationDeleteSpecialistOwnCommentArgs = {
  specialistCommentId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationLikeStoryArgs = {
  storyId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreSpecialistArgs = {
  id: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  userId: Scalars['String'];
};


export type IMutationSendTokenToSmsArgs = {
  phoneNumber: Scalars['String'];
};


export type IMutationSpecialistLoginArgs = {
  account: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateCommentArgs = {
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdateQuoteArgs = {
  id: Scalars['String'];
  updateQuoteInput: IUpdateQuoteInput;
};


export type IMutationUpdateSpecialistArgs = {
  id: Scalars['String'];
  updateSpecialistInput: IUpdateSpecialistInput;
};


export type IMutationUpdateSpecialistOwnCommentArgs = {
  updateSpecialistCommentInput: IUpdateSpecialistCommentInput;
};


export type IMutationUpdateStoryArgs = {
  updateStoryId: Scalars['String'];
  updateStoryInput: IUpdateStoryInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUpdateUserPwdArgs = {
  newPassword: Scalars['String'];
};


export type IMutationUpdateUserPwdWithEmailArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
};


export type IMutationUpdateUserWithAdminAccessArgs = {
  updateUserWithAdminAccessInput: IUpdateUserWithAdminAccessInput;
  userId: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  file: Array<Scalars['Upload']>;
};

export enum IPayment_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPayment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: IPayment_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  /** 베스트 사연 5개 조회 */
  fetchBestStories: Array<IStory>;
  /** 채팅 기록 조회 */
  fetchChatLogs: Array<IChatMessage>;
  /** 로그인한 회원 정보 조회 */
  fetchLoginUser: IUser;
  /** 자신의 댓글 목록 조회 */
  fetchOwnComments: Array<IComment>;
  fetchOwnTickets: Array<ITicket>;
  /** 결제 목록 조회 */
  fetchPayments: Array<IPayment>;
  /** 명언 조회 */
  fetchQuote: IQuote;
  /** 명언 전체 목록 조회 */
  fetchQuotes: Array<IQuote>;
  /** 신고 댓글 전체 조회 */
  fetchReportedComments: Array<IComment>;
  /** 신고 전문가 답변 전체 조회 */
  fetchReportedSpecialistComments: Array<ISpecialistComment>;
  /** 신고 사연 전체 조회 */
  fetchReportedStories: Array<IStory>;
  /** 선택된 명언 조회 */
  fetchSelectedQuote: IQuote;
  /** 전문가 조회 */
  fetchSpecialist: ISpecialist;
  /** 전문가 전체 목록 조회 */
  fetchSpecialists: Array<ISpecialist>;

  /** 사연 전체 목록 조회 */
  fetchStories: Array<IStory>;

  /** 댓글순으로 사연 조회 */
  fetchStoriesByComment: Array<IStory>;
  /** 좋아요순으로 사연 조회 */
  fetchStoriesByLike: Array<IStory>;
  /** 시간순으로 사연 조회 */
  fetchStoriesByTime: Array<IStory>;

  /** ID로 사연 조회 */
  fetchStory: IStory;

  /** 이메일로 회원 조회 */
  fetchUserWithEmail: IUser;
  /** 전화번호로 회원 조회 */
  fetchUserWithPhoneNumber: IUser;
  /** 모든 회원 조회 */
  fetchUsers: Array<IUser>;
  /** 삭제된 회원도 같이 조회 */
  fetchUsersWithDeleted: Array<IUser>;
};


export type IQueryFetchChatLogsArgs = {
  room: Scalars['String'];
};


export type IQueryFetchQuoteArgs = {
  id: Scalars['String'];
};


export type IQueryFetchSpecialistArgs = {
  id: Scalars['String'];
};


export type IQueryFetchStoriesByCommentArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchStoriesByLikeArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchStoriesByTimeArgs = {
  categoryName?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchStoryArgs = {
  storyId: Scalars['String'];
}

export type IQueryFetchStoriesArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchStoriesByCommentArgs = {
  categoryName: Scalars['String'];
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchStoriesByLikeArgs = {
  categoryName: Scalars['String'];
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchStoriesByTimeArgs = {
  categoryName: Scalars['String'];
  page?: InputMaybe<Scalars['Float']>;
};


export type IQueryFetchUserWithEmailArgs = {
  email: Scalars['String'];
};


export type IQueryFetchUserWithPhoneNumberArgs = {
  phoneNumber: Scalars['String'];
};

export type IQuote = {
  __typename?: 'Quote';
  author: Scalars['String'];
  id: Scalars['String'];
  isSelected: Scalars['Boolean'];
  message: Scalars['String'];
};

export type ISpecialist = {
  __typename?: 'Specialist';
  account: Scalars['String'];
  career: Scalars['String'];
  id: Scalars['String'];
  imgUrl: Scalars['String'];
  introduction: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  specialistComments: Array<ISpecialistComment>;
  specialistReviews: Array<ISpecialistReview>;
  summary: Scalars['String'];
  tickets: Array<ITicket>;
};

export type ISpecialistComment = {
  __typename?: 'SpecialistComment';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  specialist: ISpecialist;
  story: IStory;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type ISpecialistReview = {
  __typename?: 'SpecialistReview';
  id: Scalars['String'];
  rate: Scalars['Float'];
  specialist: ISpecialist;
  text: Scalars['String'];
  user: IUser;
};

export type IStory = {
  __typename?: 'Story';
  category: ICategory;
  commentCounts: Scalars['Int'];
  comments: Array<IComment>;
  createAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  likedusers: Array<IUser>;
  likes: Scalars['Int'];
  specialistComments: Array<ISpecialistComment>;
  text: Scalars['String'];
  title: Scalars['String'];
  user: IUser;
};

export type ITicket = {
  __typename?: 'Ticket';
  chatRoom: IChatRoom;
  createdAt: Scalars['DateTime'];
  expired: Scalars['DateTime'];
  id: Scalars['String'];
  refunded: Scalars['Boolean'];
  specialist: ISpecialist;
  used: Scalars['Boolean'];
  user: IUser;
};

export type IUpdateCommentInput = {
  commentId: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};

export type IUpdateQuoteInput = {
  author?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

export type IUpdateSpecialistCommentInput = {
  specialistCommentId: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateSpecialistInput = {
  career?: InputMaybe<Scalars['String']>;
  imgUrl?: InputMaybe<Scalars['String']>;
  introduction?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  summary?: InputMaybe<Scalars['String']>;
};

export type IUpdateStoryInput = {
  categoryName?: InputMaybe<Scalars['String']>;
  imgUrl?: InputMaybe<Array<Scalars['String']>>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserWithAdminAccessInput = {
  email?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  comments: Array<IComment>;
  email: Scalars['String'];
  id: Scalars['String'];
  likedStories: Array<IStory>;
  nickname: Scalars['String'];
  phone_number: Scalars['String'];
  point: Scalars['Int'];
  specialistReviews: Array<ISpecialistReview>;
  stories: Array<IStory>;
  tickets: Array<ITicket>;
};
