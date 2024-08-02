// ------------------------------------------------------
// THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
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

export interface IAboutPageDto {
  __typename?: 'AboutPageDTO';
  /** about */
  about: Scalars['String'];
  /** address */
  address: Scalars['String'];
  createdDate: Scalars['DateTime'];
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** Facebook */
  facebook: Scalars['String'];
  /** fax */
  fax?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** Instagram */
  instagram: Scalars['String'];
  /** let's talk  */
  letsTalk?: Maybe<Scalars['String']>;
  logo?: Maybe<IAssetModelRelationDto>;
  /** Mobile phone */
  mobilePhone?: Maybe<Scalars['String']>;
  /** see our goal */
  seeOurGoal: Scalars['String'];
  team?: Maybe<Array<IAboutTeamDto>>;
  /** Tiktok */
  tiktok: Scalars['String'];
  /** title */
  title: Scalars['String'];
  /** Twitter */
  twitter: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export interface IAboutTeamDto {
  __typename?: 'AboutTeamDTO';
  createdDate: Scalars['DateTime'];
  /** Email */
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo?: Maybe<IAssetModelRelationDto>;
  /** Name */
  name: Scalars['String'];
  /** Order */
  order: Scalars['Int'];
  /** position */
  position?: Maybe<Scalars['String']>;
  updatedDate: Scalars['DateTime'];
}

export interface IAcceptedReviewInput {
  id: Scalars['Int'];
  /** Signed Condition Reviewer */
  isSignedConditionReviewer: Scalars['Boolean'];
}

export interface IAddAssetsToHomePageUserInput {
  assetIds: Array<Scalars['Int']>;
  homePageUserId: Scalars['Int'];
}

export interface IAddContactInput {
  cityId: Scalars['Int'];
  countryId: Scalars['Int'];
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  /** Email */
  email: Scalars['String'];
  /** Mobile phone */
  mobilePhone?: InputMaybe<Scalars['String']>;
  /** Name */
  name: Scalars['String'];
  /** Office phone */
  officePhone?: InputMaybe<Scalars['String']>;
}

export interface IAddDateReviewInput {
  dateReview: Scalars['DateTime'];
  id: Scalars['Int'];
}

export interface IAddDirectoryInReviewInput {
  id: Scalars['Int'];
  requestIds: Array<Scalars['Int']>;
}

export interface IAddItemsInPortfolioInput {
  assetIds?: InputMaybe<Array<Scalars['Int']>>;
  id: Scalars['Int'];
  projectIds?: InputMaybe<Array<Scalars['Int']>>;
}

export interface IAddPortfoliosToHomePageUserInput {
  homePageUserId: Scalars['Int'];
  portfolioIds: Array<Scalars['Int']>;
}

export interface IAddRelationCollectionDto {
  assetIds?: InputMaybe<Array<Scalars['Int']>>;
  id: Scalars['Int'];
  postIds?: InputMaybe<Array<Scalars['Int']>>;
  projectIds?: InputMaybe<Array<Scalars['Int']>>;
  /** agency, talent, production */
  userIds?: InputMaybe<Array<Scalars['Int']>>;
}

export interface IAddRelationFavoritesDto {
  assetId?: InputMaybe<Scalars['Int']>;
  postId?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['Int']>;
  /** agency, talent, production */
  userId?: InputMaybe<Scalars['Int']>;
}

export interface IAddReviewInput {
  /** Review duration */
  duration: ReviewDurationEnum;
  /** Signed Condition Client */
  isSignedConditionClient: Scalars['Boolean'];
  reviewerId: Scalars['Int'];
}

export interface IAdminModel {
  __typename?: 'AdminModel';
  createdDate: Scalars['DateTime'];
  /** Email */
  email: Scalars['String'];
  id: Scalars['Int'];
  /** Block */
  isBlocked: Scalars['Boolean'];
  /** Is Admin superAdmin */
  isSuperAdmin: Scalars['Boolean'];
  /** Logo */
  logo?: Maybe<IAssetModel>;
  /** Name */
  name: Scalars['String'];
  /** position */
  position?: Maybe<Scalars['String']>;
  /** Reason for blocking */
  reasonBlocked?: Maybe<Scalars['String']>;
  /** surname */
  surname?: Maybe<Scalars['String']>;
  updatedDate: Scalars['DateTime'];
  /** Date and time of verification. */
  verificationDate?: Maybe<Scalars['DateTime']>;
}

export interface IAdminModelDto {
  __typename?: 'AdminModelDTO';
  createdDate: Scalars['DateTime'];
  /** Email */
  email: Scalars['String'];
  id: Scalars['Int'];
  /** Block */
  isBlocked: Scalars['Boolean'];
  /** Is Admin superAdmin */
  isSuperAdmin: Scalars['Boolean'];
  logo?: Maybe<IAssetModelRelationDto>;
  /** Name */
  name: Scalars['String'];
  /** position */
  position?: Maybe<Scalars['String']>;
  /** surname */
  surname?: Maybe<Scalars['String']>;
  updatedDate: Scalars['DateTime'];
}

export interface IAdminModelFrontDto {
  __typename?: 'AdminModelFrontDTO';
  id: Scalars['Int'];
}

export interface IAgencyUpdateDto {
  cityIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Contact Email */
  contactEmail?: InputMaybe<Scalars['String']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /** Name */
  name?: InputMaybe<Scalars['String']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Short description */
  shortDescription?: InputMaybe<Scalars['String']>;
  /** Slug */
  slug?: InputMaybe<Scalars['String']>;
  social?: InputMaybe<ISocialDto>;
}

export enum AgentRoleEnum {
  Agent = 'agent',
  Contentmanager = 'contentmanager',
  Producer = 'producer'
}

export interface IAgentUpdateInput {
  /** Contact Email */
  contactEmail?: InputMaybe<Scalars['String']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /** Name */
  name?: InputMaybe<Scalars['String']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Slug */
  slug?: InputMaybe<Scalars['String']>;
  social?: InputMaybe<ISocialDto>;
}

export interface IAssetIdDto {
  id: Scalars['Int'];
}

export interface IAssetModel {
  __typename?: 'AssetModel';
  /** Admin */
  admin?: Maybe<IAdminModel>;
  /** Categories */
  categories?: Maybe<Array<ICategoryModel>>;
  createdDate: Scalars['DateTime'];
  /** Description for video */
  description: Scalars['String'];
  filename: Scalars['String'];
  hashname: Scalars['String'];
  /** height */
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** Logo for video */
  logo?: Maybe<IAssetModel>;
  mimetype: Scalars['String'];
  /** Owner */
  owner?: Maybe<IUserModel>;
  /** Persons */
  person?: Maybe<Array<Scalars['String']>>;
  projects: Array<IProjectToAssetModel>;
  /** Size */
  size: Scalars['Int'];
  /** tags */
  tags?: Maybe<Array<ITagModel>>;
  title: Scalars['String'];
  type: FileTypeEnum;
  updatedDate: Scalars['DateTime'];
  url: Scalars['String'];
  /** width */
  width?: Maybe<Scalars['Int']>;
}

export interface IAssetModelRelationDto {
  __typename?: 'AssetModelRelationDTO';
  createdDate: Scalars['DateTime'];
  /** Description for video */
  description: Scalars['String'];
  /** height */
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  logo?: Maybe<IAssetModelRelationDto>;
  /** Persons */
  person?: Maybe<Array<Scalars['String']>>;
  projects?: Maybe<Array<IProjectToAssetModelDto>>;
  /** Size */
  size: Scalars['Int'];
  tags?: Maybe<Array<ITagModelDto>>;
  title: Scalars['String'];
  type: FileTypeEnum;
  updatedDate: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  /** width */
  width?: Maybe<Scalars['Int']>;
}

export interface IAssetsAndProjectsByPortfolioIdInput {
  /** parameters for pagination */
  paginate?: InputMaybe<IPaginateDto>;
  portfolioId: Scalars['Int'];
}

/** Assets */
export interface IAssetsModel {
  __typename?: 'AssetsModel';
  items: Array<IAssetModel>;
  meta: IPaginateModel;
}

export interface IAssignUserToAgentInput {
  agentId: Scalars['Int'];
  talentId: Scalars['Int'];
}

export interface ICategoriesModel {
  __typename?: 'CategoriesModel';
  items: Array<ICategoryModelRelationDto>;
  meta: IPaginateModel;
}

export interface ICategoriesTalentByAgencyDto {
  agencyId: Scalars['Int'];
}

export interface ICategoryIdDto {
  id: Scalars['Int'];
}

export interface ICategoryModel {
  __typename?: 'CategoryModel';
  /** Admin */
  admin?: Maybe<IAdminModel>;
  assets: Array<IAssetModel>;
  children?: Maybe<Array<ICategoryModel>>;
  /** Number of uses in search */
  countSearch: Scalars['Int'];
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  /** Name */
  name: Scalars['String'];
  parent?: Maybe<ICategoryModel>;
  posts: Array<IPostModel>;
  profiles: Array<IUserModel>;
  projects: Array<IProjectModel>;
  /** Slug */
  slug: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export interface ICategoryModelDto {
  __typename?: 'CategoryModelDTO';
  id?: Maybe<Scalars['Int']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Slug */
  slug?: Maybe<Scalars['String']>;
}

export interface ICategoryModelRelationDto {
  __typename?: 'CategoryModelRelationDTO';
  /** Number of uses in search */
  countSearch: Scalars['Int'];
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  /** Name */
  name: Scalars['String'];
  profiles?: Maybe<Array<IUserModel>>;
  /** Slug */
  slug: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export interface ICategoryToAssetDto {
  assetId: Scalars['Int'];
  id: Scalars['Int'];
}

export interface ICheckDeleteAssetsInput {
  assetIds: Array<Scalars['Int']>;
}

/** Cities */
export interface ICitiesModel {
  __typename?: 'CitiesModel';
  items: Array<ICityModel>;
  meta: IPaginateModel;
}

export interface ICityModel {
  __typename?: 'CityModel';
  catalogCode?: Maybe<Scalars['Int']>;
  /** Countries */
  country: ICountryModel;
  createdDate: Scalars['DateTime'];
  elevation: Scalars['Int'];
  id: Scalars['Int'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  population: Scalars['Int'];
  timezone: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export interface ICollectionIdDto {
  id?: InputMaybe<Scalars['Int']>;
}

export interface ICollectionItemDto {
  __typename?: 'CollectionItemDTO';
  asset?: Maybe<IAssetModelRelationDto>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  owner?: Maybe<IUserModelDto>;
  post?: Maybe<IPostModelDto>;
  project?: Maybe<IProjectModelDto>;
  updatedDate: Scalars['DateTime'];
  user?: Maybe<IUserModelDto>;
}

export interface ICollectionItemsDto {
  __typename?: 'CollectionItemsDTO';
  items: Array<ICollectionItemDto>;
  meta: IPaginateModel;
}

export interface ICollectionModel {
  __typename?: 'CollectionModel';
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  items?: Maybe<ICollectionItemsDto>;
  /** Name */
  name: Scalars['String'];
  /** Owner */
  owner: IUserModel;
  updatedDate: Scalars['DateTime'];
}

export interface ICollectionPaginateDto {
  collectionId: Scalars['Int'];
  paginate?: InputMaybe<IPaginateDto>;
}

/** Collection user with paginate */
export interface ICollectionUserWithPaginateModelDto {
  __typename?: 'CollectionUserWithPaginateModelDTO';
  collections: Array<ICollectionItemDto>;
  id: Scalars['Int'];
  meta: IPaginateModel;
  name: Scalars['String'];
}

/** Collections */
export interface ICollectionsModel {
  __typename?: 'CollectionsModel';
  items: Array<ICollectionModel>;
  meta: IPaginateModel;
}

/** Commission */
export interface ICommissionModel {
  __typename?: 'CommissionModel';
  createdDate: Scalars['DateTime'];
  /** Transaction currency */
  currency: ICurrencyModel;
  id: Scalars['Int'];
  /** Enable/disable flag */
  isEnabled: Scalars['Boolean'];
  /** Name */
  name: Scalars['String'];
  /** Transaction type */
  transactionType: TransactionTypeEnum;
  updatedDate: Scalars['DateTime'];
  /** Value */
  value: Scalars['Float'];
  /** Value type */
  valueType: CommissionValueTypeEnum;
}

export enum CommissionValueTypeEnum {
  Fix = 'fix',
  Percent = 'percent'
}

export interface IConsumerUpdateDto {
  /** Contact Email */
  contactEmail?: InputMaybe<Scalars['String']>;
  /** Name */
  name?: InputMaybe<Scalars['String']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']>;
  social?: InputMaybe<ISocialDto>;
  /** Surname */
  surname?: InputMaybe<Scalars['String']>;
}

export interface IContactIdDto {
  id: Scalars['Int'];
}

export interface IContactModel {
  __typename?: 'ContactModel';
  /** City */
  city: ICityModel;
  /** Country */
  country: ICountryModel;
  createdDate: Scalars['DateTime'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Email */
  email: Scalars['String'];
  id: Scalars['Int'];
  /** Logo */
  logo?: Maybe<IAssetModel>;
  /** Mobile phone */
  mobilePhone?: Maybe<Scalars['String']>;
  /** Name */
  name: Scalars['String'];
  /** Office phone */
  officePhone?: Maybe<Scalars['String']>;
  /** Owner */
  owner?: Maybe<IUserModel>;
  updatedDate: Scalars['DateTime'];
}

/** Contact */
export interface IContactModelDto {
  __typename?: 'ContactModelDTO';
  city: ICityModel;
  country: ICountryModel;
  createdDate: Scalars['DateTime'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Email */
  email: Scalars['String'];
  id: Scalars['Int'];
  logo?: Maybe<IAssetModelRelationDto>;
  /** Mobile phone */
  mobilePhone?: Maybe<Scalars['String']>;
  /** Name */
  name: Scalars['String'];
  /** Office phone */
  officePhone?: Maybe<Scalars['String']>;
  owner?: Maybe<IUserModelDto>;
  updatedDate: Scalars['DateTime'];
}

/** Contacts */
export interface IContactsModel {
  __typename?: 'ContactsModel';
  items: Array<IContactModelDto>;
  meta: IPaginateModel;
}

/** Countries */
export interface ICountriesModel {
  __typename?: 'CountriesModel';
  items: Array<ICountryModel>;
  meta: IPaginateModel;
}

export interface ICountryModel {
  __typename?: 'CountryModel';
  code: Scalars['Int'];
  continent: Scalars['String'];
  createdDate: Scalars['DateTime'];
  currencyCode: Scalars['String'];
  currencyName: Scalars['String'];
  fips: Scalars['String'];
  id: Scalars['Int'];
  iso: Scalars['String'];
  iso3: Scalars['String'];
  name: Scalars['String'];
  population?: Maybe<Scalars['Int']>;
  updatedDate: Scalars['DateTime'];
}

export interface ICreateAgentInput {
  agentUuid: Scalars['String'];
  /** Signed Condition */
  isSignedCondition: Scalars['Boolean'];
  /** Name */
  name: Scalars['String'];
  /** @MinLength(8), @MaxLength(64), @NotContains(" "), @IsAscii(), @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/) */
  password: Scalars['String'];
}

export interface ICreateAssetImageDto {
  authorIds?: InputMaybe<Array<Scalars['Int']>>;
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Persons */
  person?: InputMaybe<Array<Scalars['String']>>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
  talentId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ICreateAssetVideoDto {
  authorIds?: InputMaybe<Array<Scalars['Int']>>;
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Description for video */
  description?: InputMaybe<Scalars['String']>;
  /** Persons */
  person?: InputMaybe<Array<Scalars['String']>>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
  talentId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ICreateCollectionDto {
  name: Scalars['String'];
}

export interface ICreateFolderInput {
  assetIds?: InputMaybe<Array<Scalars['Int']>>;
  /** name */
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['Int']>;
}

export interface ICreateHomePageUserInput {
  /** location id */
  locationId: Scalars['Int'];
  /** talent id */
  userId: Scalars['Int'];
}

export interface ICreatePortfolioInput {
  assetIds?: InputMaybe<Array<Scalars['Int']>>;
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Name */
  name: Scalars['String'];
  projectIds?: InputMaybe<Array<Scalars['Int']>>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
}

export interface ICreatePostInput {
  assetIds: Array<Scalars['Int']>;
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  coverIds: Array<Scalars['Int']>;
  /** Description */
  description: Scalars['String'];
  /** Subtitle */
  subtitle?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Title */
  title: Scalars['String'];
  users?: InputMaybe<Array<IUserTypePostInput>>;
}

export interface ICreateProjectDto {
  assetCoverId: Scalars['Int'];
  assetIds: Array<Scalars['Int']>;
  assetItemsIds?: InputMaybe<Array<IItemGridInput>>;
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  cityId: Scalars['Int'];
  /** Description */
  description: Scalars['String'];
  /** list of email addresses */
  inviteEmails?: InputMaybe<Array<Scalars['String']>>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Title */
  title: Scalars['String'];
  users?: InputMaybe<Array<IUserTypeProjectDto>>;
}

export interface ICreateRelationUserNotificationInput {
  agentId?: InputMaybe<Scalars['Int']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
}

export interface ICreateTagDto {
  /** Name */
  name: Scalars['String'];
  /** Slug */
  slug: Scalars['String'];
}

/** Currencies */
export interface ICurrenciesModel {
  __typename?: 'CurrenciesModel';
  items: Array<ICurrencyModel>;
  meta: IPaginateModel;
}

export interface ICurrencyByLetterCodeInput {
  /** Currency code (letter) */
  letterCode: Scalars['String'];
}

/** Currencies Directory */
export interface ICurrencyModel {
  __typename?: 'CurrencyModel';
  createdDate: Scalars['DateTime'];
  /** A number of simbols after comma */
  decimals: Scalars['Int'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** Currency code (letter) */
  letterCode: Scalars['String'];
  /** Currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency code (numeric) */
  numericCode?: Maybe<Scalars['Int']>;
  updatedDate: Scalars['DateTime'];
}

export interface IDeleteAgentsInput {
  agentIds: Array<Scalars['Int']>;
}

export interface IDeleteAssetToHomePageUserInput {
  /** Id object HomePageUserToAssetModel */
  assetItemId: Scalars['Int'];
  homePageUserId: Scalars['Int'];
}

export interface IDeleteAssetsDto {
  assetIds: Array<Scalars['Int']>;
}

export interface IDeleteOrRecoverPostInput {
  id: Scalars['Int'];
}

export interface IDeletePortfolioToHomePageUserInput {
  homePageUserId: Scalars['Int'];
  /** Id object HomePageUserToPortfolioModel */
  portfolioItemId: Scalars['Int'];
}

export interface IDeleteProjectInput {
  projectIds: Array<Scalars['Int']>;
}

export interface IDeleteRelationCollectionDto {
  assetIds?: InputMaybe<Array<Scalars['Int']>>;
  id: Scalars['Int'];
  postIds?: InputMaybe<Array<Scalars['Int']>>;
  projectIds?: InputMaybe<Array<Scalars['Int']>>;
  /** agency, talent, production */
  userIds?: InputMaybe<Array<Scalars['Int']>>;
}

export interface IDeleteRelationFavoritesDto {
  assetIds?: InputMaybe<Array<Scalars['Int']>>;
  postIds?: InputMaybe<Array<Scalars['Int']>>;
  projectIds?: InputMaybe<Array<Scalars['Int']>>;
  /** agency, talent, production */
  userIds?: InputMaybe<Array<Scalars['Int']>>;
}

export interface IFavoriteModel {
  __typename?: 'FavoriteModel';
  asset?: Maybe<IAssetModel>;
  assetId?: Maybe<Scalars['Int']>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  owner?: Maybe<IUserModel>;
  ownerId?: Maybe<Scalars['Int']>;
  post?: Maybe<IPostModel>;
  postId?: Maybe<Scalars['Int']>;
  project?: Maybe<IProjectModel>;
  projectId?: Maybe<Scalars['Int']>;
  updatedDate: Scalars['DateTime'];
  user?: Maybe<IUserModel>;
  userId?: Maybe<Scalars['Int']>;
}

/** Favorite */
export interface IFavoriteModelDto {
  __typename?: 'FavoriteModelDTO';
  asset?: Maybe<IAssetModelRelationDto>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  owner?: Maybe<IUserModelDto>;
  post?: Maybe<IPostModelDto>;
  project?: Maybe<IProjectModelDto>;
  updatedDate: Scalars['DateTime'];
  user?: Maybe<IUserModelDto>;
}

/** Favorites */
export interface IFavoritesModel {
  __typename?: 'FavoritesModel';
  items: Array<IFavoriteModelDto>;
  meta: IPaginateModel;
}

export enum FileTypeEnum {
  Image = 'image',
  Logo = 'logo',
  Seetv = 'seetv',
  Video = 'video',
  Videopreview = 'videopreview'
}

export interface IFilterDto {
  columnName: Scalars['String'];
  operation: FilterOperationEnum;
  type: FilterFieldTypeEnum;
  value: Array<Scalars['String']>;
}

export enum FilterFieldTypeEnum {
  Null = 'NULL',
  Boolean = 'boolean',
  Date = 'date',
  Daterange = 'daterange',
  Number = 'number',
  Numberrange = 'numberrange',
  Text = 'text'
}

export interface IFilterGetDto {
  /** parameters for filtering */
  filters?: InputMaybe<Array<IFilterDto>>;
  /** admin filter */
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  /** show deleted items */
  isWithDeleted?: InputMaybe<Scalars['Boolean']>;
  /** parameters for pagination */
  paginate?: InputMaybe<IPaginateDto>;
  /** parameters for sort */
  sorts?: InputMaybe<Array<ISortDto>>;
}

export enum FilterOperationEnum {
  Contains = 'contains',
  Equal = 'equal',
  NotEqual = 'notEqual'
}

export interface IFolderTreeModelDto {
  __typename?: 'FolderTreeModelDTO';
  children?: Maybe<Array<IFolderTreeModelDto>>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  /** level */
  level: Scalars['Int'];
  logo?: Maybe<IAssetModelRelationDto>;
  /** name */
  name: Scalars['String'];
  owner?: Maybe<IUserModelDto>;
  parent?: Maybe<IFolderTreeModelDto>;
  updatedDate: Scalars['DateTime'];
}

/** Folders */
export interface IFoldersTreeModelDto {
  __typename?: 'FoldersTreeModelDTO';
  items: Array<IFolderTreeModelDto>;
  meta: IPaginateModel;
}

/** General type Id */
export interface IGeneralIdInput {
  id: Scalars['Int'];
}

export interface IGetAgentByUuidInput {
  agentUuid: Scalars['String'];
}

export interface IGetCommissionByOperationInput {
  currencyId?: InputMaybe<Scalars['Int']>;
  /** Transaction type */
  transactionType: TransactionTypeEnum;
}

export interface IGetConnectionRequestsInput {
  isMy: Scalars['Boolean'];
  /** parameters for pagination */
  paginate?: InputMaybe<IPaginateDto>;
}

export interface IGetHomePageUserByTypeAndSlugInput {
  cityId?: InputMaybe<Scalars['Int']>;
  /** Slug */
  slug: Scalars['String'];
  /** Type one is agency, talent, production, agent */
  type: UserTypeEnum;
}

export interface IGetLandingMetadataInput {
  /** domain */
  domain: Scalars['String'];
}

export interface IGetRelationUsersInput {
  agentId?: InputMaybe<Scalars['Int']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  cityId?: InputMaybe<Scalars['Int']>;
  /** parameters for pagination */
  paginate?: InputMaybe<IPaginateDto>;
  /** parameters for sort */
  sorts?: InputMaybe<Array<ISortDto>>;
  type?: InputMaybe<UserTypeEnum>;
  userId: Scalars['Int'];
}

export interface IGetUserByTypeAndSlugInput {
  /** Slug */
  slug: Scalars['String'];
  /** Type one is agency, talent, production, agent */
  type: UserTypeEnum;
}

export interface IGetUserLocationsByAgencyInput {
  agencyId: Scalars['Int'];
}

export interface IHomeModel {
  __typename?: 'HomeModel';
  /** About */
  about?: Maybe<Scalars['String']>;
  /** About caption */
  aboutCaption?: Maybe<Scalars['String']>;
  blockCategories: Array<IHomeToCategoryModel>;
  /** Bottom Left Content */
  bottomLeftContent: Scalars['String'];
  /** Bottom Right Content */
  bottomRightContent: Scalars['String'];
  createdDate: Scalars['DateTime'];
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** Facebook */
  facebook: Scalars['String'];
  id: Scalars['Int'];
  /** Instagram */
  instagram: Scalars['String'];
  /** Mobile phone */
  mobilePhone?: Maybe<Scalars['String']>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** Tiktok */
  tiktok: Scalars['String'];
  /** Title */
  title?: Maybe<Scalars['String']>;
  /** Twitter */
  twitter: Scalars['String'];
  updatedDate: Scalars['DateTime'];
  /** Video */
  video?: Maybe<IAssetModel>;
}

/** HomePageUser assets */
export interface IHomePageUserAssetsDto {
  __typename?: 'HomePageUserAssetsDTO';
  items: Array<IHomePageUserToAssetDto>;
  meta: IPaginateModel;
}

export interface IHomePageUserDataDto {
  __typename?: 'HomePageUserDataDTO';
  agency?: Maybe<IUserModelDto>;
  homePages: Array<IHomePageUserModelDto>;
  otherLocations: Array<IOtherCityDto>;
}

/** HomePageUser items */
export interface IHomePageUserItemsDto {
  __typename?: 'HomePageUserItemsDTO';
  items: Array<IHomePageUserDataDto>;
}

export interface IHomePageUserModel {
  __typename?: 'HomePageUserModel';
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  isDefault: Scalars['Boolean'];
  /** Owner (agency or talent) */
  owner: IUserModel;
  status: HomePageUserStatusEnum;
  updatedDate: Scalars['DateTime'];
  /** User (Talent) */
  user: IUserModel;
}

export interface IHomePageUserModelDto {
  __typename?: 'HomePageUserModelDTO';
  city?: Maybe<ICityModel>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  isDefault: Scalars['Boolean'];
  owner: IUserModelDto;
  status: HomePageUserStatusEnum;
  updatedDate: Scalars['DateTime'];
  user: IUserModelDto;
}

export enum HomePageUserStatusEnum {
  Active = 'active',
  Agreement = 'agreement',
  Create = 'create',
  Reject = 'reject'
}

export interface IHomePageUserToAssetDto {
  __typename?: 'HomePageUserToAssetDTO';
  asset: IAssetModelRelationDto;
  createdDate: Scalars['DateTime'];
  homePageUser?: Maybe<IHomePageUserModelDto>;
  id: Scalars['Int'];
  /** Vertical */
  isVertical: Scalars['Boolean'];
  /** Order */
  order: Scalars['Int'];
  updatedDate: Scalars['DateTime'];
}

export interface IHomePageUserToPortfolioModelDto {
  __typename?: 'HomePageUserToPortfolioModelDTO';
  createdDate: Scalars['DateTime'];
  homePageUser?: Maybe<IHomePageUserModelDto>;
  id: Scalars['Int'];
  /** Order */
  order: Scalars['Int'];
  portfolio: IPortfolioDto;
  updatedDate: Scalars['DateTime'];
}

export interface IHomeToCategoryModel {
  __typename?: 'HomeToCategoryModel';
  /** Category */
  category: ICategoryModel;
  createdDate: Scalars['DateTime'];
  /** Home */
  home: IHomeModel;
  id: Scalars['Int'];
  /** Logo */
  logo: IAssetModel;
  /** Order */
  order: Scalars['Int'];
  updatedDate: Scalars['DateTime'];
}

export interface IInviteAgentInput {
  agentRole: AgentRoleEnum;
  /** Email */
  email: Scalars['String'];
  locationId: Scalars['Int'];
  permissions: Array<PermissionTypeEnum>;
}

export interface IItemGridInput {
  /** Verical element? */
  isVertical?: InputMaybe<Scalars['Boolean']>;
  /** item id */
  itemId: Scalars['Int'];
  /** New position grid */
  order?: InputMaybe<Scalars['Int']>;
}

export interface IKnowledgeBlockModel {
  __typename?: 'KnowledgeBlockModel';
  /** Assets */
  assets?: Maybe<Array<IAssetModel>>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  knowledge: IKnowledgeModel;
  /** Order */
  order: Scalars['Int'];
  subheader?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type: KnowledgeBlockTypeEnum;
  updatedDate: Scalars['DateTime'];
}

export enum KnowledgeBlockTypeEnum {
  Asset = 'asset',
  Largetext = 'largetext',
  Slider = 'slider',
  Text = 'text'
}

export interface IKnowledgeModel {
  __typename?: 'KnowledgeModel';
  /** Admin */
  admin?: Maybe<IAdminModel>;
  blocks: Array<IKnowledgeBlockModel>;
  /** Categories */
  categories?: Maybe<Array<ICategoryModel>>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  status: KnowledgeStatusEnum;
  title: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export interface IKnowledgeModelDto {
  __typename?: 'KnowledgeModelDTO';
  admin?: Maybe<IAdminModelDto>;
  blocks: Array<IKnowledgeBlockModel>;
  categories?: Maybe<Array<ICategoryModel>>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  status: KnowledgeStatusEnum;
  title: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export enum KnowledgeStatusEnum {
  Draft = 'draft',
  Published = 'published'
}

/** Knowledges */
export interface IKnowledgesModel {
  __typename?: 'KnowledgesModel';
  items: Array<IKnowledgeModelDto>;
  meta: IPaginateModel;
}

/** Landing */
export interface ILandingModelDto {
  __typename?: 'LandingModelDTO';
  /** Accent color */
  accentColor?: Maybe<Scalars['String']>;
  /** address */
  address?: Maybe<Scalars['String']>;
  createdDate: Scalars['DateTime'];
  /** dark bg color */
  darkBgColor?: Maybe<Scalars['String']>;
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** Facebook */
  facebook?: Maybe<Scalars['String']>;
  favicon?: Maybe<IAssetModelRelationDto>;
  /** fax */
  fax?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** Instagram */
  instagram?: Maybe<Scalars['String']>;
  /** light bg color */
  lightBgColor?: Maybe<Scalars['String']>;
  logo?: Maybe<IAssetModelRelationDto>;
  /** meta description */
  metaDescription?: Maybe<Scalars['String']>;
  /** meta title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Mobile phone */
  mobilePhone?: Maybe<Scalars['String']>;
  owner?: Maybe<IUserModelDto>;
  /** Tiktok */
  tiktok?: Maybe<Scalars['String']>;
  /** title */
  title?: Maybe<Scalars['String']>;
  /** Twitter */
  twitter?: Maybe<Scalars['String']>;
  updatedDate: Scalars['DateTime'];
}

export interface IMoveAssetsToFolderInput {
  assetIds: Array<Scalars['Int']>;
  folderId?: InputMaybe<Scalars['Int']>;
}

export interface IMutation {
  __typename?: 'Mutation';
  /** @protected - accept home page user */
  acceptHomePageUser: IHomePageUserModelDto;
  /** @protected - accepted review */
  acceptedReview: IReviewModelDto;
  /** @protected - add assets to home page user */
  addAssetsToHomePageUser: Scalars['Boolean'];
  /** @public - add category to asset */
  addCategoryToAsset: ICategoryModel;
  /** @public - add category to profile */
  addCategoryToProfile: ICategoryModel;
  /** @protected - add contact */
  addContact: IContactModel;
  /** @protected - add date review */
  addDateReview: IReviewModelDto;
  /** @protected - Adding directories to the review */
  addDirectoryInReview: IReviewModelDto;
  /** @protected - add items in portfolio folder */
  addItemsInPortfolio: IPortfolioDto;
  /** @protected - add portfolios to home page user */
  addPortfoliosToHomePageUser: Scalars['Boolean'];
  /** @protected - add relation collection */
  addRelationCollection: Scalars['Boolean'];
  /** @protected - add relation favorite */
  addRelationFavorite: Scalars['Boolean'];
  /** @protected - add relation user by notification */
  addRelationUserByNotification: INotificationDto;
  /** @protected - add review */
  addReview: IReviewModelDto;
  /** @public - add tag to profile */
  addTagToProfile: ITagModelDto;
  /** @protected - assign user to agent */
  assignUserToAgent: IUserModel;
  /** @protected - Cancel review (refaund money) */
  cancelReview: IReviewModelDto;
  /** @public - registration agent */
  createAgent: IUserTokenDto;
  /** @public - upload asset image */
  createAssetImage: IAssetModel;
  /** @public - upload asset video */
  createAssetVideo: IAssetModel;
  /** @protected - create collection */
  createCollection: ICollectionModel;
  /** @public - create folder */
  createFolder: IFolderTreeModelDto;
  /** @protected - create home page user */
  createHomePageUser: IHomePageUserModelDto;
  /** @protected - create portfolio folder */
  createPortfolio: IPortfolioDto;
  /** @public - create post */
  createPost: IPostModelDto;
  /** @protected - create project */
  createProject: IProjectModelDto;
  /** @protected - create user relation notification */
  createRelationUserNotification: INotificationDto;
  /** @public - create tag */
  createTag: ITagModel;
  /** @public - user registration */
  createUser: Scalars['Boolean'];
  /** @protected - delete agents */
  deleteAgents: Scalars['Boolean'];
  /** @protected - delete asset on home page user */
  deleteAssetToHomePageUser: Scalars['Boolean'];
  /** @public - delete assets */
  deleteAssets: Scalars['Boolean'];
  /** @public - delete category to asset */
  deleteCategoryToAsset: ICategoryModel;
  /** @public - delete category to profile */
  deleteCategoryToProfile: ICategoryModel;
  /** @protected - delete collection */
  deleteCollection: Scalars['Boolean'];
  /** @protected - delete contact */
  deleteContact: Scalars['Boolean'];
  /** @public - delete folder */
  deleteFolder: Scalars['Boolean'];
  /** @protected - delete home page user (only agent or agency) */
  deleteHomePageUser: Scalars['Boolean'];
  /** @protected - detele items in portfolio folder */
  deleteItemsInPortfolio: IPortfolioDto;
  /** @protected - delete notification */
  deleteNotification: IUserModelDto;
  /** @protected - detele portfolio folder */
  deletePortfolioById: Scalars['Boolean'];
  /** @protected - delete portfolio on home page user */
  deletePortfolioToHomePageUser: Scalars['Boolean'];
  /** @public - delete post */
  deletePost: Scalars['Boolean'];
  /** @protected - delete project */
  deleteProjects: Scalars['Boolean'];
  /** @protected - delete relation user */
  deleteRelationUser: IUserModel;
  /** @protected - delete relation user to agent */
  deleteRelationUserToAgent: IUserModel;
  /** @protected - delete relations collection */
  deleteRelationsCollection: Scalars['Boolean'];
  /** @protected - delete relations collection */
  deleteRelationsFavorite: Scalars['Boolean'];
  /** @public - password recovery */
  forgotPassword: Scalars['Boolean'];
  /** User token generation */
  generateToken: Scalars['String'];
  /** @public - generate Verification Email Code */
  generateVerificationEmailCode: Scalars['Boolean'];
  /** @protected - get user verification URL stripe */
  getUserVerificationURLStripe: Scalars['String'];
  /** @protected - invite agent (only agency) */
  inviteAgent: Scalars['Boolean'];
  /** @public - user authorization */
  login: IUserTokenDto;
  /** @public - user logout */
  logout: Scalars['Boolean'];
  /** @public - move assets to folder */
  moveAssetsToFolder: Scalars['Boolean'];
  /** @protected - open notification */
  openNotification: IUserModelDto;
  /** @protected - Project invite new user */
  projectInviteNewUser: Scalars['Boolean'];
  /** @public - publish or unpublish post */
  publishOrUnpublishPost: IPostModelDto;
  /** @protected - Publish or unpublish project */
  publishOrUnpublishProject: IProjectModelDto;
  /** @protected - publishing agent profile */
  publishUser: IUserModel;
  /** @public - recover post */
  recoverPost: Scalars['Boolean'];
  /** @public - change password via code */
  recoveryPassword: Scalars['Boolean'];
  /** @protected - reject home page user */
  rejectHomePageUser: IHomePageUserModelDto;
  /** @protected - reject relation user by notification */
  rejectRelationUserByNotification: INotificationDto;
  /** @protected - resend invite to agent */
  resendInviteToAgent: Scalars['Boolean'];
  /** @protected - review add rating */
  reviewAddRating: IReviewModelDto;
  /** Review deposit delta balance */
  reviewDeposit: Scalars['String'];
  /** Review paid */
  reviewPaid: IReviewModelDto;
  /** @protected - send home page user confirmation */
  sendHomePageUserConfirmation: IHomePageUserModelDto;
  /** @protected - set default home page user */
  setDefaultHomePageUser: Scalars['Boolean'];
  /** @public - track category */
  trackCategory: Scalars['Boolean'];
  /** @public - track tag */
  trackTag: Scalars['Boolean'];
  /** @protected - unpublishing profile */
  unpublishProfile: IUserModel;
  /** @protected - update agency profile */
  updateAgency: IUserModel;
  /** @protected - update agent profile */
  updateAgent: IUserModel;
  /** @protected - update agents location */
  updateAgentsLocation: IUserModel;
  /** @protected - update Agents Permission Or Role */
  updateAgentsPermissionOrRole: Array<IUserModelDto>;
  /** @public - update asset image and video */
  updateAsset: IAssetModel;
  /** @protected - update asset grid in home page */
  updateAssetGridInHomePage: Scalars['Boolean'];
  /** @protected - update asset grid in portfolio */
  updateAssetGridInPortfolio: Scalars['Boolean'];
  /** @protected - update collection */
  updateCollection: ICollectionModel;
  /** @protected - update consumer profile */
  updateConsumer: IUserModel;
  /** @protected - update contact */
  updateContact: IContactModel;
  /** @protected - Project update cover in assets */
  updateCoverAssetInProject: IProjectModelDto;
  /** @public - update folder */
  updateFolder: IFolderTreeModelDto;
  /** @protected - update items grid in project */
  updateItemsGridInProject: Scalars['Boolean'];
  /** @protected - update landing */
  updateLandingMetadata: ILandingModelDto;
  /** @protected - update portfolio folder */
  updatePortfolio: IPortfolioDto;
  /** @protected - update portfolio cover */
  updatePortfolioCover: Scalars['Boolean'];
  /** @protected - update portfolio order in home page */
  updatePortfolioOrderInHomePage: Scalars['Boolean'];
  /** @public - update post */
  updatePost: IPostModelDto;
  /** @public - update production profile */
  updateProduction: IUserModel;
  /** @protected - update project */
  updateProject: IProjectModelDto;
  /** @protected - Update grid (order and vertical card) - tab projects */
  updateProjectGrid: Scalars['Boolean'];
  /** @protected - update review */
  updateReview: IReviewModelDto;
  /** @public - update talent profile */
  updateTalent: IUserModel;
  /** User status twilio update */
  updateTimeReviewTwilio: Scalars['Boolean'];
  /** @protected - update user context */
  updateUserContext: IUserModelDto;
  /** @protected - update user guide */
  updateUserGuide: IUserModelDto;
  /** @protected - update price reviewer */
  updateUserPriceReviewer: IUserModelDto;
  /** @protected - update status reviewer */
  updateUserStatusReviewer: IUserModelDto;
  /** @public - upload assets */
  uploadAssets: Array<IAssetModel>;
  /** @public - user verification */
  verificationEmail: IUserTokenDto;
  /** withdrawal of money in stripe */
  withdrawalInStripe: Scalars['String'];
}

export type IMutationAcceptHomePageUserArgs = {
  payload: IGeneralIdInput;
};

export type IMutationAcceptedReviewArgs = {
  payload: IAcceptedReviewInput;
};

export type IMutationAddAssetsToHomePageUserArgs = {
  payload: IAddAssetsToHomePageUserInput;
};

export type IMutationAddCategoryToAssetArgs = {
  payload: ICategoryToAssetDto;
};

export type IMutationAddCategoryToProfileArgs = {
  payload: ICategoryIdDto;
};

export type IMutationAddContactArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: IAddContactInput;
};

export type IMutationAddDateReviewArgs = {
  payload: IAddDateReviewInput;
};

export type IMutationAddDirectoryInReviewArgs = {
  payload: IAddDirectoryInReviewInput;
};

export type IMutationAddItemsInPortfolioArgs = {
  payload: IAddItemsInPortfolioInput;
};

export type IMutationAddPortfoliosToHomePageUserArgs = {
  payload: IAddPortfoliosToHomePageUserInput;
};

export type IMutationAddRelationCollectionArgs = {
  payload: IAddRelationCollectionDto;
};

export type IMutationAddRelationFavoriteArgs = {
  payload: IAddRelationFavoritesDto;
};

export type IMutationAddRelationUserByNotificationArgs = {
  payload: INotificationIdInput;
};

export type IMutationAddReviewArgs = {
  payload: IAddReviewInput;
};

export type IMutationAddTagToProfileArgs = {
  payload: ITagIdDto;
};

export type IMutationAssignUserToAgentArgs = {
  payload: IAssignUserToAgentInput;
};

export type IMutationCancelReviewArgs = {
  payload: IReviewIdInput;
};

export type IMutationCreateAgentArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: ICreateAgentInput;
};

export type IMutationCreateAssetImageArgs = {
  file: Scalars['Upload'];
  payload: ICreateAssetImageDto;
};

export type IMutationCreateAssetVideoArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: ICreateAssetVideoDto;
  video: Scalars['Upload'];
};

export type IMutationCreateCollectionArgs = {
  payload: ICreateCollectionDto;
};

export type IMutationCreateFolderArgs = {
  payload: ICreateFolderInput;
};

export type IMutationCreateHomePageUserArgs = {
  payload: ICreateHomePageUserInput;
};

export type IMutationCreatePortfolioArgs = {
  payload: ICreatePortfolioInput;
};

export type IMutationCreatePostArgs = {
  payload: ICreatePostInput;
};

export type IMutationCreateProjectArgs = {
  payload: ICreateProjectDto;
};

export type IMutationCreateRelationUserNotificationArgs = {
  payload: ICreateRelationUserNotificationInput;
};

export type IMutationCreateTagArgs = {
  payload: ICreateTagDto;
};

export type IMutationCreateUserArgs = {
  payload: IUserCreateDto;
};

export type IMutationDeleteAgentsArgs = {
  payload: IDeleteAgentsInput;
};

export type IMutationDeleteAssetToHomePageUserArgs = {
  payload: IDeleteAssetToHomePageUserInput;
};

export type IMutationDeleteAssetsArgs = {
  payload: IDeleteAssetsDto;
};

export type IMutationDeleteCategoryToAssetArgs = {
  payload: ICategoryToAssetDto;
};

export type IMutationDeleteCategoryToProfileArgs = {
  payload: ICategoryIdDto;
};

export type IMutationDeleteCollectionArgs = {
  payload: ICollectionIdDto;
};

export type IMutationDeleteContactArgs = {
  payload: IContactIdDto;
};

export type IMutationDeleteFolderArgs = {
  payload: IGeneralIdInput;
};

export type IMutationDeleteHomePageUserArgs = {
  payload: IGeneralIdInput;
};

export type IMutationDeleteItemsInPortfolioArgs = {
  payload: IAddItemsInPortfolioInput;
};

export type IMutationDeleteNotificationArgs = {
  payload: INotificationIdInput;
};

export type IMutationDeletePortfolioByIdArgs = {
  payload: IPortfolioIdInput;
};

export type IMutationDeletePortfolioToHomePageUserArgs = {
  payload: IDeletePortfolioToHomePageUserInput;
};

export type IMutationDeletePostArgs = {
  payload: IDeleteOrRecoverPostInput;
};

export type IMutationDeleteProjectsArgs = {
  payload: IDeleteProjectInput;
};

export type IMutationDeleteRelationUserArgs = {
  payload: IUserIdDto;
};

export type IMutationDeleteRelationUserToAgentArgs = {
  payload: IGeneralIdInput;
};

export type IMutationDeleteRelationsCollectionArgs = {
  payload: IDeleteRelationCollectionDto;
};

export type IMutationDeleteRelationsFavoriteArgs = {
  payload: IDeleteRelationFavoritesDto;
};

export type IMutationForgotPasswordArgs = {
  payload: IUserForgotPasswordDto;
};

export type IMutationGenerateTokenArgs = {
  payload: IReviewIdInput;
};

export type IMutationGenerateVerificationEmailCodeArgs = {
  payload: IUserForgotPasswordDto;
};

export type IMutationInviteAgentArgs = {
  payload: IInviteAgentInput;
};

export type IMutationLoginArgs = {
  payload: IUserLoginDto;
};

export type IMutationMoveAssetsToFolderArgs = {
  payload: IMoveAssetsToFolderInput;
};

export type IMutationOpenNotificationArgs = {
  payload: INotificationIdInput;
};

export type IMutationProjectInviteNewUserArgs = {
  payload: IProjectInviteNewUserInput;
};

export type IMutationPublishOrUnpublishPostArgs = {
  payload: IPostPublishOrUnpublishInput;
};

export type IMutationPublishOrUnpublishProjectArgs = {
  payload: IProjectPublishOrUnpublishDto;
};

export type IMutationRecoverPostArgs = {
  payload: IDeleteOrRecoverPostInput;
};

export type IMutationRecoveryPasswordArgs = {
  payload: IUserRecoveryPasswordDto;
};

export type IMutationRejectHomePageUserArgs = {
  payload: IGeneralIdInput;
};

export type IMutationRejectRelationUserByNotificationArgs = {
  payload: INotificationIdInput;
};

export type IMutationResendInviteToAgentArgs = {
  payload: IUserIdDto;
};

export type IMutationReviewAddRatingArgs = {
  payload: IReviewAddRatingInput;
};

export type IMutationReviewDepositArgs = {
  payload: IReviewIdInput;
};

export type IMutationReviewPaidArgs = {
  payload: IReviewIdInput;
};

export type IMutationSendHomePageUserConfirmationArgs = {
  payload: IGeneralIdInput;
};

export type IMutationSetDefaultHomePageUserArgs = {
  payload: ISetDefaultHomePageUserInput;
};

export type IMutationTrackCategoryArgs = {
  payload: ICategoryIdDto;
};

export type IMutationTrackTagArgs = {
  payload: ITagIdDto;
};

export type IMutationUnpublishProfileArgs = {
  talentId?: InputMaybe<Scalars['Int']>;
};

export type IMutationUpdateAgencyArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: IAgencyUpdateDto;
};

export type IMutationUpdateAgentArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: IAgentUpdateInput;
};

export type IMutationUpdateAgentsLocationArgs = {
  payload: IUpdateAgentsLocationInput;
};

export type IMutationUpdateAgentsPermissionOrRoleArgs = {
  payload: IUpdateAgentsPermissionOrRoleInput;
};

export type IMutationUpdateAssetArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  logo?: InputMaybe<Scalars['Upload']>;
  payload: IUpdateAssetDto;
};

export type IMutationUpdateAssetGridInHomePageArgs = {
  payload: IUpdateAssetGridInHomePageInput;
};

export type IMutationUpdateAssetGridInPortfolioArgs = {
  payload: IUpdateItemsGridInput;
};

export type IMutationUpdateCollectionArgs = {
  payload: IUpdateCollectionDto;
};

export type IMutationUpdateConsumerArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: IConsumerUpdateDto;
};

export type IMutationUpdateContactArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: IUpdateContactInput;
};

export type IMutationUpdateCoverAssetInProjectArgs = {
  payload: IUpdateCoverAssetInProject;
};

export type IMutationUpdateFolderArgs = {
  payload: IUpdateFolderInput;
};

export type IMutationUpdateItemsGridInProjectArgs = {
  payload: IUpdateItemsGridInput;
};

export type IMutationUpdateLandingMetadataArgs = {
  favicon?: InputMaybe<Scalars['Upload']>;
  logo?: InputMaybe<Scalars['Upload']>;
  payload: IUpdateLandingMetadataInput;
};

export type IMutationUpdatePortfolioArgs = {
  payload: IUpdatePortfolioInput;
};

export type IMutationUpdatePortfolioCoverArgs = {
  payload: IUpdatePortfolioCoverInput;
};

export type IMutationUpdatePortfolioOrderInHomePageArgs = {
  payload: IUpdatePortfolioOrderInHomePageInput;
};

export type IMutationUpdatePostArgs = {
  payload: IUpdatePostInput;
};

export type IMutationUpdateProductionArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: IProductionUpdateDto;
};

export type IMutationUpdateProjectArgs = {
  payload: IUpdateProjectDto;
};

export type IMutationUpdateProjectGridArgs = {
  payload: IUpdateProjectGridInput;
};

export type IMutationUpdateReviewArgs = {
  payload: IUpdateReviewInput;
};

export type IMutationUpdateTalentArgs = {
  logo?: InputMaybe<Scalars['Upload']>;
  payload: ITalentUpdateDto;
};

export type IMutationUpdateTimeReviewTwilioArgs = {
  payload: IReviewIdInput;
};

export type IMutationUpdateUserContextArgs = {
  userId?: InputMaybe<Scalars['Int']>;
};

export type IMutationUpdateUserGuideArgs = {
  payload: IUpdateUserGuideInput;
};

export type IMutationUpdateUserPriceReviewerArgs = {
  payload: IUpdateUserPriceReviewerInput;
};

export type IMutationUpdateUserStatusReviewerArgs = {
  payload: IUpdateUserStatusReviewerInput;
};

export type IMutationUploadAssetsArgs = {
  files: Array<Scalars['Upload']>;
  payload: IUploadAssetsInput;
};

export type IMutationVerificationEmailArgs = {
  payload: IUserVerificationInput;
};

export type IMutationWithdrawalInStripeArgs = {
  payload: IWithdrawalInStripeInput;
};

export interface INotificationDto {
  __typename?: 'NotificationDTO';
  createdDate: Scalars['DateTime'];
  /** Description */
  description: Scalars['String'];
  homePageUser?: Maybe<IHomePageUserModelDto>;
  id: Scalars['Int'];
  owner: IUserModelDto;
  relationUser?: Maybe<IUserModelDto>;
  review?: Maybe<IReviewModelDto>;
  status: NotificationStatusEnum;
  /** Theme */
  theme: Scalars['String'];
  type: NotificationTypeEnum;
  updatedDate: Scalars['DateTime'];
}

export interface INotificationIdInput {
  id: Scalars['Int'];
}

export interface INotificationModel {
  __typename?: 'NotificationModel';
  createdDate: Scalars['DateTime'];
  /** Description */
  description: Scalars['String'];
  /** Home page user */
  homePageUser?: Maybe<IHomePageUserModel>;
  id: Scalars['Int'];
  /** Owner */
  owner: IUserModel;
  /** Relation User */
  relationUser?: Maybe<IUserModel>;
  /** Review */
  review?: Maybe<IReviewModel>;
  status: NotificationStatusEnum;
  /** Theme */
  theme: Scalars['String'];
  type: NotificationTypeEnum;
  updatedDate: Scalars['DateTime'];
}

export enum NotificationStatusEnum {
  Accepted = 'accepted',
  Read = 'read',
  Rejected = 'rejected',
  Sent = 'sent'
}

export enum NotificationTypeEnum {
  Homepageaccept = 'homepageaccept',
  Homepagereject = 'homepagereject',
  Homepagerequest = 'homepagerequest',
  Messagereview = 'messagereview',
  Review = 'review',
  Userrelation = 'userrelation'
}

/** Notifications */
export interface INotificationsDto {
  __typename?: 'NotificationsDTO';
  items: Array<INotificationDto>;
  meta: IPaginateModel;
}

export interface IOtherCityDto {
  __typename?: 'OtherCityDTO';
  catalogCode?: Maybe<Scalars['Int']>;
  /** Countries */
  country: ICountryModel;
  createdDate: Scalars['DateTime'];
  elevation: Scalars['Int'];
  id: Scalars['Int'];
  isBlocked: Scalars['Boolean'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  population: Scalars['Int'];
  timezone: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export interface IPaginateDto {
  skip: Scalars['Int'];
  take: Scalars['Int'];
}

export interface IPaginateModel {
  __typename?: 'PaginateModel';
  isMy?: Maybe<Scalars['Boolean']>;
  maxDate?: Maybe<Scalars['DateTime']>;
  minDate?: Maybe<Scalars['DateTime']>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IPaginatePortfolio {
  __typename?: 'PaginatePortfolio';
  categories: Array<ICategoryModelDto>;
  isMy?: Maybe<Scalars['Boolean']>;
  maxDate?: Maybe<Scalars['DateTime']>;
  minDate?: Maybe<Scalars['DateTime']>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
  total: Scalars['Int'];
}

export interface IPaginateUsers {
  __typename?: 'PaginateUsers';
  /** only those that are used in related users */
  agents?: Maybe<Array<IUserModelDto>>;
  /** only those that are used in related users */
  categories?: Maybe<Array<ICategoryModelDto>>;
  isMy?: Maybe<Scalars['Boolean']>;
  /** only those that are used in related users */
  locations?: Maybe<Array<ICityModel>>;
  maxDate?: Maybe<Scalars['DateTime']>;
  minDate?: Maybe<Scalars['DateTime']>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
  total: Scalars['Int'];
}

export enum PermissionTypeEnum {
  Acceptbookings = 'acceptbookings',
  Editagencyprofile = 'editagencyprofile',
  Editanytalentshomepage = 'editanytalentshomepage',
  Editassignedtalentshomepage = 'editassignedtalentshomepage'
}

export interface IPortfolioByUserIdInput {
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  excludeIds?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  /** parameters for pagination */
  paginate?: InputMaybe<IPaginateDto>;
  /** parameters for sort */
  sorts?: InputMaybe<Array<ISortDto>>;
  userId: Scalars['Int'];
}

export interface IPortfolioByUserSlugInput {
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  /** parameters for pagination */
  paginate?: InputMaybe<IPaginateDto>;
  /** parameters for sort */
  sorts?: InputMaybe<Array<ISortDto>>;
  userSlug: Scalars['String'];
  userType: UserTypeEnum;
}

export interface IPortfolioDto {
  __typename?: 'PortfolioDTO';
  assets?: Maybe<Array<IPortfolioToAssetModelDto>>;
  categories?: Maybe<Array<ICategoryModelDto>>;
  countItems?: Maybe<Scalars['Int']>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  logo?: Maybe<IAssetModelRelationDto>;
  /** Name */
  name: Scalars['String'];
  owner?: Maybe<IUserModelDto>;
  projects?: Maybe<Array<IProjectModelDto>>;
  tags?: Maybe<Array<ITagModelDto>>;
  updatedDate: Scalars['DateTime'];
}

export interface IPortfolioIdInput {
  id: Scalars['Int'];
}

export interface IPortfolioToAssetModelDto {
  __typename?: 'PortfolioToAssetModelDTO';
  asset?: Maybe<IAssetModelRelationDto>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  isCover: Scalars['Boolean'];
  /** Vertical */
  isVertical: Scalars['Boolean'];
  /** Order */
  order: Scalars['Int'];
  portfolio?: Maybe<IPortfolioDto>;
  updatedDate: Scalars['DateTime'];
}

/** Portfolio assets */
export interface IPortfolioToAssetsDto {
  __typename?: 'PortfolioToAssetsDTO';
  items: Array<IPortfolioToAssetModelDto>;
  meta: IPaginateModel;
}

/** Portfolios */
export interface IPortfoliosDto {
  __typename?: 'PortfoliosDTO';
  items: Array<IPortfolioDto>;
  meta: IPaginatePortfolio;
}

export interface IPostIdInput {
  id: Scalars['Int'];
}

export interface IPostModel {
  __typename?: 'PostModel';
  /** Admin */
  admin?: Maybe<IAdminModel>;
  /** Assets */
  assets?: Maybe<Array<IAssetModel>>;
  /** Categories */
  categories?: Maybe<Array<ICategoryModel>>;
  /** Assets cover */
  covers?: Maybe<Array<IAssetModel>>;
  createdDate: Scalars['DateTime'];
  deletedDate?: Maybe<Scalars['DateTime']>;
  /** Description */
  description: Scalars['String'];
  id: Scalars['Int'];
  isAdmin: Scalars['Boolean'];
  /** Show on homepage */
  isHomePage: Scalars['Boolean'];
  isPublished: Scalars['Boolean'];
  /** Order on homepage */
  orderHomePage: Scalars['Int'];
  /** Owner */
  owner?: Maybe<IUserModel>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** tags */
  tags?: Maybe<Array<ITagModel>>;
  /** Title */
  title: Scalars['String'];
  updatedDate: Scalars['DateTime'];
  /** Users who contributed to the post */
  users?: Maybe<Array<IPostToUserModel>>;
}

export interface IPostModelDto {
  __typename?: 'PostModelDTO';
  admin?: Maybe<IAdminModelFrontDto>;
  assets?: Maybe<Array<IAssetModelRelationDto>>;
  categories?: Maybe<Array<ICategoryModelRelationDto>>;
  covers?: Maybe<Array<IAssetModelRelationDto>>;
  createdDate: Scalars['DateTime'];
  deletedDate?: Maybe<Scalars['DateTime']>;
  /** Description */
  description: Scalars['String'];
  id: Scalars['Int'];
  /** Show on homepage */
  isHomePage: Scalars['Boolean'];
  isPublished: Scalars['Boolean'];
  /** Order on homepage */
  orderHomePage: Scalars['Int'];
  owner?: Maybe<IUserModelDto>;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<ITagModelDto>>;
  /** Title */
  title: Scalars['String'];
  updatedDate: Scalars['DateTime'];
  users?: Maybe<Array<IPostToUserModelDto>>;
}

export interface IPostPublishOrUnpublishInput {
  isPublished: Scalars['Boolean'];
  postId: Scalars['Int'];
}

export interface IPostToUserModel {
  __typename?: 'PostToUserModel';
  /** Category */
  category?: Maybe<ICategoryModel>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  post?: Maybe<IPostModel>;
  updatedDate: Scalars['DateTime'];
  user?: Maybe<IUserModel>;
}

export interface IPostToUserModelDto {
  __typename?: 'PostToUserModelDTO';
  category?: Maybe<ICategoryModelRelationDto>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  post?: Maybe<IPostModelDto>;
  user?: Maybe<IUserModelDto>;
}

/** Posts */
export interface IPostsModel {
  __typename?: 'PostsModel';
  items: Array<IPostModelDto>;
  meta: IPaginateModel;
}

export interface IProductionUpdateDto {
  cityId?: InputMaybe<Scalars['Int']>;
  /** Contact Email */
  contactEmail?: InputMaybe<Scalars['String']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /** Name */
  name?: InputMaybe<Scalars['String']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Slug */
  slug?: InputMaybe<Scalars['String']>;
  social?: InputMaybe<ISocialDto>;
}

export interface IProjectIdDto {
  id: Scalars['Int'];
}

export interface IProjectInviteNewUserInput {
  email: Scalars['String'];
  projectId: Scalars['Int'];
}

export interface IProjectModel {
  __typename?: 'ProjectModel';
  /** Admin */
  admin?: Maybe<IAdminModel>;
  assets?: Maybe<Array<IProjectToAssetModel>>;
  /** Categories */
  categories?: Maybe<Array<ICategoryModel>>;
  /** City */
  city?: Maybe<ICityModel>;
  createdDate: Scalars['DateTime'];
  deletedDate?: Maybe<Scalars['DateTime']>;
  /** Description */
  description: Scalars['String'];
  id: Scalars['Int'];
  /** Show on homepage */
  isHomePage: Scalars['Boolean'];
  isPublished: Scalars['Boolean'];
  isVertical: Scalars['Boolean'];
  /** Order grid */
  order: Scalars['Int'];
  /** Order on homepage */
  orderHomePage: Scalars['Int'];
  /** Owner */
  owner?: Maybe<IUserModel>;
  /** tags */
  tags?: Maybe<Array<ITagModel>>;
  /** Title */
  title: Scalars['String'];
  updatedDate: Scalars['DateTime'];
  /** Пользователи которые участвовали в написании поста */
  users?: Maybe<Array<IProjectToUserModel>>;
}

export interface IProjectModelDto {
  __typename?: 'ProjectModelDTO';
  assets?: Maybe<Array<IProjectToAssetModelDto>>;
  categories?: Maybe<Array<ICategoryModelRelationDto>>;
  city?: Maybe<ICityModel>;
  createdDate: Scalars['DateTime'];
  deletedDate?: Maybe<Scalars['DateTime']>;
  /** Description */
  description: Scalars['String'];
  id: Scalars['Int'];
  /** Show on homepage */
  isHomePage: Scalars['Boolean'];
  isPublished: Scalars['Boolean'];
  isVertical: Scalars['Boolean'];
  /** Order grid */
  order: Scalars['Int'];
  /** Order on homepage */
  orderHomePage: Scalars['Int'];
  owner?: Maybe<IUserModelDto>;
  tags?: Maybe<Array<ITagModelDto>>;
  /** Title */
  title: Scalars['String'];
  updatedDate: Scalars['DateTime'];
  users?: Maybe<Array<IProjectToUserModelDto>>;
}

export interface IProjectPublishOrUnpublishDto {
  isPublished: Scalars['Boolean'];
  projectId: Scalars['Int'];
}

export interface IProjectToAssetModel {
  __typename?: 'ProjectToAssetModel';
  /** Asset */
  asset?: Maybe<IAssetModel>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  isCover: Scalars['Boolean'];
  /** Vertical */
  isVertical: Scalars['Boolean'];
  /** Order */
  order: Scalars['Int'];
  project?: Maybe<IProjectModel>;
  updatedDate: Scalars['DateTime'];
}

export interface IProjectToAssetModelDto {
  __typename?: 'ProjectToAssetModelDTO';
  asset?: Maybe<IAssetModelRelationDto>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  isCover: Scalars['Boolean'];
  /** Vertical */
  isVertical: Scalars['Boolean'];
  /** Order */
  order: Scalars['Int'];
  project?: Maybe<IProjectModelDto>;
}

export interface IProjectToUserModel {
  __typename?: 'ProjectToUserModel';
  /** Categories */
  categories?: Maybe<Array<ICategoryModel>>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  isPortfolio: Scalars['Boolean'];
  project?: Maybe<IProjectModel>;
  updatedDate: Scalars['DateTime'];
  user?: Maybe<IUserModel>;
}

export interface IProjectToUserModelDto {
  __typename?: 'ProjectToUserModelDTO';
  categories?: Maybe<Array<ICategoryModelRelationDto>>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  project?: Maybe<IProjectModelDto>;
  user?: Maybe<IUserModelDto>;
}

/** Projects */
export interface IProjectsModel {
  __typename?: 'ProjectsModel';
  items: Array<IProjectModelDto>;
  meta: IPaginateModel;
}

export interface IQuery {
  __typename?: 'Query';
  /** @public - get assets by portfolioId */
  assetsByPortfolioId: IPortfolioToAssetsDto;
  /** @public - get categories */
  categories: ICategoriesModel;
  /** @public - talent categories by agency */
  categoriesTalentByAgency: Array<ICategoryModelRelationDto>;
  /** @protected - check assets before delete */
  checkAssetsBeforeDelete: Array<Scalars['Int']>;
  /** @public - check Home Page UserA gency By Location */
  checkHomePageUserAgencyByLocation: Scalars['Boolean'];
  /** @public - get cities */
  cities: ICitiesModel;
  /** @public - get countries */
  countries: ICountriesModel;
  /** @protected - getting a list currency */
  currencies: ICurrenciesModel;
  /** @protected - get currency by letter code */
  currencyByLetterCode: ICurrencyModel;
  /** @protected - List of folders */
  folders: IFoldersTreeModelDto;
  /** @public - get About Page */
  getAboutPage: IAboutPageDto;
  /** @public - get agent by uuid */
  getAgentByUuid: IUserModelDto;
  /** @protected - get assets */
  getAssets: IAssetsModel;
  /** @protected - get talent assets owned by the agency */
  getAssetsTalentsAgency: IAssetsModel;
  /**
   * @public - get categories by text (deprecated)
   * @deprecated Query deprecation
   */
  getCategoriesByText: Array<ICategoryModelDto>;
  /** @protected - get category */
  getCategoryById: ICategoryModel;
  /** @protected - get collection by id */
  getCollectionById: ICollectionUserWithPaginateModelDto;
  /** @protected - get commission by operation */
  getCommissionByOperation: ICommissionModel;
  /** @protected - get requests user */
  getConnectionRequests: INotificationsDto;
  /** @public - get contacts */
  getContacts: IContactsModel;
  /** @protected - folder by id */
  getFolderById: IFolderTreeModelDto;
  /** @public - get home page */
  getHomePage: IHomeModel;
  /** @public - get home page user assets */
  getHomePageUserAssets: IHomePageUserAssetsDto;
  /** @public - get home page user by type and slug */
  getHomePageUserByTypeAndSlug: IHomePageUserModelDto;
  /** @public - get home page user portfolios */
  getHomePageUserPortfolios: Array<IHomePageUserToPortfolioModelDto>;
  /** @protected - get user home pages */
  getHomePages: IHomePageUserItemsDto;
  /** @public - get landing */
  getLandingMetadata: ILandingModelDto;
  /**
   * @protected - get my assets (deprecated)
   * @deprecated Query deprecation
   */
  getMyAssets: IAssetsModel;
  /** @protected - get user notification */
  getMyNotificationReadAndSent: INotificationsDto;
  /** @public - get portfolio folder */
  getPortfolioById: IPortfolioDto;
  /** @public - get published projects */
  getPortfolioByUserId: IPortfoliosDto;
  /** @public - get published projects */
  getPortfolioByUserSlug: IPortfoliosDto;
  /** @protected - get post */
  getPostById: IPostModelDto;
  /** @public - get project */
  getProjectById: IProjectModelDto;
  /** @public - getting a list users */
  getRelationUsers: IUsersModel;
  /** @protected - get review by id */
  getReviewById: IReviewModelDto;
  /** @protected - get seetv */
  getSeeTVById: IAssetModel;
  /** @protected - get tag */
  getTagById: ITagModel;
  /**
   * @protected - get tags by text (deprecated)
   * @deprecated Query deprecation
   */
  getTagsByText: Array<ITagModelDto>;
  /**
   * @public - top search (deprecated)
   * @deprecated Query deprecation
   */
  getTopCategoriesAndTags: Array<ISearchTopDto>;
  /** @public - get unibrow user */
  getUnibrow: IUnibrowDto;
  /** @protected - get user by ID */
  getUserById: IUserModelDto;
  /** @public - get user by slug and type */
  getUserByTypeAndSlug: IUserModelDto;
  /** @protected - get collection by id */
  getUserFavorites: IFavoritesModel;
  /** @public - get user locations through an agency */
  getUserLocationsByAgency: Array<ICityModel>;
  /** @protected - get list SeeTV */
  getVideoListSeeTV: IAssetsModel;
  /** @public - get knowledge by id */
  knowledgeById: IKnowledgeModelDto;
  /** @public - get knowledges */
  knowledges: IKnowledgesModel;
  /** @protected - getting the current user */
  me: IUserModel;
  /** @public - get posts */
  posts: IPostsModel;
  /** @public - get production list */
  productions: IUsersModel;
  /** @public - get published projects */
  projects: IProjectsModel;
  /** @public - get assets by portfolioId */
  projectsByPortfolioId: IProjectsModel;
  /** @public - rating items */
  ratingItems: IRatingItemsDto;
  /** @public - get review directories */
  reviewDirectories: Array<IReviewDirectoryModel>;
  /** @public - search */
  search: Array<ISearchDto>;
  /** @public - search page */
  searchPage: ISearchPageDto;
  /** @public - get tags */
  tags: ITagsModel;
  /** @public - get talents list */
  talents: IUsersModel;
  /** @protected - get collections by user */
  userCollections: ICollectionsModel;
  /** @protected - get posts created by user */
  userPosts: IPostsModel;
  /** @protected - get projects created by user */
  userProjects: IProjectsModel;
  /** @protected - get reviews */
  userReviews: IReviewsModel;
  /** @protected - get user transactions */
  userTransactions: ITransactionsModel;
  /** @public - getting a list users */
  users: IUsersModel;
}

export type IQueryAssetsByPortfolioIdArgs = {
  payload: IAssetsAndProjectsByPortfolioIdInput;
};

export type IQueryCategoriesArgs = {
  payload: IFilterGetDto;
};

export type IQueryCategoriesTalentByAgencyArgs = {
  payload: ICategoriesTalentByAgencyDto;
};

export type IQueryCheckAssetsBeforeDeleteArgs = {
  payload: ICheckDeleteAssetsInput;
};

export type IQueryCheckHomePageUserAgencyByLocationArgs = {
  cityId: Scalars['Int'];
};

export type IQueryCitiesArgs = {
  payload: IFilterGetDto;
};

export type IQueryCountriesArgs = {
  payload: IFilterGetDto;
};

export type IQueryCurrenciesArgs = {
  payload: IFilterGetDto;
};

export type IQueryCurrencyByLetterCodeArgs = {
  payload: ICurrencyByLetterCodeInput;
};

export type IQueryFoldersArgs = {
  payload: IFilterGetDto;
};

export type IQueryGetAgentByUuidArgs = {
  payload: IGetAgentByUuidInput;
};

export type IQueryGetAssetsArgs = {
  payload: IFilterGetDto;
};

export type IQueryGetAssetsTalentsAgencyArgs = {
  payload: IFilterGetDto;
};

export type IQueryGetCategoriesByTextArgs = {
  search: Scalars['String'];
};

export type IQueryGetCategoryByIdArgs = {
  payload: ICategoryIdDto;
};

export type IQueryGetCollectionByIdArgs = {
  payload: ICollectionPaginateDto;
};

export type IQueryGetCommissionByOperationArgs = {
  payload: IGetCommissionByOperationInput;
};

export type IQueryGetConnectionRequestsArgs = {
  payload: IGetConnectionRequestsInput;
};

export type IQueryGetContactsArgs = {
  payload: IFilterGetDto;
};

export type IQueryGetFolderByIdArgs = {
  payload: IGeneralIdInput;
};

export type IQueryGetHomePageUserAssetsArgs = {
  payload: IGeneralIdInput;
};

export type IQueryGetHomePageUserByTypeAndSlugArgs = {
  payload: IGetHomePageUserByTypeAndSlugInput;
};

export type IQueryGetHomePageUserPortfoliosArgs = {
  payload: IGeneralIdInput;
};

export type IQueryGetLandingMetadataArgs = {
  payload: IGetLandingMetadataInput;
};

export type IQueryGetMyAssetsArgs = {
  payload: IFilterGetDto;
};

export type IQueryGetMyNotificationReadAndSentArgs = {
  payload: IFilterGetDto;
};

export type IQueryGetPortfolioByIdArgs = {
  payload: IPortfolioIdInput;
};

export type IQueryGetPortfolioByUserIdArgs = {
  payload: IPortfolioByUserIdInput;
};

export type IQueryGetPortfolioByUserSlugArgs = {
  payload: IPortfolioByUserSlugInput;
};

export type IQueryGetPostByIdArgs = {
  payload: IPostIdInput;
};

export type IQueryGetProjectByIdArgs = {
  payload: IProjectIdDto;
};

export type IQueryGetRelationUsersArgs = {
  payload: IGetRelationUsersInput;
};

export type IQueryGetReviewByIdArgs = {
  payload: IReviewIdInput;
};

export type IQueryGetSeeTvByIdArgs = {
  payload: IAssetIdDto;
};

export type IQueryGetTagByIdArgs = {
  payload: ITagIdDto;
};

export type IQueryGetTagsByTextArgs = {
  search: Scalars['String'];
};

export type IQueryGetTopCategoriesAndTagsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

export type IQueryGetUserByIdArgs = {
  payload: IUserIdDto;
};

export type IQueryGetUserByTypeAndSlugArgs = {
  payload: IGetUserByTypeAndSlugInput;
};

export type IQueryGetUserFavoritesArgs = {
  payload: IFilterGetDto;
};

export type IQueryGetUserLocationsByAgencyArgs = {
  payload: IGetUserLocationsByAgencyInput;
};

export type IQueryGetVideoListSeeTvArgs = {
  payload: IFilterGetDto;
};

export type IQueryKnowledgeByIdArgs = {
  payload: IGeneralIdInput;
};

export type IQueryKnowledgesArgs = {
  payload: IFilterGetDto;
};

export type IQueryPostsArgs = {
  payload: IFilterGetDto;
};

export type IQueryProductionsArgs = {
  payload: IFilterGetDto;
};

export type IQueryProjectsArgs = {
  payload: IFilterGetDto;
};

export type IQueryProjectsByPortfolioIdArgs = {
  payload: IAssetsAndProjectsByPortfolioIdInput;
};

export type IQueryRatingItemsArgs = {
  payload: IFilterGetDto;
};

export type IQuerySearchArgs = {
  payload: ISearchQueryDto;
};

export type IQuerySearchPageArgs = {
  payload: ISearchPageQueryDto;
};

export type IQueryTagsArgs = {
  payload: IFilterGetDto;
};

export type IQueryTalentsArgs = {
  payload: IFilterGetDto;
};

export type IQueryUserCollectionsArgs = {
  payload: IFilterGetDto;
};

export type IQueryUserPostsArgs = {
  payload: IFilterGetDto;
};

export type IQueryUserProjectsArgs = {
  payload: IFilterGetDto;
};

export type IQueryUserReviewsArgs = {
  payload: IFilterGetDto;
};

export type IQueryUserTransactionsArgs = {
  payload: IFilterGetDto;
};

export type IQueryUsersArgs = {
  payload: IFilterGetDto;
};

/** Rating items */
export interface IRatingItemsDto {
  __typename?: 'RatingItemsDTO';
  items: Array<IRatingModelDto>;
  meta: IPaginateModel;
}

export interface IRatingModel {
  __typename?: 'RatingModel';
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** Rating */
  rating: Scalars['Int'];
  /** Recipient */
  recipient: IUserModel;
  /** Sender */
  sender: IUserModel;
  updatedDate: Scalars['DateTime'];
}

export interface IRatingModelDto {
  __typename?: 'RatingModelDTO';
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  /** Message */
  message: Scalars['String'];
  /** Rating */
  rating: Scalars['Int'];
  recipient: IUserModelDto;
  sender: IUserModelDto;
  updatedDate: Scalars['DateTime'];
}

export enum RelationUserStatusEnum {
  Exist = 'exist',
  No = 'no',
  Noauth = 'noauth',
  Sent = 'sent'
}

export interface IReviewAddRatingInput {
  id: Scalars['Int'];
  message: Scalars['String'];
  rating: Scalars['Int'];
}

export interface IReviewDirectoryModel {
  __typename?: 'ReviewDirectoryModel';
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export enum ReviewDurationEnum {
  Halfhour = 'halfhour',
  Hour = 'hour'
}

export interface IReviewIdInput {
  id: Scalars['Int'];
}

export interface IReviewModel {
  __typename?: 'ReviewModel';
  /** Chat sid (twilio) */
  chatSid?: Maybe<Scalars['String']>;
  /** Client */
  client: IUserModel;
  createdDate: Scalars['DateTime'];
  /** Date review */
  dateReview?: Maybe<Scalars['DateTime']>;
  /** Description */
  description: Scalars['String'];
  /** Review duration */
  duration: ReviewDurationEnum;
  /** Fee Client */
  feeClient: Scalars['Float'];
  /** Fee Reviewer */
  feeReviewer: Scalars['Float'];
  id: Scalars['Int'];
  isDirectories: Scalars['Boolean'];
  isMessageClient: Scalars['Boolean'];
  isMessageReviewer: Scalars['Boolean'];
  /** Signed Condition Client */
  isSignedConditionClient: Scalars['Boolean'];
  /** Signed Condition Reviewer */
  isSignedConditionReviewer: Scalars['Boolean'];
  /** Link meet */
  link: Scalars['String'];
  /** Price */
  price: Scalars['Int'];
  /** Rating client */
  ratingClient?: Maybe<IRatingModel>;
  /** Rating reviewer */
  ratingReviewer?: Maybe<IRatingModel>;
  /** Requests */
  requests?: Maybe<Array<IReviewDirectoryModel>>;
  /** Reviewer */
  reviewer: IUserModel;
  /** Review status */
  status: ReviewStatusEnum;
  updatedDate: Scalars['DateTime'];
}

export interface IReviewModelDto {
  __typename?: 'ReviewModelDTO';
  /** Chat sid (twilio) */
  chatSid?: Maybe<Scalars['String']>;
  client: IUserModelDto;
  createdDate: Scalars['DateTime'];
  /** Date review */
  dateReview?: Maybe<Scalars['DateTime']>;
  /** Review duration */
  duration: ReviewDurationEnum;
  /** Fee Client */
  feeClient: Scalars['Float'];
  /** Fee Reviewer */
  feeReviewer: Scalars['Float'];
  id: Scalars['Int'];
  isDirectories: Scalars['Boolean'];
  isMessageClient: Scalars['Boolean'];
  isMessageReviewer: Scalars['Boolean'];
  /** Link meet */
  link: Scalars['String'];
  /** Price */
  price: Scalars['Int'];
  ratingClient?: Maybe<IRatingModel>;
  ratingReviewer?: Maybe<IRatingModel>;
  reviewer: IUserModelDto;
  /** Review status */
  status: ReviewStatusEnum;
  updatedDate: Scalars['DateTime'];
}

export enum ReviewStatusEnum {
  Acceptedreview = 'acceptedreview',
  Cancel = 'cancel',
  Closed = 'closed',
  Create = 'create',
  Paid = 'paid',
  Waitingforfeedback = 'waitingforfeedback',
  Waitingforreview = 'waitingforreview'
}

/** Reviews */
export interface IReviewsModel {
  __typename?: 'ReviewsModel';
  items: Array<IReviewModelDto>;
  meta: IPaginateModel;
}

export interface ISearchDto {
  __typename?: 'SearchDTO';
  categories?: Maybe<Array<ICategoryModel>>;
  id: Scalars['Int'];
  logo?: Maybe<IAssetModel>;
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['String'];
}

export interface ISearchPageDto {
  __typename?: 'SearchPageDTO';
  categories: Array<ICategoryModelDto>;
  search: ISearchViews;
}

export interface ISearchPageQueryDto {
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** parameters for pagination */
  paginate?: InputMaybe<IPaginateDto>;
  tag?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
}

export interface ISearchQueryDto {
  size?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
}

export interface ISearchTopDto {
  __typename?: 'SearchTopDTO';
  count: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  type: Scalars['String'];
}

export enum SearchTypeEnum {
  Agency = 'agency',
  Agent = 'agent',
  Category = 'category',
  Knowledge = 'knowledge',
  Post = 'post',
  Production = 'production',
  Project = 'project',
  Tag = 'tag',
  Talent = 'talent',
  User = 'user'
}

export interface ISearchViewModel {
  __typename?: 'SearchViewModel';
  createdDate: Scalars['DateTime'];
  knowledge?: Maybe<IKnowledgeModelDto>;
  knowledgeId?: Maybe<Scalars['Float']>;
  order: Scalars['Float'];
  post?: Maybe<IPostModelDto>;
  postId?: Maybe<Scalars['Float']>;
  project?: Maybe<IProjectModelDto>;
  projectId?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  type: SearchTypeEnum;
  user?: Maybe<IUserModelDto>;
  userId?: Maybe<Scalars['Float']>;
}

export interface ISearchViews {
  __typename?: 'SearchViews';
  items: Array<ISearchViewModel>;
  meta: IPaginateModel;
}

export interface ISetDefaultHomePageUserInput {
  /** home page id */
  homePageUserId: Scalars['Int'];
}

export interface ISocialDto {
  urlFacebook?: InputMaybe<Scalars['String']>;
  urlInstagram?: InputMaybe<Scalars['String']>;
  urlPinterest?: InputMaybe<Scalars['String']>;
  urlTelegram?: InputMaybe<Scalars['String']>;
  urlTiktok?: InputMaybe<Scalars['String']>;
  urlTwitter?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
}

export interface ISocialModel {
  __typename?: 'SocialModel';
  id: Scalars['Int'];
  urlFacebook?: Maybe<Scalars['String']>;
  urlInstagram?: Maybe<Scalars['String']>;
  urlPinterest?: Maybe<Scalars['String']>;
  urlTelegram?: Maybe<Scalars['String']>;
  urlTiktok?: Maybe<Scalars['String']>;
  urlTwitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
}

export interface ISortDto {
  columnName: Scalars['String'];
  direction: SortDirectionEnum;
}

export enum SortDirectionEnum {
  Asc = 'asc',
  Desc = 'desc'
}

export interface ISubscription {
  __typename?: 'Subscription';
  addNotification: INotificationDto;
  updateUserVerificationStatus: IUserModelDto;
  updateWalletBalance: IWalletModelDto;
}

export interface ITagIdDto {
  id: Scalars['Int'];
}

export interface ITagModel {
  __typename?: 'TagModel';
  /** Admin */
  admin?: Maybe<IAdminModel>;
  assets: Array<IAssetModel>;
  /** Number of uses in search */
  countSearch: Scalars['Int'];
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  /** Name */
  name: Scalars['String'];
  profiles: Array<IUserModel>;
  /** Slug */
  slug: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export interface ITagModelDto {
  __typename?: 'TagModelDTO';
  id?: Maybe<Scalars['Int']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Slug */
  slug?: Maybe<Scalars['String']>;
}

export interface ITagModelRelationDto {
  __typename?: 'TagModelRelationDTO';
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  /** Name */
  name: Scalars['String'];
  /** Slug */
  slug: Scalars['String'];
  updatedDate: Scalars['DateTime'];
}

export interface ITagsModel {
  __typename?: 'TagsModel';
  items: Array<ITagModelDto>;
  meta: IPaginateModel;
}

export interface ITalentUpdateDto {
  cityId?: InputMaybe<Scalars['Int']>;
  /** Contact Email */
  contactEmail?: InputMaybe<Scalars['String']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  /** Name */
  name?: InputMaybe<Scalars['String']>;
  /** Phone */
  phone?: InputMaybe<Scalars['String']>;
  /** Slug */
  slug?: InputMaybe<Scalars['String']>;
  social?: InputMaybe<ISocialDto>;
}

export interface ITransactionModelDto {
  __typename?: 'TransactionModelDTO';
  /** Amount */
  amount: Scalars['Float'];
  createdDate: Scalars['DateTime'];
  /** Fee */
  fee: Scalars['Float'];
  id: Scalars['Int'];
  review?: Maybe<IReviewModelDto>;
  status: TransactionStatusEnum;
  /** Stripe url */
  stripeURL?: Maybe<Scalars['String']>;
  /** Transaction type */
  type: TransactionTypeEnum;
  updatedDate: Scalars['DateTime'];
  user?: Maybe<IUserModelDto>;
  walletFrom?: Maybe<IWalletModelDto>;
  walletTo?: Maybe<IWalletModelDto>;
}

export enum TransactionStatusEnum {
  Canceled = 'canceled',
  Completed = 'completed',
  Created = 'created',
  Declined = 'declined',
  Error = 'error',
  Processing = 'processing'
}

export enum TransactionTypeEnum {
  Deposit = 'deposit',
  Transfer = 'transfer',
  Withdraw = 'withdraw'
}

/** Transactions */
export interface ITransactionsModel {
  __typename?: 'TransactionsModel';
  items: Array<ITransactionModelDto>;
  meta: IPaginateModel;
}

/** Unibrow */
export interface IUnibrowDto {
  __typename?: 'UnibrowDTO';
  agency?: Maybe<IUserModelDto>;
  talents: Array<IUserModelDto>;
}

export interface IUpdateAgentsLocationInput {
  agentIds: Array<Scalars['Int']>;
  locationId: Scalars['Int'];
}

export interface IUpdateAgentsPermissionOrRoleInput {
  agentIds: Array<Scalars['Int']>;
  agentRole?: InputMaybe<AgentRoleEnum>;
  permissions?: InputMaybe<Array<PermissionTypeEnum>>;
}

export interface IUpdateAssetDto {
  assetId: Scalars['Int'];
  authorIds?: InputMaybe<Array<Scalars['Int']>>;
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Description for video */
  description?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  /** Persons */
  person?: InputMaybe<Array<Scalars['String']>>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
  talentId?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface IUpdateAssetGridInHomePageInput {
  homePageUserId: Scalars['Int'];
  /** Item ids */
  itemIds: Array<IUpdateAssetGridInHomePageItemInput>;
}

export interface IUpdateAssetGridInHomePageItemInput {
  /** Verical element? */
  isVertical?: InputMaybe<Scalars['Boolean']>;
  /** Asset item id */
  itemId: Scalars['Int'];
  /** New position grid */
  order?: InputMaybe<Scalars['Int']>;
}

export interface IUpdateCollectionDto {
  id: Scalars['Int'];
  name: Scalars['String'];
}

export interface IUpdateContactInput {
  cityId?: InputMaybe<Scalars['Int']>;
  contactId: Scalars['Int'];
  countryId?: InputMaybe<Scalars['Int']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  /** Email */
  email?: InputMaybe<Scalars['String']>;
  /** Mobile phone */
  mobilePhone?: InputMaybe<Scalars['String']>;
  /** Name */
  name?: InputMaybe<Scalars['String']>;
  /** Office phone */
  officePhone?: InputMaybe<Scalars['String']>;
}

export interface IUpdateCoverAssetInProject {
  assetId: Scalars['Int'];
  isCover: Scalars['Boolean'];
  projectId: Scalars['Int'];
}

export interface IUpdateFolderInput {
  folderId: Scalars['Int'];
  /** name */
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
}

export interface IUpdateItemsGridInput {
  /** Main object id */
  id: Scalars['Int'];
  /** Item ids */
  itemIds: Array<IItemGridInput>;
}

export interface IUpdateLandingMetadataInput {
  /** Accent color */
  accentColor?: InputMaybe<Scalars['String']>;
  /** address */
  address?: InputMaybe<Scalars['String']>;
  /** dark bg color */
  darkBgColor?: InputMaybe<Scalars['String']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  /** Email */
  email?: InputMaybe<Scalars['String']>;
  /** Facebook */
  facebook?: InputMaybe<Scalars['String']>;
  /** fax */
  fax?: InputMaybe<Scalars['String']>;
  /** Instagram */
  instagram?: InputMaybe<Scalars['String']>;
  /** light bg color */
  lightBgColor?: InputMaybe<Scalars['String']>;
  /** meta description */
  metaDescription?: InputMaybe<Scalars['String']>;
  /** meta title */
  metaTitle?: InputMaybe<Scalars['String']>;
  /** Mobile phone */
  mobilePhone?: InputMaybe<Scalars['String']>;
  /** Tiktok */
  tiktok?: InputMaybe<Scalars['String']>;
  /** title */
  title?: InputMaybe<Scalars['String']>;
  /** Twitter */
  twitter?: InputMaybe<Scalars['String']>;
}

export interface IUpdatePortfolioCoverInput {
  coverId: Scalars['Int'];
  portfolioId: Scalars['Int'];
}

export interface IUpdatePortfolioInput {
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  id: Scalars['Int'];
  /** Name */
  name?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
}

export interface IUpdatePortfolioOrderInHomePageInput {
  homePageUserId: Scalars['Int'];
  /** Item ids */
  itemIds: Array<IUpdatePortfolioOrderInHomePageItemInput>;
}

export interface IUpdatePortfolioOrderInHomePageItemInput {
  /** Portfolio item id */
  itemId: Scalars['Int'];
  /** New position */
  order: Scalars['Int'];
}

export interface IUpdatePostInput {
  assetIds?: InputMaybe<Array<Scalars['Int']>>;
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  coverIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  relationUsers?: InputMaybe<Array<IUserTypePostInput>>;
  /** Subtitle */
  subtitle?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Title */
  title?: InputMaybe<Scalars['String']>;
}

export interface IUpdateProjectDto {
  assetCoverId?: InputMaybe<Scalars['Int']>;
  assetIds?: InputMaybe<Array<Scalars['Int']>>;
  assetItemsIds?: InputMaybe<Array<IItemGridInput>>;
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  cityId?: InputMaybe<Scalars['Int']>;
  /** Description */
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** list of email addresses */
  inviteEmails?: InputMaybe<Array<Scalars['String']>>;
  relationUsers?: InputMaybe<Array<IUserTypeProjectDto>>;
  tagIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Title */
  title?: InputMaybe<Scalars['String']>;
}

export interface IUpdateProjectGridInput {
  /** Projects */
  projects: Array<IUpdateProjectGridItemInput>;
}

export interface IUpdateProjectGridItemInput {
  /** Verical element? */
  isVertical?: InputMaybe<Scalars['Boolean']>;
  /** New position grid */
  order?: InputMaybe<Scalars['Int']>;
  /** Project id */
  projectId: Scalars['Int'];
}

export interface IUpdateReviewInput {
  /** Description */
  description: Scalars['String'];
  id: Scalars['Int'];
}

export interface IUpdateUserGuideInput {
  /** Active Guide Block */
  activeGuideBlock: Scalars['String'];
  /** Сompleted guides */
  guides: Array<Scalars['String']>;
}

export interface IUpdateUserPriceReviewerInput {
  /** Price review for 30 minutes */
  reviewPrice30: Scalars['Int'];
  /** Price review for 60 minutes */
  reviewPrice60: Scalars['Int'];
}

export interface IUpdateUserStatusReviewerInput {
  /** User reviewer */
  isReviewer: Scalars['Boolean'];
}

export interface IUploadAssetsInput {
  folderId?: InputMaybe<Scalars['Int']>;
}

export interface IUserCreateDto {
  /** Email */
  email: Scalars['String'];
  /** Signed Condition */
  isSignedCondition: Scalars['Boolean'];
  /** @MinLength(8), @MaxLength(64), @NotContains(" "), @IsAscii(), @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/) */
  password: Scalars['String'];
  type: UserTypeEnum;
}

export interface IUserForgotPasswordDto {
  /** Email */
  email: Scalars['String'];
}

export interface IUserIdDto {
  id: Scalars['Int'];
}

export interface IUserLoginDto {
  /** Email */
  email: Scalars['String'];
  isSignedCondition?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
}

export interface IUserModel {
  __typename?: 'UserModel';
  /** Active Guide Block */
  activeGuideBlock: Scalars['String'];
  /** Relation to agency */
  agency?: Maybe<IUserModel>;
  /** Relation agency to users */
  agencyToUser?: Maybe<Array<IUserToAgencyModel>>;
  /** Agent Role */
  agentRole?: Maybe<AgentRoleEnum>;
  /** Relation agent to users */
  agentToUser?: Maybe<Array<IUserToAgencyModel>>;
  /** Agency agents */
  agents?: Maybe<Array<IUserModel>>;
  /** Assets to home page(seed) */
  assetInHomePage?: Maybe<Array<IAssetModel>>;
  /** Categories */
  categories?: Maybe<Array<ICategoryModel>>;
  /** Contact Email */
  contactEmail?: Maybe<Scalars['String']>;
  /** Contacts */
  contacts?: Maybe<Array<IContactModel>>;
  /** Context */
  context?: Maybe<IUserModel>;
  createdDate: Scalars['DateTime'];
  /** Description */
  description: Scalars['String'];
  /** Email */
  email: Scalars['String'];
  /** Favorites */
  favorites?: Maybe<Array<IFavoriteModel>>;
  /** Сompleted guides */
  guides: Array<Scalars['String']>;
  id: Scalars['Int'];
  isAgentActive: Scalars['Boolean'];
  /** Email Verification Status */
  isEmailVerification: Scalars['Boolean'];
  /** Show on homepage */
  isHomePage: Scalars['Boolean'];
  /** Agency landing */
  isLanding: Scalars['Boolean'];
  isPublished: Scalars['Boolean'];
  /** User reviewer */
  isReviewer: Scalars['Boolean'];
  /** Seed? */
  isSeed: Scalars['Boolean'];
  /** Signed Condition */
  isSignedCondition: Scalars['Boolean'];
  /** Landing url */
  landingDomain?: Maybe<Scalars['String']>;
  /** Last post date */
  lastPostDate?: Maybe<Scalars['DateTime']>;
  /** Last project date */
  lastProjectDate?: Maybe<Scalars['DateTime']>;
  /** Last visit date */
  lastVisitDate?: Maybe<Scalars['DateTime']>;
  /** Locations */
  locations?: Maybe<Array<ICityModel>>;
  /** Logo */
  logo?: Maybe<IAssetModel>;
  /** Name */
  name: Scalars['String'];
  /** Notifications */
  notifications?: Maybe<Array<INotificationModel>>;
  /** Order on homepage */
  orderHomePage: Scalars['Int'];
  /** Seed order sort */
  orderSeed: Scalars['Int'];
  permissions: Array<PermissionTypeEnum>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Projects */
  projects?: Maybe<Array<IProjectModel>>;
  /** Rating */
  rating: Scalars['Float'];
  /** Reason for blocking */
  reasonBlocked?: Maybe<Scalars['String']>;
  /** Registration date */
  registrationDate?: Maybe<Scalars['DateTime']>;
  relationStatus?: Maybe<RelationUserStatusEnum>;
  /** Price review for 30 minutes */
  reviewPrice30: Scalars['Int'];
  /** Price review for 60 minutes */
  reviewPrice60: Scalars['Int'];
  /** Short description */
  shortDescription: Scalars['String'];
  /** Slug */
  slug: Scalars['String'];
  socials?: Maybe<ISocialModel>;
  /** User status */
  status: UserStatusEnum;
  /** Surname */
  surname: Scalars['String'];
  /** Tags */
  tags: Array<ITagModel>;
  type: UserTypeEnum;
  updatedDate: Scalars['DateTime'];
  /** Relation user to agencies */
  userToAgency?: Maybe<Array<IUserToAgencyModel>>;
  /** Date and time of verification. */
  verificationDate?: Maybe<Scalars['DateTime']>;
  /** User verification status */
  verificationStatus: UserVerificationStatusEnum;
  wallets?: Maybe<Array<IWalletModel>>;
}

export interface IUserModelDto {
  __typename?: 'UserModelDTO';
  /** Active Guide Block */
  activeGuideBlock: Scalars['String'];
  agency?: Maybe<IUserModelDto>;
  agencyToUser?: Maybe<Array<IUserToAgencyModelDto>>;
  /** Agent Role */
  agentRole?: Maybe<AgentRoleEnum>;
  agentToUser?: Maybe<Array<IUserToAgencyModelDto>>;
  agents?: Maybe<Array<IUserModelDto>>;
  assetInHomePage?: Maybe<Array<IAssetModelRelationDto>>;
  categories?: Maybe<Array<ICategoryModelRelationDto>>;
  city?: Maybe<ICityModel>;
  /** Contact Email */
  contactEmail?: Maybe<Scalars['String']>;
  contacts?: Maybe<Array<IContactModelDto>>;
  context?: Maybe<IUserModelDto>;
  country?: Maybe<ICountryModel>;
  createdDate: Scalars['DateTime'];
  /** Description */
  description: Scalars['String'];
  favorites?: Maybe<Array<IFavoriteModelDto>>;
  /** Сompleted guides */
  guides: Array<Scalars['String']>;
  id: Scalars['Int'];
  isAgentActive: Scalars['Boolean'];
  /** Show on homepage */
  isHomePage: Scalars['Boolean'];
  isPublished: Scalars['Boolean'];
  /** User reviewer */
  isReviewer: Scalars['Boolean'];
  /** Seed? */
  isSeed: Scalars['Boolean'];
  /** Signed Condition */
  isSignedCondition: Scalars['Boolean'];
  locations?: Maybe<Array<ICityModel>>;
  logo?: Maybe<IAssetModelRelationDto>;
  /** Name */
  name: Scalars['String'];
  /** Order on homepage */
  orderHomePage: Scalars['Int'];
  /** Seed order sort */
  orderSeed: Scalars['Int'];
  permissions: Array<PermissionTypeEnum>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<IProjectModelDto>>;
  /** Rating */
  rating: Scalars['Float'];
  /** Registration date */
  registrationDate?: Maybe<Scalars['DateTime']>;
  relationStatus?: Maybe<RelationUserStatusEnum>;
  /** Price review for 30 minutes */
  reviewPrice30: Scalars['Int'];
  /** Price review for 60 minutes */
  reviewPrice60: Scalars['Int'];
  /** Short description */
  shortDescription: Scalars['String'];
  /** Slug */
  slug: Scalars['String'];
  socials?: Maybe<ISocialModel>;
  /** User status */
  status: UserStatusEnum;
  /** Surname */
  surname: Scalars['String'];
  tags?: Maybe<Array<ITagModelRelationDto>>;
  type: UserTypeEnum;
  updatedDate: Scalars['DateTime'];
  userToAgency?: Maybe<Array<IUserToAgencyModelDto>>;
  /** User verification status */
  verificationStatus: UserVerificationStatusEnum;
  wallets?: Maybe<Array<IWalletModelDto>>;
}

export interface IUserRecoveryPasswordDto {
  password: Scalars['String'];
  /** Recovery code: @NotContains(" ") */
  recoveryCode: Scalars['String'];
}

export enum UserStatusEnum {
  Active = 'active',
  Blocked = 'blocked',
  Temporaryblocked = 'temporaryblocked'
}

export interface IUserToAgencyModel {
  __typename?: 'UserToAgencyModel';
  agency: IUserModel;
  agent?: Maybe<IUserModel>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedDate: Scalars['DateTime'];
  user: IUserModel;
}

export interface IUserToAgencyModelDto {
  __typename?: 'UserToAgencyModelDTO';
  agency: IUserModelDto;
  agent?: Maybe<IUserModelDto>;
  createdDate: Scalars['DateTime'];
  id: Scalars['Int'];
  updatedDate: Scalars['DateTime'];
  user: IUserModelDto;
}

export interface IUserTokenDto {
  __typename?: 'UserTokenDTO';
  token: Scalars['String'];
  user: IUserModel;
}

export enum UserTypeEnum {
  Agency = 'agency',
  Agent = 'agent',
  Consumer = 'consumer',
  Production = 'production',
  Talent = 'talent'
}

export interface IUserTypePostInput {
  categoryId: Scalars['Int'];
  userId: Scalars['Int'];
}

export interface IUserTypeProjectDto {
  categoryIds: Array<Scalars['Int']>;
  userId: Scalars['Int'];
}

export interface IUserVerificationInput {
  /** Recovery code: @NotContains(" ") */
  code: Scalars['String'];
}

export enum UserVerificationStatusEnum {
  Declined = 'declined',
  Notverified = 'notverified',
  Processing = 'processing',
  Verified = 'verified'
}

/** Posts */
export interface IUsersModel {
  __typename?: 'UsersModel';
  items: Array<IUserModelDto>;
  meta: IPaginateUsers;
}

/** Wallet */
export interface IWalletModel {
  __typename?: 'WalletModel';
  /** Amount */
  amount: Scalars['Float'];
  blockedAmount: Scalars['Float'];
  createdDate: Scalars['DateTime'];
  /** Currency */
  currency?: Maybe<ICurrencyModel>;
  id: Scalars['Int'];
  updatedDate: Scalars['DateTime'];
  user?: Maybe<IUserModel>;
}

export interface IWalletModelDto {
  __typename?: 'WalletModelDTO';
  /** Amount */
  amount: Scalars['Float'];
  blockedAmount: Scalars['Float'];
  createdDate: Scalars['DateTime'];
  currency?: Maybe<ICurrencyModel>;
  id: Scalars['Int'];
  updatedDate: Scalars['DateTime'];
  user?: Maybe<IUserModelDto>;
}

export interface IWithdrawalInStripeInput {
  amount: Scalars['Float'];
  walletId: Scalars['Float'];
}
