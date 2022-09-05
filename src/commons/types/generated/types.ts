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

export type IComment = {
  __typename?: 'Comment';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  story: IStory;
  text: Scalars['String'];
  user: IUser;
};

export type ICreateAdminInput = {
  email: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
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
  /** 결제 등록하기 */
  createPayment: IPayment;
  /** 회원 가입 및 환영 이메일 전송 */
  createUser: IUser;
  /** 회원탈퇴 */
  deleteLoginUser: Scalars['Boolean'];
  /** 회원 삭제 */
  deleteUser: Scalars['Boolean'];
  /** 로그인 */
  login: Scalars['String'];
  /** 로그아웃 */
  logout: Scalars['String'];
  /** 악세스 토큰 재발급 */
  restoreAccessToken: Scalars['String'];
  /** 삭제된 회원 복구 */
  restoreUser: Scalars['Boolean'];
  /** 토큰 보내기 */
  sendTokenToSMS: Scalars['String'];
  /** 회원정보 수정 */
  updateUser: IUser;
  /** 회원 비밀번호 변경 */
  updateUserPwd: IUser;
  /** 이미지 업로드 API */
  uploadFile: Array<Scalars['String']>;
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
  token: Scalars['String'];
};


export type IMutationCreateAdminArgs = {
  createAdminInput: ICreateAdminInput;
};


export type IMutationCreatePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteUserArgs = {
  userId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreUserArgs = {
  userId: Scalars['String'];
};


export type IMutationSendTokenToSmsArgs = {
  phone_number: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
  userId: Scalars['String'];
};


export type IMutationUpdateUserPwdArgs = {
  newPassword: Scalars['String'];
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
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
  /** 로그인한 회원 정보 조회 */
  fetchLoginUser: IUser;
  /** 이메일로 회원 조회 */
  fetchUser: IUser;
  /** 모든 회원 조회 */
  fetchUsers: Array<IUser>;
  /** 삭제된 회원도 같이 조회 */
  fetchUsersWithDeleted: Array<IUser>;
};


export type IQueryFetchUserArgs = {
  email: Scalars['String'];
};

export type ISpecialist = {
  __typename?: 'Specialist';
  account: Scalars['String'];
  carrer: Scalars['String'];
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
  categories: Array<ICategory>;
  comments: Array<IComment>;
  id: Scalars['String'];
  isReported: Scalars['Boolean'];
  likedusers: Array<IUser>;
  likes: Scalars['Int'];
  specialistComments: Array<ISpecialistComment>;
  text: Scalars['String'];
  user: IUser;
};

export type ITicket = {
  __typename?: 'Ticket';
  createdAt: Scalars['DateTime'];
  expired: Scalars['DateTime'];
  id: Scalars['String'];
  refunded: Scalars['Boolean'];
  specialist: ISpecialist;
  used: Scalars['Boolean'];
  user: IUser;
};

export type IUpdateUserInput = {
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
